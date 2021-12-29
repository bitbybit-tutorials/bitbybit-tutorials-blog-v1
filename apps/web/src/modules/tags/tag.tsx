import React from "react";

import Link from "next/link";

import styles from "./tag.module.css";
import typographyStyles from "styles/typography.module.css";
import { transformTitleToSlug } from "utils/text-transform";

const TAG_STYLE_MAP: { [key: string]: string } = {
  big: `${typographyStyles.textBig} ${styles.big}`,
  medium: `${typographyStyles.textMd} ${styles.medium}`,
  small: `${typographyStyles.textSm} ${styles.small}`,
};

type TagProps = {
  className?: string;
  disable?: boolean;
  name: string;
  onClick?: () => void;
  size?: "small" | "medium" | "big";
};

type WrapperProps = TagProps & {
  children: React.ReactNode;
};

const Wrapper = ({ children, disable, name }: WrapperProps) => {
  if (disable) {
    return <>{children}</>;
  }

  return (
    <Link
      href="/categories/[...page]"
      as={`/categories/${transformTitleToSlug(name)}`}
    >
      <a>{children}</a>
    </Link>
  );
};

function Tag({ className, name, onClick, size }: Partial<TagProps>) {
  const clickHandler = () => onClick?.();

  return (
    <span
      className={`${styles.container} ${
        TAG_STYLE_MAP[size ?? "small"]
      } ${className}`}
      onClick={clickHandler}
    >
      {name}
    </span>
  );
}

export default function WrappedTag(props: TagProps) {
  return (
    <Wrapper {...props}>
      <Tag {...props} />
    </Wrapper>
  );
}
