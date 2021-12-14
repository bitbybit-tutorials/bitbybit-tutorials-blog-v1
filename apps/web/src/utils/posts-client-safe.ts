export const getAllCategories = (posts: Post[]) =>
  Array.from(new Set(posts.map((post) => post.category).flat())).sort();

export const getFilteredPosts = (
  posts: Post[],
  category: string | string[],
  count?: number
) => {
  const categoryArr = Array.isArray(category) ? category : [category];
  return posts
    .filter((post) => post.category?.some((c) => categoryArr.includes(c)))
    .slice(0, count ?? -1);
};
