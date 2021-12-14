import styles from "./posts-component.module.css";
import PostItem from "./post-item";

import { POSTS_PER_PAGE } from "constants/posts";

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
