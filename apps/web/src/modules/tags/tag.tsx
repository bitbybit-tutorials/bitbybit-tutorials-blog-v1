import React from "react";
import { css } from "@emotion/react";

import Link from "next/link";

import ButtonSecondary from "modules/button/button-secondary";
import { BREAKPOINTS } from "modules/theme/constants/breakpoints";
import { TYPOGRAPHY_CLASSES_MAP } from "modules/theme/styles/typography";
import { transformTitleToSlug } from "utils/text-transform";

const TAG_STYLES_MAP = {
  small: {
    textClassName: TYPOGRAPHY_CLASSES_MAP.textExtraSm,
    css: css`
      padding: 4px 8px;
      margin-bottom: 8px;
      margin-right: 8px;
    `,
  },
  medium: {
    textClassName: TYPOGRAPHY_CLASSES_MAP.textExtraSm,
    css: css`
      padding: 4px 8px;
      margin-bottom: 8px;
      margin-right: 8px;

      @media only screen and (min-width: ${BREAKPOINTS.medium}) {
        padding: 6px 10px;
        margin-bottom: 12px;
        margin-right: 12px;
      }
    `,
  },
  big: {
    textClassName: TYPOGRAPHY_CLASSES_MAP.textMd,
    css: css`
      padding: 6px 10px;
      margin-bottom: 10px;
      margin-right: 10px;

      @media only screen and (min-width: ${BREAKPOINTS.medium}) {
        padding: 8px 14px;
        margin-bottom: 16px;
        margin-right: 16px;
      }
    `,
  },
};

type TagProps = {
  altStyle?: boolean;
  disable?: boolean;
  name: string;
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
      href="/categories/[[...pages]]"
      as={`/categories/${transformTitleToSlug(name)}`}
    >
      <a>{children}</a>
    </Link>
  );
};

const Tag = ({ altStyle, name, size }: Partial<TagProps>) => (
  <ButtonSecondary
    altStyle={altStyle}
    containerStyles={TAG_STYLES_MAP[size ?? "small"].css}
    textClassName={TAG_STYLES_MAP[size ?? "small"].textClassName}
    title={name}
  />
);

export default function WrappedTag(props: TagProps) {
  return (
    <Wrapper {...props}>
      <Tag {...props} />
    </Wrapper>
  );
}
