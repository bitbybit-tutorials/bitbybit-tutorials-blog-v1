import React from "react";

// Set default value
export const PostsContext = React.createContext<{ allPostsJson: any }>({
  allPostsJson: undefined,
});
