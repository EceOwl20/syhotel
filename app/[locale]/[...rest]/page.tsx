import { notFound } from "next/navigation";

// Disable instant navigation validation for the 404 catch-all route
export const instant = false;

export default function CatchAllPage() {
  notFound();
}