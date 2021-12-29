import Image from "next/image";

type Props = {
  alt: string;
  blurDataURL?: string;
  className?: string;
  height?: number;
  priority?: boolean;
  src: string;
  width?: number;
};

export default function CustomImage({
  alt,
  blurDataURL,
  className,
  height,
  priority,
  src,
  width,
}: Props) {
  return (
    <Image
      alt={alt ?? "image"}
      blurDataURL={blurDataURL}
      className={className}
      height={height ?? "100%"}
      layout="responsive"
      placeholder={blurDataURL ? "blur" : undefined}
      objectFit="cover"
      priority={priority ?? false}
      src={src}
      width={width ?? "100%"}
    />
  );
}
