import PostItem from "./posts-list-item";

type Props = {
  posts: Post[];
  offset?: number;
  type?: "featured" | "full-width" | "regular";
};

export default function PostsList({ posts, offset, type }: Props) {
  return (
    <>
      {posts.map((post) => (
        <PostItem key={`${post.id}`} post={post} type={type} />
      ))}
    </>
  );
}
