"use client";

import { useEffect, useState, type FormEvent } from "react";

type SupportedLocale = "tr" | "en" | "de" | "ru";

type WelcomeCopy = {
  greeting: string;
  closeLabel: string;
  inputLabel: string;
  placeholder: string;
  sendLabel: string;
  options: Array<{
    label: string;
    message: string;
  }>;
};

const WELCOME_COPY: Record<SupportedLocale, WelcomeCopy> = {
  tr: {
    greeting: "Merhaba! Size nasıl yardımcı olabiliriz?",
    closeLabel: "Karşılama mesajını kapat",
    inputLabel: "Mesajınız",
    placeholder: "Mesajınızı yazın...",
    sendLabel: "Gönder",
    options: [
      {
        label: "Rezervasyon",
        message: "Rezervasyon hakkında bilgi almak istiyorum.",
      },
      {
        label: "Odalar ve fiyatlar",
        message: "Odalar ve fiyatlar hakkında bilgi almak istiyorum.",
      },
      {
        label: "Kampanyalar",
        message: "Kampanyalar hakkında bilgi almak istiyorum.",
      },
      {
        label: "Temsilciye bağlan",
        message: "Bir temsilciyle görüşmek istiyorum.",
      },
    ],
  },
  en: {
    greeting: "Hello! How can we help you?",
    closeLabel: "Close welcome message",
    inputLabel: "Your message",
    placeholder: "Type your message...",
    sendLabel: "Send",
    options: [
      {
        label: "Reservation",
        message: "I would like information about reservations.",
      },
      {
        label: "Rooms and rates",
        message: "I would like information about rooms and rates.",
      },
      {
        label: "Special offers",
        message: "I would like information about special offers.",
      },
      {
        label: "Talk to an agent",
        message: "I would like to speak with an agent.",
      },
    ],
  },
  de: {
    greeting: "Hallo! Wie können wir Ihnen helfen?",
    closeLabel: "Begrüßungsnachricht schließen",
    inputLabel: "Ihre Nachricht",
    placeholder: "Nachricht eingeben...",
    sendLabel: "Senden",
    options: [
      {
        label: "Reservierung",
        message: "Ich möchte Informationen zur Reservierung erhalten.",
      },
      {
        label: "Zimmer und Preise",
        message: "Ich möchte Informationen zu Zimmern und Preisen erhalten.",
      },
      {
        label: "Angebote",
        message: "Ich möchte Informationen zu den Angeboten erhalten.",
      },
      {
        label: "Mit einem Mitarbeiter sprechen",
        message: "Ich möchte mit einem Mitarbeiter sprechen.",
      },
    ],
  },
  ru: {
    greeting: "Здравствуйте! Чем мы можем вам помочь?",
    closeLabel: "Закрыть приветственное сообщение",
    inputLabel: "Ваше сообщение",
    placeholder: "Введите сообщение...",
    sendLabel: "Отправить",
    options: [
      {
        label: "Бронирование",
        message: "Я хочу получить информацию о бронировании.",
      },
      {
        label: "Номера и цены",
        message: "Я хочу получить информацию о номерах и ценах.",
      },
      {
        label: "Специальные предложения",
        message: "Я хочу получить информацию о специальных предложениях.",
      },
      {
        label: "Связаться с оператором",
        message: "Я хочу связаться с оператором.",
      },
    ],
  },
};

async function playNotificationSound() {
  const audioContext = new AudioContext();

  try {
    if (audioContext.state === "suspended") {
      await audioContext.resume();
    }

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const startAt = audioContext.currentTime;

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(880, startAt);
    oscillator.frequency.setValueAtTime(660, startAt + 0.12);

    gain.gain.setValueAtTime(0.0001, startAt);
    gain.gain.exponentialRampToValueAtTime(0.12, startAt + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, startAt + 0.28);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(startAt);
    oscillator.stop(startAt + 0.3);
    oscillator.addEventListener("ended", () => {
      void audioContext.close();
    });
  } catch {
    void audioContext.close();
  }
}

type ConnexeaseWelcomeProps = {
  locale: string;
  onClose: () => void;
  onMessage: (message: string) => Promise<void>;
};

export default function ConnexeaseWelcome({
  locale,
  onClose,
  onMessage,
}: ConnexeaseWelcomeProps) {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const copy =
    WELCOME_COPY[locale as SupportedLocale] ?? WELCOME_COPY.en;

  useEffect(() => {
    void playNotificationSound();
  }, []);

  const submitMessage = async (selectedMessage: string) => {
    const normalizedMessage = selectedMessage.trim();

    if (!normalizedMessage || isSubmitting) return;

    setIsSubmitting(true);

    try {
      await onMessage(normalizedMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void submitMessage(message);
  };

  return (
    <section
      role="dialog"
      aria-label={copy.greeting}
      className="fixed right-4 bottom-24 z-[10002] w-[calc(100vw-2rem)]
        max-w-[22rem] overflow-hidden rounded-2xl border border-black/10
        bg-white shadow-[0_18px_55px_rgba(0,0,0,0.24)]"
    >
      <header className="flex items-center justify-between bg-[#b99d75]
        px-4 py-3 text-white"
      >
        <div>
          <p className="text-sm font-semibold tracking-wide">SY Hotels</p>
          <p className="text-xs text-white/80">Luxury Belek</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label={copy.closeLabel}
          className="flex h-9 w-9 items-center justify-center rounded-full
            text-xl text-white/90 transition-colors hover:bg-white/15
            focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-white"
        >
          ×
        </button>
      </header>

      <div className="space-y-3 p-4">
        <p className="rounded-2xl rounded-bl-sm bg-[#f3eee9] px-4 py-3
          text-sm leading-5 text-[#3f3935]"
        >
          {copy.greeting}
        </p>

        <div className="grid gap-2">
          {copy.options.map((option) => (
            <button
              key={option.label}
              type="button"
              disabled={isSubmitting}
              onClick={() => void submitMessage(option.message)}
              className="rounded-xl border border-[#b99d75]/45 bg-white
                px-3 py-2 text-left text-sm text-[#5f5147]
                transition-colors hover:bg-[#f7f2ed]
                focus-visible:outline-2 focus-visible:outline-offset-2
                focus-visible:outline-[#b99d75] disabled:cursor-wait
                disabled:opacity-60"
            >
              {option.label}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <label htmlFor="connexease-welcome-message" className="sr-only">
            {copy.inputLabel}
          </label>
          <input
            id="connexease-welcome-message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder={copy.placeholder}
            disabled={isSubmitting}
            className="min-w-0 flex-1 rounded-xl border border-black/15
              px-3 py-2 text-sm text-[#3f3935] outline-none
              placeholder:text-black/40 focus:border-[#b99d75]"
          />
          <button
            type="submit"
            disabled={isSubmitting || !message.trim()}
            aria-label={copy.sendLabel}
            className="rounded-xl bg-[#b99d75] px-4 py-2 text-sm
              font-medium text-white transition-colors hover:bg-[#a98d68]
              focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-[#b99d75] disabled:cursor-not-allowed
              disabled:opacity-50"
          >
            {copy.sendLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
