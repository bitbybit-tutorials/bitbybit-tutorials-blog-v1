import { RiArrowDropRightLine } from "react-icons/ri";
import { css } from "@emotion/react";

import Link from "next/link";

import { TYPOGRAPHY_CLASSES_MAP } from "modules/theme/styles/typography";

const styles = css`
  display: flex;

  li {
    display: flex;
    align-items: center;
  }
`;

type Props = {
  links: { title: string; route: string }[];
};

export default function Breadcrumbs({ links }: Props) {
  return (
    <ul css={styles}>
      {links.map((link, index) => (
        <li key={`${index}`}>
          <Link href={link.route}>
            <a
              className={`${TYPOGRAPHY_CLASSES_MAP.textMd} ${TYPOGRAPHY_CLASSES_MAP.link}`}
            >
              {link.title}
            </a>
          </Link>
          {index < links.length - 1 && (
            <RiArrowDropRightLine size={"1.6rem"} color="grey" />
          )}
        </li>
      ))}
    </ul>
  );
}
