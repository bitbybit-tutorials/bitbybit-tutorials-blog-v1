import { useState, useEffect } from "react";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";

import styles from "./toggle-theme-icon.module.css";
import typographyStyles from "styles/typography.module.css";

export default function ToggleThemeIcon() {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);

  const toggleActiveTheme = () => {
    setActiveTheme(activeTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    activeTheme && window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  return (
    <span className={typographyStyles.icon} onClick={toggleActiveTheme}>
      {activeTheme === "dark" ? (
        <IoSunnySharp size={"1.6em"} color="grey" />
      ) : (
        <IoMoonSharp size={"1.6rem"} color="grey" />
      )}
    </span>
  );
}
