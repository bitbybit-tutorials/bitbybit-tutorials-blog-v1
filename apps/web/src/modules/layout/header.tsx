import { useContext } from "react";
import { css } from "@emotion/react";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "modules/logo";
import { SearchContext } from "modules/search/search-context";
import SearchIcon from "modules/search/search-icon";
import { BREAKPOINTS } from "modules/theme/constants/breakpoints";
import { TYPOGRAPHY_CLASSES_MAP } from "modules/theme/styles/typography";
import { THEME } from "modules/theme/theme";

const styles = css`
  .nav {
    height: 80px;
    padding: 0 1rem;
  }
  .nav-list {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .item {
    min-width: 1rem;
  }
  .item:not(:last-of-type) {
    margin-right: 1rem;
  }
  .item:first-of-type {
    margin-right: 0.4rem;
  }
  .item-flex {
    flex: 1;
  }
  .link {
    color: ${THEME.nav.link.default};
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: -6px;
      left: 0;
      height: 2px;
      transform: scale(0);
      width: 100%;
      background-color: ${THEME.nav.link.border};
    }
    &:hover {
      color: ${THEME.nav.link.hover};
    }
    &:hover:after {
      transform: scale(1);
    }
  }
  .active {
    color: ${THEME.nav.link.active};
    position: relative;
    &:after {
      content: "";
      transform: scale(1);
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.small}) {
    .item:first-of-type {
      margin-right: 1rem;
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.medium}) {
    .nav {
      height: 120px;
      padding: 0 2.5rem;
    }
    .item:not(:last-of-type) {
      margin-right: 1.5rem;
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.big}) {
  }
  @media only screen and (min-width: ${BREAKPOINTS.large}) {
    .nav {
      padding: 0 4.5rem;
    }
  }
  @media only screen and (min-width: ${BREAKPOINTS.extraLarge}) {
    .item:first-of-type {
      margin-right: 2.5rem;
    }
  }
`;

const ToggleThemeIcon = dynamic(
  () => import("modules/theme/toggle-theme-icon"),
  {
    ssr: false,
  }
);

export default function Header() {
  const router = useRouter();
  const { showSearch, toggleSearch } = useContext(SearchContext);

  const toggleSearchModal = () => toggleSearch(!showSearch);

  const closeSearch = () => toggleSearch(false);

  function getClassNamesLink(name: string) {
    const classNames = ["link"];
    if (router.pathname.includes(name)) {
      classNames.push("active");
    }
    return classNames.join(" ");
  }

  return (
    <header css={styles}>
      <nav className="nav">
        <ul className="nav-list">
          <li className="item ">
            <Logo onClick={closeSearch} />
          </li>
          <li className={`${TYPOGRAPHY_CLASSES_MAP.textMd} item item-flex`}>
            <Link href={`/posts`}>
              <a className={getClassNamesLink("/posts")}>Posts</a>
            </Link>
          </li>
          <li className="item">
            <SearchIcon toggleSearch={toggleSearchModal} />
          </li>
          <li className="item">
            <ToggleThemeIcon />
          </li>
        </ul>
      </nav>
    </header>
  );
}
