import { css } from "@emotion/react";

import { BREAKPOINTS } from "../constants/breakpoints";
import { FONT_NAMES, FONT_SIZES } from "../constants/fonts";
import { THEME } from "../theme";

export const TYPOGRAPHY_CLASSES_MAP = {
  headingSm: "headingSm",
  headingMd: "headingMd",
  headingBig: "headingBig",
  headingLg: "headingLg",
  headingXl: "headingXl",
  link: "link",
  sectionHeading: "sectionHeading",
  textExtraSm: "textExtraSm",
  textSm: "textSm",
  textMd: "textMd",
  textBig: "textBig",
  textPrimary: "textPrimary",
  textSecondary: "textSecondary",
  textItalic: "textItalic",
};

export const typographyStyles = css`
  .headingSm {
    font-size: ${FONT_SIZES.small};
  }
  .headingMd {
    font-size: ${FONT_SIZES.small};

    @media only screen and (min-width: ${BREAKPOINTS.medium}) {
      font-size: ${FONT_SIZES.medium};
    }
  }
  .headingBig {
    font-size: ${FONT_SIZES.big};
    line-height: 1.8rem;
  }
  .headingLg {
    font-size: ${FONT_SIZES.big};
    line-height: 2.2rem;
    @media only screen and (min-width: ${BREAKPOINTS.medium}) {
      font-size: ${FONT_SIZES.large};
      line-height: 2.4rem;
    }
  }
  .headingXl {
    font-size: ${FONT_SIZES.big};
    line-height: 1.2;

    @media only screen and (min-width: ${BREAKPOINTS.medium}) {
      font-size: ${FONT_SIZES.large};
      margin-bottom: 0.6rem;
    }

    @media only screen and (min-width: ${BREAKPOINTS.big}) {
      font-size: ${FONT_SIZES.extraLarge};
    }
  }
  .link {
    color: ${THEME.link.default};
    transition: all 0.15s ease-in-out;
    &:hover {
      color: ${THEME.link.hover};
    }
  }
  .sectionHeading {
    color: ${THEME.heading.section};
    font-size: ${FONT_SIZES.medium};
    font-family: ${FONT_NAMES.serifRegular};
    letter-spacing: 2px;
    text-transform: uppercase;

    @media only screen and (min-width: ${BREAKPOINTS.medium}) {
      font-size: ${FONT_SIZES.big};
    }
  }
  .textExtraSm {
    font-size: ${FONT_SIZES.extraSmall};
  }
  .textSm {
    font-size: ${FONT_SIZES.extraSmall};

    @media only screen and (min-width: ${BREAKPOINTS.medium}) {
      font-size: ${FONT_SIZES.small};
    }
  }
  .textMd {
    font-size: ${FONT_SIZES.small};
    line-height: 1.8rem;

    @media only screen and (min-width: ${BREAKPOINTS.medium}) {
      font-size: ${FONT_SIZES.medium};
    }
  }
  .textBig {
    font-size: ${FONT_SIZES.medium};

    @media only screen and (min-width: ${BREAKPOINTS.medium}) {
      font-size: ${FONT_SIZES.big};
    }
  }
  .textPrimary {
    color: ${THEME.text.primary};
  }
  .textSecondary {
    color: ${THEME.text.secondary};
  }
  .textItalic {
    font-family: ${FONT_NAMES.sansSerifItalic};
  }
`;
