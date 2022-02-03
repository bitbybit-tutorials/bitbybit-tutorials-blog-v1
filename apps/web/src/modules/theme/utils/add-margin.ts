import { css } from "@emotion/react";

export const addMargin = (direction: string, value: string) => css`
    display: block;
    margin-${direction}: ${value};
`;
