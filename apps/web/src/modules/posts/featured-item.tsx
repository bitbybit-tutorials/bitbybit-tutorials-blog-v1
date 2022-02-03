import { css } from "@emotion/react";

import Link from "next/link";

import Image from "modules/image";
import Tags from "modules/tags/tags";
import { TYPOGRAPHY_CLASSES_MAP } from "modules/theme/styles/typography";
import fallbackImage from "../../../public/images/snoopy.png";

const styles = css``;

type Props = {
  post: Post;
};

export default function PostItem({ post }: Props) {
  const { blurDataUrl, category, created, imageUrl, slug, title } = post;

  return (
    <div css={styles}>
      <Link href={`/posts/${slug}`}>
        <a>
          <div className="imageContainer">
            <Image
              blurDataUrl={blurDataUrl}
              alt={title}
              priority
              src={imageUrl ?? fallbackImage}
            />
          </div>
        </a>
      </Link>
      <div className="description">
        <Link href={`/posts/${slug}`}>
          <a>
            <h2>{title}</h2>
          </a>
        </Link>
        <br />
        <small className={TYPOGRAPHY_CLASSES_MAP.textSm}>{created}</small>
        <Tags names={category} />
      </div>
    </div>
  );
}
