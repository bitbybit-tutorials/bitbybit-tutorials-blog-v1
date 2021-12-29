import Link from "next/link";

import styles from "./full-width-item.module.css";
import Image from "modules/image";
import Tags from "modules/tags/tags";
import typographyStyles from "styles/typography.module.css";
import { formatDate } from "utils/formatDate";
import fallbackImage from "public/images/snoopy.png";

type Props = {
  post: Post;
};

export default function PostItem({ post }: Props) {
  const { blurDataURL, category, created, imageSrc, slug, title } = post;

  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <div>
          <Link href={`/posts/${slug}`}>
            <a>
              <h2 className={typographyStyles.headingXl}>{title}</h2>
            </a>
          </Link>
          <span className={typographyStyles.textBig}>
            {formatDate(created)}
          </span>
        </div>
        <Tags names={category} size="medium" />
      </div>
      <div className={styles.imageContainer}>
        <Image
          blurDataURL={blurDataURL}
          alt={title}
          priority
          src={imageSrc ?? fallbackImage}
        />
      </div>
    </div>
  );
}
