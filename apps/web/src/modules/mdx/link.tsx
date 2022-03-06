import Link from "next/link";

type Props = {
  children: string;
  href: string;
};

export default function CustomLink({ href, children }: Props) {
  if (href.includes("http")) {
    return (
      <a
        className="link-alt"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link href={href}>
        <a href={href}>{children}</a>
      </Link>
    );
  }
}
