import { css } from "@emotion/react";

import Image from "modules/image";
import { BREAKPOINTS } from "modules/theme/constants/breakpoints";
import Link from "next/link";

const iconStyles = css`
  display: block;
  height: 3rem;
  width: 3rem;
  position: relative;
  margin: 0;

  @media only screen and (min-width: ${BREAKPOINTS.small}) {
    display: none;
  }
`;

const fullLogoStyles = css`
  display: none;
  height: 2.25rem;
  width: 12rem;
  position: relative;
  margin: 0;

  @media only screen and (min-width: ${BREAKPOINTS.small}) {
    display: block;
  }
`;

type Props = {
  onClick?: () => void;
};

export default function Logo({ onClick }: Props) {
  return (
    <Link href="/">
      <a onClick={onClick}>
        <span css={iconStyles}>
          <Image priority src="/images/logo-icon.png" alt={"logo"} />
        </span>
        <span css={fullLogoStyles}>
          <Image priority src="/images/logo-full.png" alt={"logo"} />
        </span>
      </a>
    </Link>
  );
}
