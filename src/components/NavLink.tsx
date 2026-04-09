import Link, { LinkProps } from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type NavLinkCompatProps = LinkProps & {
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
};

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, children, ...props }, ref) => (
    <Link ref={ref} className={cn(className, activeClassName)} {...props}>
      {children}
    </Link>
  ),
);

NavLink.displayName = "NavLink";

export { NavLink };
