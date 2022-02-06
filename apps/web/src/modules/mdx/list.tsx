import { css } from "@emotion/react";
import { RiArrowDropRightLine } from "react-icons/ri";

import { FONT_SIZES } from "modules/theme/constants/fonts";
import { THEME } from "modules/theme/theme";
import { BREAKPOINTS } from "modules/theme/constants/breakpoints";

const styles = css`
  margin-bottom: 2.5rem;
  margin-top: -1.5rem;

  li {
    font-size: ${FONT_SIZES.small};
    line-height: 1.8rem;

    @media only screen and (min-width: ${BREAKPOINTS.medium}) {
      font-size: ${FONT_SIZES.medium};
      line-height: 2rem;
    }
  }

  .icon {
    position: relative;
    top: 0.95rem;
  }

  @media only screen and (min-width: ${BREAKPOINTS.medium}) {
    padding-left: 1rem;
  }
`;

type Props = {
  children: any;
};

export default function List({ children }: Props) {
  return (
    <ul css={styles}>
      {Object.entries(children).map(([_key, value]: any, index) => {
        if (value.props.parentName === "ul") {
          return (
            <li key={`${index}`}>
              <RiArrowDropRightLine
                className="icon"
                size={"2.8rem"}
                color={THEME.list.bullet}
              />
              <span>{value.props.children}</span>
            </li>
          );
        } else if (value.props.parentName === "ol") {
          return (
            <li key={`${index}`}>
              <span>{value.props.children}</span>
            </li>
          );
        }
      })}
    </ul>
  );
}
