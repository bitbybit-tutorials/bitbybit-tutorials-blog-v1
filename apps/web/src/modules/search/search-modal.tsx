import { ChangeEvent, useState, useEffect, useContext, useRef } from "react";
import { css } from "@emotion/react";

import Link from "next/link";

import ButtonSecondary from "modules/button/button-secondary";
import { PostsContext } from "modules/posts/posts-context";
import { SearchContext } from "modules/search/search-context";
import Tags from "modules/tags/tags";
import { BREAKPOINTS } from "modules/theme/constants/breakpoints";
import { TYPOGRAPHY_CLASSES_MAP } from "modules/theme/styles/typography";
import { THEME } from "modules/theme/theme";
import { getAllCategories } from "modules/posts/utils/posts-client-safe-utils";
import { formatDate } from "utils/formatDate";

const styles = css`
  .container {
    background-color: ${THEME.search.background};
    bottom: 0;
    left: 0;
    padding: 2rem 1rem 4rem;
    position: fixed;
    right: 0;
    top: 0;
    padding-top: 3.75rem;
    z-index: 9999;
    opacity: 0;
    visibility: hidden;
    transition: 0.2s ease-out;
    transform: translateY(2rem);
  }

  .show {
    opacity: 1;
    visibility: visible;
    transition: 0.3s ease-out;
    transform: translateY(0);
  }

  .wrapper {
    display: flex;
  }

  .input {
    background-color: transparent;
    border: none;
    border-bottom: 3px solid ${THEME.input.border};
    font-size: 1.6rem;
    outline: none;
    padding: 0 0 0.5rem;
    flex: 1;
    margin-right: 1rem;
  }

  .search-list {
    height: 100%;
    overflow-y: scroll;
  }

  .list-item {
    background-color: ${THEME.search.rowBackground};
    border-bottom: 1px solid ${THEME.search.rowBorder};

    &-link {
      padding: 0.8rem;
      display: block;
    }
    &:hover {
      background-color: ${THEME.search.rowBackgroundHover};
    }
  }

  .date {
    display: inline-block;
    margin-top: 0.5rem;
  }

  .title {
    margin-bottom: 0.8rem;
  }

  .no-results {
    margin-top: 2rem;
    margin-left: 2rem;
  }

  .tags-container {
    margin-top: 2rem;
  }

  @media only screen and (min-width: ${BREAKPOINTS.medium}) {
    .container {
      padding: 5rem 4rem 8rem;
    }
    .input {
      border-bottom: 4px solid ${THEME.input.border};
      font-size: 2.6rem;
      padding: 0 2rem 0.5rem;
      margin-right: 2rem;
    }
    .close-btn {
      width: 3rem;
      height: 3rem;
      font-size: 1.4rem;
    }
    .search-list {
      padding-right: 4.5rem;
    }
    .list-item {
      &-link {
        padding: 1.5rem 2rem;
      }
    }
    .no-results {
      margin-top: 3rem;
      margin-left: 2rem;
    }
    .tags-container {
      margin-top: 4rem;
    }
  }
`;

const closeBtnStyles = css`
  border-radius: 8px;
  cursor: pointer;
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;

  @media only screen and (min-width: ${BREAKPOINTS.medium}) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

type Props = {
  show: boolean;
};

export default function SearchModal({ show }: Props) {
  const { posts } = useContext(PostsContext);
  const { toggleSearch } = useContext(SearchContext);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleModal = (show: boolean) => {
    if (show) {
      document.body.classList.add("body-overflow-hidden");
      setTimeout(() => {
        inputRef.current?.focus();
      }, 30);
    } else {
      document.body.classList.remove("body-overflow-hidden");
      setSearch("");
      setSearchResults([]);
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearch(value);

    const results = posts.filter((post: any) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(value ? results : []);
  };

  function getClassNames(show: boolean) {
    let classNames = ["container"];
    if (show) {
      classNames.push("show");
    }
    return classNames.join(" ");
  }

  useEffect(() => {
    toggleModal(show);
  }, [show]);

  return (
    <div css={styles}>
      <div className={getClassNames(show)}>
        <div className="wrapper">
          <input
            ref={inputRef}
            className="input"
            onChange={onChange}
            placeholder="Search..."
            type="text"
            value={search}
          />
          <ButtonSecondary
            containerStyles={closeBtnStyles}
            onClick={() => toggleSearch(false)}
            title="X"
          />
        </div>
        {search && (
          <ul className="search-list">
            {searchResults.length > 0 ? (
              searchResults.map((post: any, index) => (
                <li className="list-item" key={`${index}`}>
                  <Link href={`/posts/${post.slug}`}>
                    <a className="list-item-link">
                      <h3 className={`${TYPOGRAPHY_CLASSES_MAP.headingBig}`}>
                        {post.title}
                      </h3>
                      <span
                        className={`${TYPOGRAPHY_CLASSES_MAP.textSm} ${TYPOGRAPHY_CLASSES_MAP.textSecondary} date`}
                      >
                        {formatDate(post.created)}
                      </span>
                    </a>
                  </Link>
                </li>
              ))
            ) : (
              <li className="no-results">
                <h3 className={TYPOGRAPHY_CLASSES_MAP.headingBig}>
                  No results found
                </h3>
              </li>
            )}
          </ul>
        )}
        {!search && (
          <div className="tags-container">
            <Tags names={getAllCategories(posts)} size="big" />
          </div>
        )}
      </div>
    </div>
  );
}
