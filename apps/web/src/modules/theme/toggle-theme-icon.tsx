import { useState, useEffect } from "react";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import { css } from "@emotion/react";

import { THEMES_MAP, THEME } from "./theme";
import { BREAKPOINTS } from "./constants/breakpoints";

const styles = css`
  color: ${THEME.nav.icon.default};
  &:hover {
    color: ${THEME.nav.icon.hover};
  }
  font-size: 1.4rem;

  @media only screen and (min-width: ${BREAKPOINTS.small}) {
    font-size: 1.6rem;
  }
`;

export default function ToggleThemeIcon() {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme =
    activeTheme === THEMES_MAP.light ? THEMES_MAP.dark : THEMES_MAP.light;

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    activeTheme && window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  return (
    <span
      className="icon"
      css={styles}
      onClick={() => setActiveTheme(inactiveTheme)}
    >
      {activeTheme === THEMES_MAP.light ? (
        <IoSunnySharp className="icon" />
      ) : (
        <IoMoonSharp className="icon" />
      )}
    </span>
  );
}
