import Link from "next/link";

import styles from "./index.module.css";

type Props = {
  pagesCount: number;
  activePage: number;
};

export default function Pagination({ pagesCount, activePage }: Props) {
  return (
    <div className={styles.container}>
      <Link href={`/posts/pages/${activePage - 1}`}>
        <a>
          <span className={styles.page}>Previous</span>
        </a>
      </Link>
      <span>{activePage}</span>
      <Link href={`/posts/pages/${activePage + 1}`}>
        <a>
          <span className={styles.page}>Next</span>
        </a>
      </Link>
    </div>
  );
}
