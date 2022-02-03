import { MDXRemote } from "next-mdx-remote";

import { MDX_COMPONENTS_MAP } from "modules/mdx";

type Props = {
  compiledSource: Post["compiledSource"];
};

export default function PostBody({ compiledSource }: Props) {
  return <MDXRemote {...compiledSource} components={MDX_COMPONENTS_MAP} />;
}
