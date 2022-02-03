import { MdOutlineSearch } from "react-icons/md";
import { css } from "@emotion/react";

import { THEME } from "modules/theme/theme";

const styles = css`
  transition: all 0s;
  color: ${THEME.nav.icon.default};
  &:hover {
    color: ${THEME.nav.icon.hover};
  }
`;

type Props = {
  toggleSearch: () => void;
};

export default function SearchIcon({ toggleSearch }: Props) {
  return (
    <span className="icon" css={styles} onClick={toggleSearch}>
      <MdOutlineSearch size={"1.8rem"} />
    </span>
  );
}
