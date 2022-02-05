import { css } from "@emotion/react";

import { BREAKPOINTS } from "../constants/breakpoints";
import { FONT_NAMES, FONT_SIZES } from "../constants/fonts";
import { THEME } from "../theme";

export const TYPOGRAPHY_CLASSES_MAP = {
  headingSm: "heading-sm",
  headingMd: "heading-md",
  headingBig: "heading-big",
  headingLg: "heading-lg",
  headingXl: "heading-xl",
  link: "link",
  headingSection: "heading-section",
  textExtraSm: "text-extra-sm",
  textSm: "text-sm",
  textMd: "text-md",
  textBig: "text-big",
  textPrimary: "text-primary",
  textSecondary: "text-secondary",
  textItalic: "text-italic",
};

export const typographyStyles = css`
  .heading-sm {
    font-size: ${FONT_SIZES.small};
  }
  .heading-md {
    font-size: ${FONT_SIZES.small};

    @media only screen and (min-width: ${BREAKPOINTS.medium}) {
      font-size: ${FONT_SIZES.medium};
    }
  }
  .heading-big {
    font-size: ${FONT_SIZES.big};
    line-height: 2rem;
  }
  .heading-lg {
    font-size: ${FONT_SIZES.big};
    line-height: 2rem;

    @media only screen and (min-width: ${BREAKPOINTS.big}) {
      font-size: ${FONT_SIZES.large};
      line-height: 2.4rem;
    }
  }
  .heading-xl {
    font-size: ${FONT_SIZES.big};
    line-height: 2rem;

    @media only screen and (min-width: ${BREAKPOINTS.medium}) {
      font-size: ${FONT_SIZES.large};
      line-height: 2.4rem;
    }

    @media only screen and (min-width: ${BREAKPOINTS.big}) {
      line-height: 2.8rem;
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
  .heading-section {
    color: ${THEME.heading.section};
    font-size: ${FONT_SIZES.extraSmall};
    font-family: ${FONT_NAMES.serifRegular};
    letter-spacing: 2px;
    text-transform: uppercase;

    @media only screen and (min-width: ${BREAKPOINTS.medium}) {
      font-size: ${FONT_SIZES.medium};
    }
  }
  .text-extra-sm {
    font-size: ${FONT_SIZES.extraSmall};
  }
  .text-sm {
    font-size: ${FONT_SIZES.extraSmall};

    @media only screen and (min-width: ${BREAKPOINTS.medium}) {
      font-size: ${FONT_SIZES.small};
    }
  }
  .text-md {
    font-size: ${FONT_SIZES.small};

    @media only screen and (min-width: ${BREAKPOINTS.medium}) {
      font-size: ${FONT_SIZES.medium};
    }
  }
  .text-big {
    font-size: ${FONT_SIZES.medium};

    @media only screen and (min-width: ${BREAKPOINTS.medium}) {
      font-size: ${FONT_SIZES.big};
    }
  }
  .text-primary {
    color: ${THEME.text.primary};
  }
  .text-secondary {
    color: ${THEME.text.secondary};
  }
  .text-italic {
    font-family: ${FONT_NAMES.sansSerifItalic};
  }
`;
