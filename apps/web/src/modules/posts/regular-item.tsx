import Link from "next/link";

import styles from "./regular-item.module.css";
import Image from "modules/image";
import Tags from "modules/tags/tags";
import typographyStyles from "styles/typography.module.css";
import utilStyles from "styles/util.module.css";
import { formatDate } from "utils/formatDate";
import fallbackImage from "public/images/snoopy.png";

type Props = {
  post: Post;
};

export default function PostItem({ post }: Props) {
  const { blurDataURL, category, created, imageSrc, slug, title } = post;

  return (
    <div className={styles.container}>
      <Link href={`/posts/${slug}`}>
        <a>
          <div className={styles.imageContainer}>
            <Image
              blurDataURL={blurDataURL}
              alt={title}
              src={imageSrc ?? fallbackImage}
            />
          </div>
        </a>
      </Link>
      <div className={styles.description}>
        <div className={utilStyles.marginBottomSm}>
          <Link href={`/posts/${slug}`}>
            <a>
              <h2 className={typographyStyles.headingLg}>{title}</h2>
            </a>
          </Link>
          <span className={typographyStyles.textMedium}>
            {formatDate(created)}
          </span>
        </div>
        <Tags names={category} />
      </div>
    </div>
  );
}
