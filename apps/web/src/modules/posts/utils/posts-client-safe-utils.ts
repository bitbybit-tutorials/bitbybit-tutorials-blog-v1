export const getAllCategories = (posts: Post[]) =>
  Array.from(new Set(posts.map((post) => post.category).flat())).sort();

export const getFilteredPosts = (
  posts: Post[],
  category: string | string[],
  limit?: number,
  offset?: number
) => {
  const categoryArr = Array.isArray(category) ? category : [category];

  const filteredPosts = posts.filter((post) =>
    post.category?.some((c) => categoryArr.includes(c))
  );

  const sliceOffset = offset ? offset - 1 : 0;

  const sliceLimit = limit
    ? offset === 0
      ? sliceOffset + limit
      : sliceOffset + limit + 1
    : undefined;

  const slice = filteredPosts.slice(sliceOffset, sliceLimit);

  return {
    totalCount: filteredPosts.length,
    posts: slice,
  };
};

export const getSlugFromFileName = (fileName: string) =>
  fileName.replace(/\.mdx$/, "");
