import { PropsWithChildren } from "react";
import Link from "next/link";

export default function CustomLink({
  children,
  ...rest
}: PropsWithChildren<React.AnchorHTMLAttributes<HTMLAnchorElement>>) {
  const className = "text-blue-400 underline hover:no-underline";

  return (
    <Link className={className} {...rest} href={rest.href as string}>
      {children}
    </Link>
  );
}
