import Image from "next/image";

type Props = {
  alt: string;
  blurDataUrl?: string;
  className?: string;
  priority?: boolean;
  src: string | StaticImageData;
};

export default function CustomImage({
  alt,
  blurDataUrl,
  className,
  priority,
  src,
}: Props) {
  return (
    <Image
      alt={alt ?? "image"}
      blurDataURL={blurDataUrl}
      className={className}
      layout="fill"
      objectFit="cover"
      placeholder={blurDataUrl ? "blur" : undefined}
      priority={priority ?? false}
      src={src}
    />
  );
}
