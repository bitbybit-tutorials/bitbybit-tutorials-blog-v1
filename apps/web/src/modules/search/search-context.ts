import React from "react";

// Set default value
export const SearchContext = React.createContext<{
  showSearch: boolean;
  toggleSearch: (state: boolean) => void;
}>({
  showSearch: false,
  toggleSearch: (state) => {},
});
