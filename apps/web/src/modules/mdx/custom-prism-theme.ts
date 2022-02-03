import { PrismTheme } from "prism-react-renderer";
import { THEME } from "modules/theme/theme";

export const CUSTOM_PRISM_THEME: PrismTheme = {
  plain: {
    backgroundColor: THEME.codeblock.background,
    color: THEME.codeblock.text,
  },
  styles: [
    {
      types: ["attr-name"],
      style: {
        color: THEME.codeblock.keyword,
      },
    },
    {
      types: ["attr-value"],
      style: {
        color: THEME.codeblock.string,
      },
    },
    {
      types: [
        "comment",
        "block-comment",
        "prolog",
        "doctype",
        "cdata",
        "shebang",
      ],
      style: {
        color: THEME.codeblock.comment,
      },
    },
    {
      types: [
        "property",
        "number",
        "function-name",
        "constant",
        "symbol",
        "deleted",
      ],
      style: {
        color: THEME.codeblock.primitive,
      },
    },
    {
      types: ["boolean"],
      style: {
        color: THEME.codeblock.boolean,
      },
    },
    {
      types: ["tag"],
      style: {
        color: THEME.codeblock.tag,
      },
    },
    {
      types: ["string"],
      style: {
        color: THEME.codeblock.string,
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: THEME.codeblock.punctuation,
      },
    },
    {
      types: ["selector", "char", "builtin", "inserted"],
      style: {
        color: THEME.codeblock.char,
      },
    },
    {
      types: ["function"],
      style: {
        color: THEME.codeblock.function,
      },
    },
    {
      types: ["operator", "entity", "url", "variable"],
      style: {
        color: THEME.codeblock.variable,
      },
    },
    {
      types: ["keyword"],
      style: {
        color: THEME.codeblock.keyword,
      },
    },
    {
      types: ["at-rule", "class-name"],
      style: {
        color: THEME.codeblock.className,
      },
    },
    {
      types: ["important"],
      style: {
        fontWeight: "400",
      },
    },
    {
      types: ["bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
  ],
};
