import { useContext } from "react";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import { css } from "@emotion/react";

import { THEMES_MAP, THEME } from "./theme";
import { ThemeContext } from "modules/theme/theme-context";
import { BREAKPOINTS } from "./constants/breakpoints";

const styles = css`
  color: ${THEME.nav.icon.default};
  &:hover {
    color: ${THEME.nav.icon.hover};
  }
  font-size: 1.5rem;

  @media only screen and (min-width: ${BREAKPOINTS.small}) {
    font-size: 1.6rem;
  }
`;

export default function ToggleThemeIcon() {
  const { activeTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <span className="icon" css={styles} onClick={toggleTheme}>
      {activeTheme === THEMES_MAP.light ? (
        <IoSunnySharp className="icon" />
      ) : (
        <IoMoonSharp className="icon" />
      )}
    </span>
  );
}
