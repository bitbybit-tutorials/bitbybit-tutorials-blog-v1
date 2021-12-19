import { useContext } from "react";

import dynamic from "next/dynamic";
import Link from "next/link";

import styles from "./header.module.css";
import Logo from "modules/logo";
import { SearchContext } from "modules/search/search-context";
import SearchIcon from "modules/search/search-icon";

const ToggleThemeIcon = dynamic(
  () => import("modules/theme/toggle-theme-icon"),
  {
    ssr: false,
  }
);

export default function Header() {
  const { showSearch, toggleSearch } = useContext(SearchContext);

  const toggleSearchModal = () => toggleSearch(!showSearch);

  const closeSearch = () => toggleSearch(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.item}>
            <Logo onClick={closeSearch} />
          </li>
          <li className={`${styles.item} ${styles.itemFlex}`}>
            <Link href={`/posts`}>
              <a>Posts</a>
            </Link>
          </li>
          <li className={styles.item}>
            <SearchIcon toggleSearch={toggleSearchModal} />
          </li>
          <li className={styles.item}>
            <ToggleThemeIcon />
          </li>
        </ul>
      </nav>
    </header>
  );
}
