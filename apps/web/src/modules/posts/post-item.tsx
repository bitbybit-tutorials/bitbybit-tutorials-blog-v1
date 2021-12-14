import FeaturedItem from "./featured-item";
import FullWidthItem from "./full-width-item";
import RegularItem from "./regular-item";

type Props = {
  post: Post;
  type?: "featured" | "full-width" | "regular";
};

export default function PostItem({ post, type }: Props) {
  switch (type) {
    case "featured":
      return <FeaturedItem post={post} />;
    case "full-width":
      return <FullWidthItem post={post} />;
    case "regular":
      return <RegularItem post={post} />;
    default:
      return <RegularItem post={post} />;
  }
}
