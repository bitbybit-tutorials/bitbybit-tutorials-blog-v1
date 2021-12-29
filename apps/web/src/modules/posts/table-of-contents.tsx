import React from "react";

import Link from "next/link";

import styles from "./table-of-contents.module.css";
import typographyStyles from "styles/typography.module.css";

type Props = {
  items: { [key: string]: string }[];
};

export default function TableOfContents({ items }: Props) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {items.map((item, index) => (
          <li className={styles.item} key={`${index}`}>
            <Link href={item.anchor}>
              <a className={typographyStyles.textSm}>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
