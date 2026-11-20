"use client";

import type {
  AnchorHTMLAttributes,
  ReactNode,
} from "react";
import { useLocale } from "next-intl";

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

  return (
    <a
      href={`/api/reservation?locale=${encodeURIComponent(locale)}`}
      {...props}
    >
      {children}
    </a>
  );
}
