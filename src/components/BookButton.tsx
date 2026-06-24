"use client";

import Link from "next/link";
import { forwardRef } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";

export const BookButton = forwardRef<HTMLAnchorElement, ButtonProps>(function BookButton(
  { asChild, children, ...props },
  ref,
) {
  return (
    <Button asChild={asChild ?? true} {...props}>
      <Link ref={ref} href="/booking">
        {children}
      </Link>
    </Button>
  );
});
