import { getPlaiceholder } from "plaiceholder";

// Convert image into a low-res image, encoded as Base64 string
export const createPlaceholderImage = async (url: string) => {
  const { base64 } = await getPlaiceholder(url);
  return base64;
};
