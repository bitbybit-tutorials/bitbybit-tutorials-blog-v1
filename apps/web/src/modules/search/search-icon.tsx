import { MdOutlineSearch } from "react-icons/md";

import styles from "./search-icon.module.css";
import utilStyles from "styles/utils.module.css";

type Props = {
  toggleSearch: () => void;
};

export default function SearchIcon({ toggleSearch }: Props) {
  return (
    <span className={utilStyles.icon} onClick={toggleSearch}>
      <MdOutlineSearch size={"2rem"} color="grey" />
    </span>
  );
}
