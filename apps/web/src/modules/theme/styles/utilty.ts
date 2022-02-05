import { css } from "@emotion/react";

import { BREAKPOINTS } from "../constants/breakpoints";

export const UTILITY_CLASSES_MAP = {
  imageRegular: "image-regular",
  imageFullWidth: "image-full-width",
};

export const utilityStyles = css`
  .container-round {
    border-radius: 8px;
  }

  .container-circle {
    border-radius: 50%;
  }

  .image-regular {
    height: 45vw;
    min-height: 8rem;
    position: relative;
  }

  .image-full-width {
    border-radius: 8px;
    position: relative;
    height: 45vw;
    min-height: 8rem;
  }

  @media only screen and (min-width: ${BREAKPOINTS.small}) {
    .image-regular {
      height: 28vw;
    }
  }

  @media only screen and (min-width: ${BREAKPOINTS.medium}) {
    .image-regular {
      height: 25vw;
    }
    .image-full-width {
      align-self: center;
      height: 22vw;
      width: 32vw;
    }
  }

  @media only screen and (min-width: ${BREAKPOINTS.big}) {
    .image-regular {
      height: 20vw;
      width: 25vw;
    }
  }

  @media only screen and (min-width: ${BREAKPOINTS.large}) {
    .image-regular {
      height: 18vw;
    }
    .image-full-width {
      width: 25vw;
      height: 18vw;
    }
  }
`;
