type PostRaw = {
  category: string[];
  created: string;
  id: number;
  image?: string;
  lastUpdated: string;
  title: string;
  toc: { [key: sting]: string }[];
  type: string;
};

type Post = PostRaw & {
  blurDataURL: string;
  imageUrl: string;
  slug: string;
};

// JSON
type AnyJson = boolean | number | string | null | JsonArray | JsonMap;
type JsonMap = { [key: string]: AnyJson };
interface JsonArray extends Array<AnyJson> {}
