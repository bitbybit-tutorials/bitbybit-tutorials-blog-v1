import { useState, useEffect } from "react";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import { css } from "@emotion/react";

import { THEMES_MAP, THEME } from "./theme";

const styles = css`
  color: ${THEME.nav.icon.default};
  &:hover {
    color: ${THEME.nav.icon.hover};
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
        <IoSunnySharp size={"1.6em"} />
      ) : (
        <IoMoonSharp size={"1.6rem"} />
      )}
    </span>
  );
}
