"use client";

import type {
  AnchorHTMLAttributes,
  ReactNode,
} from "react";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

const EXTERNAL_BOOKING_URL =
  "https://syhotelsbelek.rezervasyonal.com/";

type ReservationLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "rel" | "target"
> & {
  children: ReactNode;
};

export default function ReservationLink({
  children,
  ...props
}: ReservationLinkProps) {
  const locale = useLocale();

  if (locale === "tr") {
    return (
      <Link href="/reservation" {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={EXTERNAL_BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
