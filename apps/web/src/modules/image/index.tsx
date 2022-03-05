import Image from "next/image";

import { getDirectImageUrl } from "services/firebase";

type Props = {
  alt: string;
  blurDataUrl?: string;
  className?: string;
  generateSrc?: {
    accessToken?: string;
    bucket?: string;
    folder: string;
    imageName: string;
  };
  priority?: boolean;
  src: string | StaticImageData;
};

export default function CustomImage({
  alt,
  blurDataUrl,
  className,
  generateSrc,
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
      src={generateSrc ? getDirectImageUrl({ ...generateSrc }) : src}
    />
  );
}
