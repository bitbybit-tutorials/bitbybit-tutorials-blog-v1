import Image from "next/image";

type Props = {
  alt: string;
  blurDataURL: string;
  height?: number;
  priority?: boolean;
  src: string;
  width?: number;
};

export default function CustomImage({
  alt,
  blurDataURL,
  height,
  priority,
  src,
  width,
}: Props) {
  return (
    <Image
      alt={alt ?? "image"}
      blurDataURL={blurDataURL}
      height={height ?? "100%"}
      layout="responsive"
      placeholder="blur"
      objectFit="cover"
      priority={priority ?? false}
      src={src}
      width={width ?? "100%"}
    />
  );
}
