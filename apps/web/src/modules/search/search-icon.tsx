import { MdOutlineSearch } from "react-icons/md";
import { css } from "@emotion/react";

import { THEME } from "modules/theme/theme";
import { BREAKPOINTS } from "modules/theme/constants/breakpoints";

const styles = css`
  color: ${THEME.nav.icon.default};
  &:hover {
    color: ${THEME.nav.icon.hover};
  }
  font-size: 1.7rem;

  @media only screen and (min-width: ${BREAKPOINTS.small}) {
    font-size: 1.8rem;
  }
`;

type Props = {
  toggleSearch: () => void;
};

export default function SearchIcon({ toggleSearch }: Props) {
  return (
    <span className="icon" css={styles} onClick={toggleSearch}>
      <MdOutlineSearch />
    </span>
  );
}
