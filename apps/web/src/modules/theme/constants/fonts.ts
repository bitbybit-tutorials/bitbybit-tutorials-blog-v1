import { css } from "@emotion/react";

export const FONT_NAMES = {
  serifRegular: "RobotoSlab-Regular",
  serifMedium: "RobotoSlab-Medium",
  sansSerifLight: "Roboto-Light",
  sansSerifRegular: "Roboto-Regular",
  sansSerifItalic: "Roboto-Italic",
  monoRegular: "RobotoMono-Regular",
};

const FONT_SOURCE = {
  serifRegular: 'url("/fonts/Roboto_Slab/RobotoSlab-Regular.ttf")',
  serifMedium: 'url("/fonts/Roboto_Slab/RobotoSlab-Medium.ttf")',
  sansSerifRegular: 'url("/fonts/Roboto/Roboto-Regular.ttf")',
  sansSerifItalic: 'url("/fonts/Roboto/Roboto-Italic.ttf")',
  monoRegular: 'url("/fonts/Roboto_Mono/RobotoMono-Regular.ttf")',
};

export const FONT_FACE = css`
  @font-face {
    font-family: ${FONT_NAMES.serifRegular};
    src: ${FONT_SOURCE.serifRegular};
  }
  @font-face {
    font-family: ${FONT_NAMES.serifMedium};
    src: ${FONT_SOURCE.serifMedium};
  }
  @font-face {
    font-family: ${FONT_NAMES.sansSerifRegular};
    src: ${FONT_SOURCE.sansSerifRegular};
  }
  @font-face {
    font-family: ${FONT_NAMES.sansSerifItalic};
    src: ${FONT_SOURCE.sansSerifItalic};
  }
  @font-face {
    font-family: ${FONT_NAMES.monoRegular};
    src: ${FONT_SOURCE.monoRegular};
  }
`;

export const FONT_SIZES = {
  extraSmall: "0.875rem", // 14px
  small: "1rem", // 16px
  medium: "1.125rem", // 18px
  big: "1.25rem", // 20px
  large: "1.625rem", // 26px
  extraLarge: "2.125rem", // 34px
};
