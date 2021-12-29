import { RiArrowDropRightLine } from "react-icons/ri";

import Link from "next/link";

import styles from "./index.module.css";
import typographyStyles from "styles/typography.module.css";

type Props = {
  links: { title: string; route: string }[];
};

export default function Breadcrumbs({ links }: Props) {
  return (
    <ul className={styles.list}>
      {links.map((link, index) => (
        <li key={`${index}`} className={styles.item}>
          <Link href={link.route}>
            <a className={typographyStyles.textBig}>{link.title}</a>
          </Link>
          {index < links.length - 1 && (
            <RiArrowDropRightLine size={"1.6rem"} color="grey" />
          )}
        </li>
      ))}
    </ul>
  );
}
