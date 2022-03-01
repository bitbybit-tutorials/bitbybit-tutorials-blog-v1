import React from "react";

export const ThemeContext = React.createContext<{
  activeTheme: string | undefined;
  toggleTheme: () => void;
}>({ activeTheme: "", toggleTheme: () => {} });
