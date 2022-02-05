import { css } from "@emotion/react";

import Link from "next/link";

import { THEME } from "modules/theme/theme";

const styles = css`
  color: ${THEME.link.alt};
  border-bottom: 1.5px solid transparent;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    height: 1.5px;
    width: 100%;
    background-color: ${THEME.link.alt};
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
  }
  &:hover:before {
    opacity: 1;
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
