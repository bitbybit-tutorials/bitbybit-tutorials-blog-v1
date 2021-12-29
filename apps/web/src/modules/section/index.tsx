import styles from "./index.module.css";
import typographyStyles from "styles/typography.module.css";

type Props = {
  content: React.ReactNode;
  title?: string;
};

export default function Section({ content, title }: Props) {
  return (
    <div className={styles.container}>
      {title && <h3 className={typographyStyles.sectionHeading}>{title}</h3>}
      <div>{content}</div>
    </div>
  );
}
