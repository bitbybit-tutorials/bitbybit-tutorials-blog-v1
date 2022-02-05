import { css } from "@emotion/react";

import { BREAKPOINTS } from "modules/theme/constants/breakpoints";
import { TYPOGRAPHY_CLASSES_MAP } from "modules/theme/styles/typography";

const styles = css`
  margin-top: 0.5rem;

  .content {
    margin-top: 1.2rem;
  }
  @media only screen and (min-width: ${BREAKPOINTS.medium}) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  @media only screen and (min-width: ${BREAKPOINTS.large}) {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
  }
`;

type Props = {
  content: React.ReactNode;
  title?: string;
};

export default function Section({ content, title }: Props) {
  return (
    <div css={styles}>
      {title && (
        <h3 className={TYPOGRAPHY_CLASSES_MAP.sectionHeading}>{title}</h3>
      )}
      <div className="content">{content}</div>
    </div>
  );
}
