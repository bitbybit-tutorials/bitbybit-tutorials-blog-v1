import React from "react";

// Set default value
export const PostsContext = React.createContext<{ posts: Post[] }>({
  posts: [],
});
