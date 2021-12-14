import { getStorageImageRef, getImageUrl } from "services/firebase";
import { createPlaceholderImage } from "utils/image";

export const transformPosts = async (posts: Post[]) => {
  return await Promise.all(
    posts.map(async (post) => {
      // Get image urls
      const storageRef = getStorageImageRef(`posts/test.png`);
      const url = await getImageUrl(storageRef);

      // Convert image into a low-res image, encoded as Base64 string
      const base64 = await createPlaceholderImage(url);
      return {
        ...post,
        blurDataURL: base64,
        imageSrc: url,
      };
    })
  );
};
