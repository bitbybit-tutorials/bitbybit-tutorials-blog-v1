import FullWidthItem from "./full-width-item";
import RegularItem from "./regular-item";

type Props = {
  post: Post;
  type?: "full-width" | "regular";
};

export default function PostsListItem({ post, type }: Props) {
  switch (type) {
    case "full-width":
      return <FullWidthItem post={post} />;
    case "regular":
      return <RegularItem post={post} />;
    default:
      return <RegularItem post={post} />;
  }
}
