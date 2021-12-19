import React from "react";

import Link from "next/link";

import styles from "./table-of-contents.module.css";

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
              <a>
                <span>{item.title}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
