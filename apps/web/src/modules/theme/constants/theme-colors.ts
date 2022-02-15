import { css } from "@emotion/react";

export const THEME_COLORS = css`
  /**
   *
   * LIGHT THEME
   *
   **/
  body[data-theme="light"] {
    --theme-admonition-background: var(--color-purple-100);
    --theme-admonition-border-caution: var(--color-yellow-300);
    --theme-admonition-border-danger: var(--color-red-300);
    --theme-admonition-border-info: var(--color-blue-200);
    --theme-admonition-border-tip: var(--color-green-200);
    --theme-body-background: var(--color-white);
    --theme-body-text: var(--color-black);
    --theme-button-primary-background: var(--color-purple-500);
    --theme-button-primary-text: var(--color-white);
    --theme-button-secondary-default-background: var(--color-purple-200);
    --theme-button-secondary-default-disabled-background: var(--color-white);
    --theme-button-secondary-default-disabled-text: var(--color-purple-700);
    --theme-button-secondary-default-text: var(--color-purple-700);
    --theme-button-secondary-default-text-hover: var(--color-black);
    --theme-button-secondary-alt-background: var(--color-purple-100);
    --theme-button-secondary-alt-disabled-background: var(--color-white);
    --theme-button-secondary-alt-disabled-text: var(--color-purple-300);
    --theme-button-secondary-alt-text: var(--color-purple-700);
    --theme-button-secondary-alt-text-hover: var(--color-black);
    --theme-codeblock-background: var(--color-purple-100);
    --theme-codeblock-text: var(--color-black);
    --theme-codeblock-char: var(--color-blue-600);
    --theme-codeblock-comment: var(--color-purple-700);
    --theme-codeblock-keyword: var(--color-blue-500);
    --theme-codeblock-primitive: var(--color-red-600);
    --theme-codeblock-string: var(--color-red-600);
    --theme-codeblock-variable: var(--color-black);
    --theme-codeblock-boolean: var(--color-red-300);
    --theme-codeblock-punctuation: var(--color-black);
    --theme-codeblock-tag: var(--color-blue-300);
    --theme-codeblock-function: var(--color-purple-450);
    --theme-codeblock-className: var(--color-green-300);
    --theme-codeblock-method: #6699cc;
    --theme-codeblock-operator: var(--color-blue-500);
    --theme-codeblock-inline: var(--color-purple-200);
    --theme-heading-primary: var(--color-black);
    --theme-heading-section: var(--color-purple-700);
    --theme-input-border: var(--color-black);
    --theme-input-placeholder: var(--color-black);
    --theme-input-text: var(--color-black);
    --theme-link-active: var(--color-black);
    --theme-link-alt: var(--color-yellow-300);
    --theme-link-default: var(--color-purple-700);
    --theme-link-hover: var(--color-black);
    --theme-list-bullet: var(--color-purple-500);
    --theme-nav-link-active: var(--color-black);
    --theme-nav-link-border: var(--color-purple-500);
    --theme-nav-link-default: var(--color-purple-600);
    --theme-nav-link-hover: var(--color-black);
    --theme-nav-icon-default: var(--color-purple-600);
    --theme-nav-icon-hover: var(--color-black);
    --theme-nav-icon-active: var(--color-black);
    --theme-post-background: var(--color-purple-100);
    --theme-search-background: var(--color-purple-100);
    --theme-search-row-background: var(--color-purple-200);
    --theme-search-row-background-hover: var(--color-purple-300);
    --theme-search-row-border: var(--color-purple-300);
    --theme-selection-background: var(--color-purple-500);
    --theme-selection-text: var(--color-white);
    --theme-text-primary: var(--color-black);
    --theme-text-secondary: var(--color-purple-700);
  }

  /**
   *
   * DARK THEME
   *
   **/
  body[data-theme="dark"] {
    --theme-admonition-background: var(--color-purple-900);
    --theme-admonition-border-caution: var(--color-yellow-300);
    --theme-admonition-border-danger: var(--color-red-300);
    --theme-admonition-border-info: var(--color-blue-200);
    --theme-admonition-border-tip: var(--color-green-200);
    --theme-body-background: var(--color-purple-1000);
    --theme-body-text: var(--color-white);
    --theme-button-primary-background: var(--color-purple-500);
    --theme-button-primary-text: var(--color-white);
    --theme-button-secondary-default-background: var(--color-purple-800);
    --theme-button-secondary-default-disabled-background: var(
      --color-purple-1000
    );
    --theme-button-secondary-default-disabled-text: var(--color-purple-300);
    --theme-button-secondary-default-text: var(--color-purple-300);
    --theme-button-secondary-default-text-hover: var(--color-white);
    --theme-button-secondary-alt-background: var(--color-purple-900);
    --theme-button-secondary-alt-text: var(--color-purple-900);
    --theme-button-secondary-alt-text-hover: var(--color-purple-900);
    --theme-button-secondary-alt-disabled-background: var(--color-purple-1000);
    --theme-button-secondary-alt-disabled-text: var(--color-purple-300);
    --theme-codeblock-background: var(--color-purple-900);
    --theme-codeblock-text: var(--color-white);
    --theme-codeblock-char: #d8dee9;
    --theme-codeblock-comment: var(--color-purple-300);
    --theme-codeblock-keyword: rgb(197, 134, 192);
    --theme-codeblock-primitive: var(--color-blue-100);
    --theme-codeblock-string: #5fb3b3;
    --theme-codeblock-variable: var(--color-white);
    --theme-codeblock-boolean: #ff8b50;
    --theme-codeblock-punctuation: var(--color-white);
    --theme-codeblock-tag: #fc929e;
    --theme-codeblock-function: var(--color-blue-100);
    --theme-codeblock-className: rgb(236, 196, 141);
    --theme-codeblock-method: #6699cc;
    --theme-codeblock-operator: #fc929e;
    --theme-codeblock-inline: var(--color-purple-700);
    --theme-heading-primary: var(--color-white);
    --theme-heading-section: var(--color-purple-300);
    --theme-input-border: var(--color-white);
    --theme-input-placeholder: var(--color-white);
    --theme-input-text: var(--color-white);
    --theme-link-active: var(--color-white);
    --theme-link-alt: var(--color-yellow-300);
    --theme-link-default: var(--color-purple-300);
    --theme-link-hover: var(--color-white);
    --theme-list-bullet: var(--color-purple-500);
    --theme-nav-link-active: var(--color-white);
    --theme-nav-link-border: var(--color-purple-500);
    --theme-nav-link-default: var(--color-purple-300);
    --theme-nav-link-hover: var(--color-purple-100);
    --theme-nav-icon-default: var(--color-purple-300);
    --theme-nav-icon-hover: var(--color-purple-100);
    --theme-nav-icon-active: var(--color-white);
    --theme-post-background: var(--color-purple-900);
    --theme-search-background: var(--color-purple-900);
    --theme-search-row-background: var(--color-purple-800);
    --theme-search-row-background-hover: var(--color-purple-700);
    --theme-search-row-border: var(--color-purple-700);
    --theme-selection-background: var(--color-purple-500);
    --theme-selection-text: var(--color-white);
    --theme-text-primary: var(--color-white);
    --theme-text-secondary: var(--color-purple-300);
  }
`;
