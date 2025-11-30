"use client";

import { useScrollAnimation } from "@/src/hooks/useScrollAnimation";

export default function ScrollAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useScrollAnimation();

  return <>{children}</>;
}
