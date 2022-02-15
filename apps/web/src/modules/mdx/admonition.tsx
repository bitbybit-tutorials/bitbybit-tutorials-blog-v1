import { css } from "@emotion/react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { GoLightBulb } from "react-icons/go";
import { IoWarningOutline } from "react-icons/io5";
import { ImFire } from "react-icons/im";

import { THEME } from "modules/theme/theme";
import { BREAKPOINTS } from "modules/theme/constants/breakpoints";

const styles = (borderColor: string) => css`
  background-color: ${THEME.admonition.background};
  border-left: 5px solid ${borderColor};
  border-radius: 8px;
  margin: 2rem 0;
  overflow-y: auto;
  padding: 2.5rem 1.5rem 0;
  position: relative;

  .icon {
    position: absolute;
    top: 1rem;
    left: 1rem;
    color: ${borderColor};
  }

  @media only screen and (min-width: ${BREAKPOINTS.medium}) {
    margin: 3.5rem 0;
    padding: 3rem 1.5rem 0;
  }
`;

type Props = {
  text: string;
  type: "caution" | "danger" | "info" | "tip";
};

export default function Admonition({ text, type }: Props) {
  const icon = (type: string) => {
    switch (type) {
      case "caution":
        return <IoWarningOutline size={"2.1rem"} className="icon" />;
      case "danger":
        return <ImFire size={"1.8rem"} className="icon" />;
      case "info":
        return (
          <IoIosInformationCircleOutline size={"2.2rem"} className="icon" />
        );
      case "tip":
        return <GoLightBulb size={"1.7rem"} className="icon" />;
    }
  };

  return (
    <div css={styles(THEME.admonition.border[type])}>
      {icon(type)}
      <p>{text}</p>
    </div>
  );
}
