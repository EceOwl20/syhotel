"use client";

import Script from "next/script";
import { useLocale } from "next-intl";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  COOKIE_CONSENT_EVENT,
  readCookiePreferences,
  type CookiePreferences,
} from "@/lib/cookieConsent";

import ConnexeaseWelcome from "./ConnexeaseWelcome";

const CONNEXEASE_CHANNEL_ID = "afcfdef6-9ebe-4c5b-ac37-1890010b1e93";
const AUTO_OPEN_DELAY_MS = 5_000;
const AUTO_OPEN_SESSION_KEY = "connexease-auto-opened";

function wasAutoOpenedInSession() {
  try {
    return sessionStorage.getItem(AUTO_OPEN_SESSION_KEY) === "true";
  } catch {
    return false;
  }
}

function markAutoOpenedInSession() {
  try {
    sessionStorage.setItem(AUTO_OPEN_SESSION_KEY, "true");
  } catch {
    // The in-memory timer still prevents repeated opening on this page.
  }
}

function removeConnexeaseMessenger() {
  document.getElementById("web-messenger-container")?.remove();
  window.__connexeaseWebMessengerInitialized = false;
}

declare global {
  interface Window {
    Connexease?: {
      open: () => void | Promise<void>;
      getDisplayedConversation?: () => {
        id: string;
      } | null;
      sendMessage?: (
        message: string | { type: "text"; text: string },
        conversationId?: string,
      ) => void | Promise<unknown>;
      createConversation?: (options: {
        messages: Array<{ type: "text"; text: string }>;
      }) => Promise<{ id: string }>;
      loadConversation?: (
        conversationId: string,
      ) => void | Promise<void>;
      setPredefinedMessage?: (
        message: string,
      ) => void | Promise<void>;
    };
    ConnexeaseWebMessenger?: {
      Init: (channelId: string) => void;
    };
    __connexeaseWebMessengerInitialized?: boolean;
  }
}

export default function LiveChat() {
  const locale = useLocale();
  const [isMessengerOpen, setIsMessengerOpen] = useState(false);
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);
  const hasFunctionalConsent = useSyncExternalStore(
    (onStoreChange) => {
      const handleConsentChange = (event: Event) => {
        const preferences = (event as CustomEvent<CookiePreferences>).detail;

        if (!preferences.functional) {
          removeConnexeaseMessenger();
          setIsWelcomeVisible(false);
        }

        onStoreChange();
      };

      window.addEventListener(COOKIE_CONSENT_EVENT, handleConsentChange);
      return () =>
        window.removeEventListener(
          COOKIE_CONSENT_EVENT,
          handleConsentChange,
        );
    },
    () => readCookiePreferences()?.functional ?? false,
    () => false,
  );

  useEffect(() => {
    if (!hasFunctionalConsent) return;

    let resizeObserver: ResizeObserver | undefined;
    let iframeStyleObserver: MutationObserver | undefined;
    let updateMessengerState: (() => void) | undefined;
    let autoOpenTimer: number | undefined;

    const observeMessenger = () => {
      const messenger = document.getElementById("web-messenger-container");

      if (!messenger) return false;

      updateMessengerState = () => {
        const { width, height } = messenger.getBoundingClientRect();
        const isOpen = width > 120 || height > 150;
        const isDesktop = window.matchMedia("(min-width: 768px)").matches;

        const setImportantStyle = (property: string, value: string) => {
          if (
            messenger.style.getPropertyValue(property) === value &&
            messenger.style.getPropertyPriority(property) === "important"
          ) {
            return;
          }

          messenger.style.setProperty(property, value, "important");
        };

  //       setImportantStyle("right", isDesktop ? "0.375rem" : "-0.125rem");
  //       setImportantStyle("bottom", isDesktop ? "0.4375rem" : "-0.5625rem");
  //       // Keep the provider iframe in the hit-testing tree. The branded
  //       // launcher sits above it visually while pointer events pass through.
  // setImportantStyle("opacity", "1");

setImportantStyle("right", isDesktop ? "0.375rem" : "-0.125rem");
setImportantStyle("bottom", isDesktop ? "0.4375rem" : "-0.5625rem");

setImportantStyle("opacity", "1");

setImportantStyle(
  "clip-path",
  isOpen ? "none" : "circle(28px at 50% 50%)",
);

setImportantStyle(
  "-webkit-clip-path",
  isOpen ? "none" : "circle(28px at 50% 50%)",
);

        setImportantStyle("z-index", isOpen ? "10001" : "9998");
        setIsMessengerOpen(isOpen);
        if (isOpen) setIsWelcomeVisible(false);
      };

      resizeObserver = new ResizeObserver(updateMessengerState);
      resizeObserver.observe(messenger);

      iframeStyleObserver = new MutationObserver(updateMessengerState);
      iframeStyleObserver.observe(messenger, {
        attributes: true,
        attributeFilter: ["class", "style"],
      });

      updateMessengerState();
      window.addEventListener("resize", updateMessengerState);

      if (
        autoOpenTimer === undefined &&
        !wasAutoOpenedInSession()
      ) {
        autoOpenTimer = window.setTimeout(() => {
          markAutoOpenedInSession();

          const { width, height } = messenger.getBoundingClientRect();
          const isAlreadyOpen = width > 120 || height > 150;

          if (isAlreadyOpen || !window.Connexease) return;

          setIsWelcomeVisible(true);
        }, AUTO_OPEN_DELAY_MS);
      }

      return true;
    };

    const mutationObserver = new MutationObserver(() => {
      if (observeMessenger()) mutationObserver.disconnect();
    });

    if (!observeMessenger()) {
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      mutationObserver.disconnect();
      resizeObserver?.disconnect();
      iframeStyleObserver?.disconnect();
      if (autoOpenTimer !== undefined) {
        window.clearTimeout(autoOpenTimer);
      }
      if (updateMessengerState) {
        window.removeEventListener("resize", updateMessengerState);
      }

      removeConnexeaseMessenger();
    };
  }, [hasFunctionalConsent]);

  const initializeMessenger = () => {
    if (
      window.__connexeaseWebMessengerInitialized ||
      document.getElementById("web-messenger-container") ||
      !window.ConnexeaseWebMessenger
    ) {
      return;
    }

    window.ConnexeaseWebMessenger.Init(CONNEXEASE_CHANNEL_ID);
    window.__connexeaseWebMessengerInitialized = true;
  };

  const openChatWithMessage = async (message: string) => {
    const messenger = window.Connexease;

    if (!messenger) return;

    setIsWelcomeVisible(false);

    try {
      await Promise.resolve(messenger.open());
    } catch {
      console.error("[LiveChat] Connexease açılamadı.");
      return;
    }

    const displayedConversation =
      messenger.getDisplayedConversation?.();

    if (displayedConversation && messenger.sendMessage) {
      try {
        await Promise.resolve(
          messenger.sendMessage(
            { type: "text", text: message },
            displayedConversation.id,
          ),
        );
        await Promise.resolve(messenger.setPredefinedMessage?.(""));
        return;
      } catch {
        // Continue with a new conversation or the prefilled-message fallback.
      }
    }

    if (messenger.createConversation) {
      try {
        const conversation = await messenger.createConversation({
          messages: [{ type: "text", text: message }],
        });

        await Promise.resolve(
          messenger.loadConversation?.(conversation.id),
        );
        await Promise.resolve(messenger.setPredefinedMessage?.(""));
        return;
      } catch {
        // Fall back to prefilling the native input when creation is unavailable.
      }
    }

    if (messenger.sendMessage) {
      try {
        await Promise.resolve(
          messenger.sendMessage({ type: "text", text: message }),
        );
        await Promise.resolve(messenger.setPredefinedMessage?.(""));
        return;
      } catch {
        // Fall back to prefilling the native input.
      }
    }

    try {
      await Promise.resolve(messenger.setPredefinedMessage?.(message));
    } catch {
      console.error("[LiveChat] Mesaj Connexease'e aktarılamadı.");
    }
  };

  if (!hasFunctionalConsent) return null;

  return (
    <>
      <Script
        id="connexease-live-chat"
        src="https://cdn.livechat.connexease.com/embed.js"
        strategy="afterInteractive"
        onReady={initializeMessenger}
      />

      {isWelcomeVisible && !isMessengerOpen ? (
        <ConnexeaseWelcome
          locale={locale}
          onClose={() => setIsWelcomeVisible(false)}
          onMessage={openChatWithMessage}
        />
      ) : null}

      <span
        aria-hidden="true"
        className={`live-chat-button fixed right-[5px] bottom-3 z-[10000]
          flex h-14 w-14 items-center justify-center rounded-full
          border border-white/35 bg-[#b99d75] text-white
          shadow-[0_6px_22px_rgba(0,0,0,0.28)]
          transition-[opacity,transform] duration-300
          pointer-events-none md:right-[13px] md:bottom-6
          ${isMessengerOpen ? "scale-75 opacity-0" : "scale-100 opacity-100"}`}
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3 1.7-5.1A7 7 0 0 1 3 12V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
          <path d="M8 10h.01M12 10h.01M16 10h.01" />
        </svg>
      </span>
    </>
  );
}
