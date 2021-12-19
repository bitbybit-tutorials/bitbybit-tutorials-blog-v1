import PostItem from "./post-item";

type Props = {
  posts: {
    blurDataURL: string;
    category: string;
    date: string;
    id: number;
    imageSrc: string;
    slug: string;
    title: string;
  }[];
  offset?: number;
  type?: "featured" | "full-width" | "regular";
};

export default function Posts({ posts, offset, type }: Props) {
  return (
    <>
      {posts.map((post) => (
        <PostItem key={`${post.id}`} post={post} type={type} />
      ))}
    </>
  );
}
