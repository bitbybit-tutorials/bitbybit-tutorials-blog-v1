import { useContext } from "react";
import { css } from "@emotion/react";

import Image from "next/image";
import Link from "next/link";

import { BREAKPOINTS } from "modules/theme/constants/breakpoints";
import { ThemeContext } from "modules/theme/theme-context";
import { THEMES_MAP } from "modules/theme/theme";

const iconStyles = css`
  display: block;
  height: 3rem;
  width: 3rem;
  position: relative;
  margin-left: -0.8rem;
  margin-right: 0.8rem;

  @media only screen and (min-width: ${BREAKPOINTS.small}) {
    display: none;
  }
`;

const fullLogoStyles = css`
  display: none;
  width: 10.5rem;
  height: 2.5rem;
  position: relative;
  margin-left: -0.8rem;

  @media only screen and (min-width: ${BREAKPOINTS.small}) {
    display: block;
  }
`;

type Props = {
  onClick?: () => void;
};

export default function Logo({ onClick }: Props) {
  const { activeTheme } = useContext(ThemeContext);

  return (
    <Link href="/">
      <a onClick={onClick}>
        <span css={iconStyles}>
          <Image
            src="/images/logo/logo_icon_purple.svg"
            alt="Logo icon"
            layout="fill"
            objectFit="cover"
          />
        </span>
        {activeTheme && (
          <span css={fullLogoStyles}>
            <Image
              src={`/images/logo/logo_full_icon_purple_text_${
                (activeTheme === THEMES_MAP.light && "black") ||
                (activeTheme === THEMES_MAP.dark && "white")
              }.svg`}
              alt="Logo full text"
              layout="fill"
              objectFit="cover"
            />
          </span>
        )}
      </a>
    </Link>
  );
}
