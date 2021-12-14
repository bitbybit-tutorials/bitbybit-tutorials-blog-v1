import React from "react";

import Link from "next/link";

import styles from "./tag.module.css";
import { transformTitleToSlug } from "utils/text-transform";

type TagProps = {
  color?: string;
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
    <Link href={`/categories/${transformTitleToSlug(name)}/pages/1`}>
      <a>{children}</a>
    </Link>
  );
};

function Tag({ color, name, onClick, size }: Partial<TagProps>) {
  const clickHandler = () => onClick?.();

  return (
    <span
      className={`${styles.container} ${styles[size ?? "small"]}`}
      onClick={clickHandler}
      style={{ backgroundColor: color }}
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
