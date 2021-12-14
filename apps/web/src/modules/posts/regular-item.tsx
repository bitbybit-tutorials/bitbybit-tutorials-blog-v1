import Link from "next/link";

import styles from "./regular-item.module.css";
import Image from "modules/image";
import Tags from "modules/tags/tags";
import utilStyles from "styles/utils.module.css";
import fallbackImage from "../../../public/images/snoopy.png";

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
        <Link href={`/posts/${slug}`}>
          <a>
            <h2>{title}</h2>
          </a>
        </Link>
        <br />
        <small className={utilStyles.lightText}>{created}</small>
        <Tags names={category} />
      </div>
    </div>
  );
}