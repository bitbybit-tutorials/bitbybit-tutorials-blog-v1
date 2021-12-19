import Link from "next/link";

import styles from "./index.module.css";

type Props = {
  activePage: number | string;
  pagesCount: number;
  urlPath: string;
};

export default function Pagination({ activePage, pagesCount, urlPath }: Props) {
  const selectedPage = activePage ? Number(activePage) : 1;

  function getClassNamesBtn(button: string) {
    const classes = [styles.button];

    if (button === "previous" && selectedPage === 1) {
      classes.push(styles.buttonDisabled);
    }
    if (button === "next" && selectedPage === pagesCount) {
      classes.push(styles.buttonDisabled);
    }

    return classes.join(" ");
  }

  return (
    <div className={styles.container}>
      <Link
        href={`/${urlPath}${
          selectedPage === 2 ? "" : `/pages/${selectedPage - 1}`
        }`}
      >
        <a className={getClassNamesBtn("previous")}>Previous</a>
      </Link>
      <Link href={`/${urlPath}/pages/${selectedPage + 1}`}>
        <a className={getClassNamesBtn("next")}>Next</a>
      </Link>
    </div>
  );
}
