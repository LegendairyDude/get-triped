"use client";
import Link from "next/link";

export function PrimaryButton({ href, children, className = "", ...props }) {
  const baseClasses =
    "inline-block bg-primary text-white font-semibold py-2 px-4 rounded transition-colors hover:bg-accent";
  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}
