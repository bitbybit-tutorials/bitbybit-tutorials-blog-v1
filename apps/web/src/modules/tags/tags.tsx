import Tag from "./tag";
import styles from "./tags.module.css";

type Props = {
  color?: string;
  names: string[];
  onClick?: () => void;
  size?: "small" | "medium" | "big";
};

export default function Tags({ color, names, onClick, size }: Props) {
  return (
    <ul className={styles.list}>
      {names.map((name, index) => (
        <li key={`${index}`}>
          <Tag color={color} size={size} name={name} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}
