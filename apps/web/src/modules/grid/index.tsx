import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
  numColumns: number;
};

const GRID_MAP: { [key: number]: string } = {
  1: styles.col1,
  3: styles.col3,
  5: styles.col5,
};

export default function Grid({ children, numColumns }: Props) {
  return (
    <div className={`${styles.grid} ${GRID_MAP[numColumns]}`}>{children}</div>
  );
}
