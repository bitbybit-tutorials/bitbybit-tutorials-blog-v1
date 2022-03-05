import { useEffect, useState } from "react";
import { css } from "@emotion/react";

import Link from "next/link";

import { TYPOGRAPHY_CLASSES_MAP } from "modules/theme/styles/typography";
import { THEME } from "modules/theme/theme";
import { addMargin } from "modules/theme/utils/add-margin";

const styles = css`
  width: 15.625rem;

  .item {
    margin-bottom: 0.8rem;
    position: relative;
    padding-left: 12px;
  }
  .indent {
    margin-left: 1rem;
  }
  .indent-2x {
    margin-left: 2rem;
  }
  .active-link {
    color: ${THEME.nav.link.active};
    &:before {
      content: "";
      left: 2px;
      width: 3px;
      height: 100%;
      background-color: ${THEME.nav.link.border};
      position: absolute;
    }
  }
`;

type Props = {
  activeId: string;
  items: { id: string; level: number; title: string }[];
};

export default function TableOfContents({ activeId, items }: Props) {
  const [activeItemId, setActiveItemId] = useState("");

  const onClick = (id: string) => setActiveItemId(id);

  function getClassNamesItem(level: number) {
    const classes = ["item"];
    if (level === 3) {
      classes.push("indent");
    } else if (level === 4) {
      classes.push("indent-2x");
    }
    return classes.join(" ");
  }

  function getClassNamesLink(id: string) {
    const classes = [
      TYPOGRAPHY_CLASSES_MAP.textSm,
      TYPOGRAPHY_CLASSES_MAP.link,
    ];
    if (activeId) {
      if (id === activeId) {
        classes.push("active-link");
      }
    } else if (id === activeItemId) {
      classes.push("active-link");
    }
    return classes.join(" ");
  }

  useEffect(() => {
    const isAnchorSet = window.location.hash.length;
    if (!isAnchorSet) {
      const firstItemId = items[0].id;
      if (firstItemId) {
        document.getElementById(firstItemId)?.classList.add("active-item");
        setActiveItemId(firstItemId);
      }
    }
  }, []);

  return (
    <nav css={styles}>
      <h3
        css={addMargin("bottom", "1.5rem")}
        className={`${TYPOGRAPHY_CLASSES_MAP.headingBig}`}
      >
        Table of contents
      </h3>
      <ul>
        {items.map((item, index) => {
          return (
            <li className={getClassNamesItem(item.level)} key={`${index}`}>
              <Link href={`#${item.id}`}>
                <a
                  className={getClassNamesLink(item.id)}
                  id={item.id}
                  onClick={() => onClick(item.id)}
                >
                  {item.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
