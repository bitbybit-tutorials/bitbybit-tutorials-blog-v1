import { css } from "@emotion/react";
import React from "react";

import { THEME } from "modules/theme/theme";
import { TYPOGRAPHY_CLASSES_MAP } from "modules/theme/styles/typography";

const styles = css`
  background-color: ${THEME.codeblock.inline};
  padding: 0.15rem 0.3rem;
  border-radius: 8px;
`;

type Props = {
  children: string;
};

export default function InlineCode({ children }: Props) {
  return (
    <span css={styles} className={TYPOGRAPHY_CLASSES_MAP.textSm}>
      {children}
    </span>
  );
}
