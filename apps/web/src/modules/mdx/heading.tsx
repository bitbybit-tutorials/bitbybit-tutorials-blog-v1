import { IoIosLink } from "react-icons/io";
import { css } from "@emotion/react";

import Link from "next/link";

import { TYPOGRAPHY_CLASSES_MAP } from "modules/theme/styles/typography";
import { THEME } from "modules/theme/theme";
import { transformTitleToSlug } from "utils/text-transform";
import { BREAKPOINTS } from "modules/theme/constants/breakpoints";

const styles = css`
  position: relative;
  margin-bottom: 1rem;
  margin-top: 2rem;

  span {
    position: absolute;
    top: -6rem;
  }

  &:hover .anchor-link {
    opacity: 1;
  }
  .anchor-link {
    color: ${THEME.link.hover};
    opacity: 0;
    position: absolute;
    left: -2.2rem;
    transition: opacity 0.25s ease-in-out;
  }

  @media only screen and (min-width: ${BREAKPOINTS.medium}) {
    margin-bottom: 1.5rem;
    margin-top: 3rem;
  }
`;

type Props = {
  className: string;
  heading: string;
  level: number;
};

const Heading = ({ heading, level, className }: Props) => {
  const anchor = transformTitleToSlug(heading);
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag className={className} css={styles}>
      <span className="anchor" id={anchor}></span>
      <Link href={`#${anchor}`}>
        <a className="anchor-link">
          <IoIosLink size={"1.2em"} />
        </a>
      </Link>
      {heading}
    </HeadingTag>
  );
};

export const HEADINGS_MAP = {
  h2: (heading: string) => (
    <Heading
      heading={heading}
      level={2}
      className={TYPOGRAPHY_CLASSES_MAP.headingLg}
    />
  ),
  h3: (heading: string) => (
    <Heading
      heading={heading}
      level={3}
      className={TYPOGRAPHY_CLASSES_MAP.headingBig}
    />
  ),
  h4: (heading: string) => (
    <Heading
      heading={heading}
      level={4}
      className={TYPOGRAPHY_CLASSES_MAP.headingMd}
    />
  ),
};
