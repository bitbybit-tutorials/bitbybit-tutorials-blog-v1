import { css } from "@emotion/react";
import Highlight, { defaultProps } from "prism-react-renderer";

import { THEME } from "modules/theme/theme";
import { CUSTOM_PRISM_THEME } from "./custom-prism-theme";
import { BREAKPOINTS } from "modules/theme/constants/breakpoints";

const containerStyles = css`
  position: relative;
`;

const codeBlockStyles = (extraMargin: boolean) => css`
  background-color: ${THEME.codeblock.background};
  border-radius: 8px;
  overflow-y: auto;
  padding: 2rem;
  margin: ${extraMargin ? "5.5rem 0 3rem" : "3rem 0"};
  position: relative;
`;

const metaStyles = css`
  position: absolute;
  top: -1.8rem;
  right: 2rem;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 0.1rem 1rem 0.5rem;
  background-color: ${THEME.codeblock.background};

  @media only screen and (min-width: ${BREAKPOINTS.medium}) {
    top: -2.1rem;
  }
`;

type Props = {
  children: string;
  metastring: string;
};

export default function CodeBlock({ children, metastring }: Props) {
  return (
    <div css={containerStyles}>
      {metastring && <span css={metaStyles}>{metastring}</span>}
      <Highlight
        {...defaultProps}
        code={children}
        language="jsx"
        theme={CUSTOM_PRISM_THEME}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            css={codeBlockStyles(Boolean(metastring))}
            style={{ ...style }}
          >
            {tokens.slice(0, -1).map((line, i) => (
              <div key={`${i}`} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
