import Tag from "./tag";
import styles from "./tags.module.css";

type Props = {
  className?: string;
  names: string[];
  onClick?: () => void;
  size?: "small" | "medium" | "big";
};

export default function Tags({ className, names, onClick, size }: Props) {
  return (
    <ul className={styles.list}>
      {names.map((name, index) => (
        <li key={`${index}`}>
          <Tag
            className={className}
            size={size}
            name={name}
            onClick={onClick}
          />
        </li>
      ))}
    </ul>
  );
}
