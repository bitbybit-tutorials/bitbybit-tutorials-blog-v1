import { css, SerializedStyles } from "@emotion/react";

import { BREAKPOINTS } from "modules/theme/constants/breakpoints";

const GRID_MAP: { [key: number]: SerializedStyles } = {
  3: css`
    @media only screen and (min-width: ${BREAKPOINTS.medium}) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (min-width: ${BREAKPOINTS.big}) {
      grid-template-columns: repeat(3, 1fr);
    }
  `,
  5: css`
    @media only screen and (min-width: ${BREAKPOINTS.medium}) {
      grid-template-columns: auto auto;
    }
    @media only screen and (min-width: ${BREAKPOINTS.big}) {
      grid-template-columns: auto auto auto;
    }
    @media only screen and (min-width: ${BREAKPOINTS.large}) {
      grid-template-columns: auto auto auto auto auto;
    }
  `,
};

const gridStyles = (numColumns: number) => css`
  display: grid;
  grid-gap: 1.5rem;

  @media only screen and (min-width: ${BREAKPOINTS.large}) {
    grid-gap: 2rem;
  }
  ${GRID_MAP[numColumns]};
`;

type Props = {
  children: React.ReactNode;
  numColumns: number;
};

export default function Grid({ children, numColumns }: Props) {
  return <div css={gridStyles(numColumns)}>{children}</div>;
}
