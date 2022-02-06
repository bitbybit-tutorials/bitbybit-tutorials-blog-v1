import { css, Global } from "@emotion/react";

import { typographyStyles } from "./typography";
import { utilityStyles } from "./utilty";
import { FONT_NAMES, FONT_FACE, FONT_SIZES } from "../constants/fonts";
import { COLOR_VARIABLES } from "../constants/colors";
import { THEME_COLORS } from "../constants/theme-colors";
import { THEME } from "../theme";
import { BREAKPOINTS } from "../constants/breakpoints";

export const globalStyles = (
  <Global
    styles={css`
      :root {
        ${COLOR_VARIABLES};
      }

      ${THEME_COLORS};
      ${FONT_FACE};

      html {
      }
      body {
        background-color: ${THEME.body.background};
        color: ${THEME.body.text};
        font-family: ${FONT_NAMES.sansSerifRegular}, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
        letter-spacing: 0.8px;
        transition: background 0.25s ease-in-out, color 0.25s ease-in-out,
          opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
      }
      *,
      *:after,
      *:before {
        box-sizing: border-box;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: ${THEME.heading.primary};
        font-family: ${FONT_NAMES.serifMedium}, Times, serif;
        margin: 0;
      }
      pre {
        font-family: ${FONT_NAMES.monoRegular}, monospace;
        font-size: ${FONT_SIZES.small};
        line-height: 1.6rem;
      }
      p {
        font-size: ${FONT_SIZES.small};
        line-height: 1.8rem;
        margin-bottom: 1.5rem;

        @media only screen and (min-width: ${BREAKPOINTS.medium}) {
          font-size: ${FONT_SIZES.medium};
          line-height: 2rem;
          margin-bottom: 2.5rem;
        }
      }
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      a {
        cursor: pointer;
        text-decoration: none;
      }
      img {
        max-width: 100%;
        display: block;
      }
      .icon {
        cursor: pointer;
      }
      .input {
        color: ${THEME.input.text};
        min-width: 0;
        -webkit-appearance: none;
      }
      ::selection {
        background-color: ${THEME.selection.background};
        color: ${THEME.selection.text};
      }
      ::placeholder {
        color: ${THEME.input.placeholder};
      }
      .smooth-scroll {
        scroll-behavior: smooth;
      }
      .body-overflow-hidden {
        overflow: hidden;
      }
      ${typographyStyles}
      ${utilityStyles}
    `}
  />
);
