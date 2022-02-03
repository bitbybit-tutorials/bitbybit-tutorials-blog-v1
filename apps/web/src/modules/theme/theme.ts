export const THEMES_MAP = {
  dark: "dark",
  light: "light",
};

export const THEME: Theme = {
  body: {
    background: "var(--theme-body-background)",
    text: "var(--theme-body-text)",
  },
  buttonPrimary: {
    background: "var(--theme-button-primary-background)",
    text: "var(--theme-button-primary-text)",
  },
  buttonSecondary: {
    default: {
      background: "var(--theme-button-secondary-default-background)",
      disabledBackground:
        "var(--theme-button-secondary-default-disabled-background)",
      disabledText: "var(--theme-button-secondary-default-disabled-text)",
      text: "var(--theme-button-secondary-default-text)",
      textHover: "var(--theme-button-secondary-default-text-hover)",
    },
    alt: {
      background: "var(--theme-button-secondary-alt-background)",
      disabledBackground:
        "var(--theme-button-secondary-alt-disabled-background)",
      disabledText: "var(--theme-button-secondary-alt-disabled-text)",
      text: "var(--theme-button-secondary-alt-text)",
      textHover: "var(--theme-button-secondary-alt-text-hover)",
    },
  },
  codeblock: {
    background: "var(--theme-codeblock-background)",
    text: "var(--theme-codeblock-text)",
    char: "var(--theme-codeblock-char)",
    comment: "var(--theme-codeblock-comment)",
    keyword: "var(--theme-codeblock-keyword)",
    primitive: "var(--theme-codeblock-primitive)",
    string: "var(--theme-codeblock-string)",
    variable: "var(--theme-codeblock-variable)",
    boolean: "var(--theme-codeblock-boolean)",
    punctuation: "var(--theme-codeblock-punctuation)",
    tag: "var(--theme-codeblock-tag)",
    function: "var(--theme-codeblock-function)",
    className: "var(--theme-codeblock-className)",
    method: "var(--theme-codeblock-method)",
    operator: "var(--theme-codeblock-operator)",
    inline: "var(--theme-codeblock-inline)",
  },
  heading: {
    primary: "var(--theme-heading-primary)",
    section: "var(--theme-heading-section)",
  },
  input: {
    border: "var(--theme-input-border)",
    placeholder: "var(--theme-input-placeholder)",
    text: "var(--theme-input-text)",
  },
  link: {
    active: "var(--theme-link-active)",
    alt: "var(--theme-link-alt)",
    default: "var(--theme-link-default)",
    hover: "var(--theme-link-hover)",
  },
  list: {
    bullet: "var(--theme-list-bullet)",
  },
  nav: {
    link: {
      default: "var(--theme-nav-link-default)",
      hover: "var(--theme-nav-link-hover)",
      active: "var(--theme-nav-link-active)",
      border: "var(--theme-nav-link-border)",
    },
    icon: {
      default: "var(--theme-nav-icon-default)",
      hover: "var(--theme-nav-icon-hover)",
      active: "var(--theme-nav-icon-active)",
    },
  },
  post: {
    background: "var(--theme-post-background)",
  },
  search: {
    background: "var(--theme-search-background)",
    rowBackground: "var(--theme-search-row-background)",
    rowBackgroundHover: "var(--theme-search-row-background-hover)",
    rowBorder: "var(--theme-search-row-border)",
  },
  selection: {
    background: "var(--theme-selection-background)",
    text: "var(--theme-selection-text)",
  },
  text: {
    primary: "var(--theme-text-primary)",
    secondary: "var(--theme-text-secondary)",
  },
};
