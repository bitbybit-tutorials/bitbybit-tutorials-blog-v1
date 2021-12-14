import Link from "next/link";

import styles from "./full-width-item.module.css";
import Image from "modules/image";
import Tags from "modules/tags/tags";
import utilStyles from "styles/utils.module.css";
import Date from "utils/formatDate";
import fallbackImage from "../../../public/images/snoopy.png";
import image from "next/image";

type Props = {
  post: Post;
};

export default function PostItem({ post }: Props) {
  const { blurDataURL, category, created, imageSrc, slug, title } = post;

  return (
    <div className={styles.container}>
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
