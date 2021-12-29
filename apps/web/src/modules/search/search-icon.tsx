import { MdOutlineSearch } from "react-icons/md";

import styles from "./search-icon.module.css";
import typographyStyles from "styles/typography.module.css";

type Props = {
  toggleSearch: () => void;
};

export default function SearchIcon({ toggleSearch }: Props) {
  return (
    <span className={typographyStyles.icon} onClick={toggleSearch}>
      <MdOutlineSearch size={"1.8rem"} color="grey" />
    </span>
  );
}
