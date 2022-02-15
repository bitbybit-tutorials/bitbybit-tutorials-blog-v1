// Property 'css' does not exist... - https://github.com/emotion-js/emotion/issues/1249
/// <reference types="@emotion/react/types/css-prop" />

/* THEME */
type Theme = {
  admonition: {
    background: string;
    border: {
      caution: string;
      danger: string;
      info: string;
      tip: string;
    };
  };
  body: {
    background: string;
    text: string;
  };
  buttonPrimary: {
    background: string;
    text: string;
  };
  buttonSecondary: {
    default: {
      background: string;
      disabledBackground: string;
      disabledText: string;
      text: string;
      textHover: string;
    };
    alt: {
      background: string;
      disabledBackground: string;
      disabledText: string;
      text: string;
      textHover: string;
    };
  };
  codeblock: {
    background: string;
    boolean: string;
    char: string;
    className: string;
    comment: string;
    function: string;
    inline: string;
    keyword: string;
    method: string;
    operator: string;
    primitive: string;
    punctuation: string;
    string: string;
    tag: string;
    text: string;
    variable: string;
  };
  heading: {
    primary: string;
    section: string;
  };
  input: {
    border: string;
    placeholder: string;
    text: string;
  };
  link: {
    active: string;
    alt: string;
    default: string;
    hover: string;
  };
  list: {
    bullet: string;
  };
  nav: {
    link: {
      active: string;
      border: string;
      default: string;
      hover: string;
    };
    icon: {
      active: string;
      default: string;
      hover: string;
    };
  };
  post: {
    background: string;
  };
  search: {
    background: string;
    rowBackground: string;
    rowBackgroundHover: string;
    rowBorder: string;
  };
  selection: {
    background: string;
    text: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
};

type PostRaw = {
  abstract: string;
  category: string[];
  created: string;
  id: number;
  image?: string;
  isPublished: boolean;
  lastUpdated?: string;
  title: string;
  type: string;
};

type Post = PostRaw & {
  blurDataUrl?: string;
  compiledSource?: MDXRemoteSerializeResult<Record<string, unknown>>;
  imageUrl?: string;
  rawSource?: string;
  readingTime?: number;
  slug?: string;
  toc?: { id: string; level: number; title: string }[];
};

// JSON
type AnyJson = boolean | number | string | null | JsonArray | JsonMap;
type JsonMap = { [key: string]: AnyJson };
interface JsonArray extends Array<AnyJson> {}
