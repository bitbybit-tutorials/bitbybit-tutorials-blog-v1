import PostItem from "./posts-list-item";

type Props = {
  posts: Post[];
  offset?: number;
  type?: "full-width" | "regular";
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
