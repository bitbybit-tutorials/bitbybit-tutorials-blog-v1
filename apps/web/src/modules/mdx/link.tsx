import { css } from "@emotion/react";

import Link from "next/link";

import { THEME } from "modules/theme/theme";

const styles = css`
  color: ${THEME.link.alt};
  border-bottom: 1.5px solid transparent;
  transition: border-bottom 0.25s ease-in-out;
  &:hover {
    border-bottom: 1.5px solid ${THEME.link.alt};
  }
`;

type Props = {
  children: string;
  href: string;
};

export default function CustomLink({ href, children }: Props) {
  if (href.includes("http")) {
    return (
      <a css={styles} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  } else {
    return (
      <Link href={href}>
        <a css={styles} href={href}>
          {children}
        </a>
      </Link>
    );
  }
}
