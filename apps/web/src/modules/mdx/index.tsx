import Head from "next/head";

import Image from "modules/image";
import CodeBlock from "./code-block";
import { HEADINGS_MAP } from "./heading";
import InlineCode from "./inline-code";
import List from "./list";
import Link from "./link";
import Admonition from "./admonition";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope here.
// They should be provided as a prop to <MDXRemote />.
// https://github.com/hashicorp/next-mdx-remote
export const MDX_COMPONENTS_MAP = {
  // It also works with dynamically imported components, which is especially useful for
  // conditionally loading components for certain routes. See the notes in README.md for more details
  a: Link,
  Admonition,
  code: CodeBlock,
  h2: (props: any) => HEADINGS_MAP.h2(props.children),
  h3: (props: any) => HEADINGS_MAP.h3(props.children),
  h4: (props: any) => HEADINGS_MAP.h4(props.children),
  Head,
  Image,
  inlineCode: InlineCode,
  // strong: (props) => <p><strong>{props.children}</strong></p>
  // em: (props) => <i style={{color: 'goldenrod'}} {...props} />,
  ul: List,
};
