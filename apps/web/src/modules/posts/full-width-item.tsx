import { css } from "@emotion/react";

import Link from "next/link";

import Image from "modules/image";
import Tags from "modules/tags/tags";
import { BREAKPOINTS } from "modules/theme/constants/breakpoints";
import { TYPOGRAPHY_CLASSES_MAP } from "modules/theme/styles/typography";
import { THEME } from "modules/theme/theme";
import utilsStyles from "styles/utils.module.css";
import { formatDate } from "utils/formatDate";
import fallbackImage from "public/images/snoopy.png";

const styles = css`
  background-color: ${THEME.post.background};
  border-radius: 8px;
  display: flex;
  flex-direction: column-reverse;
  overflow: hidden;

  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    padding: 1rem;
  }
  .date {
    display: inline-block;
    margin-top: 0.2rem;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: ${BREAKPOINTS.small}) {
    flex-direction: row-reverse;
  }

  @media only screen and (min-width: ${BREAKPOINTS.medium}) {
    flex-direction: row;
    padding: 1.5rem;

    .description {
      margin-bottom: 0;
      margin-right: 1rem;
      padding: 0;
    }
  }

  @media only screen and (min-width: ${BREAKPOINTS.big}) {
    padding: 4rem;

    .description {
      margin-right: 3.5rem;
    }
  }

  @media only screen and (min-width: ${BREAKPOINTS.large}) {
    .imageContainer {
      width: 30vw;
    }
  }
`;

type Props = {
  post: Post;
};

export default function PostItem({ post }: Props) {
  const { abstract, blurDataUrl, category, created, imageUrl, slug, title } =
    post;

  return (
    <div css={styles}>
      <div className="description">
        <div>
          <Link href={`/posts/${slug}`}>
            <a>
              <h2 className={TYPOGRAPHY_CLASSES_MAP.headingLg}>{title}</h2>
            </a>
          </Link>
          <span
            className={`${TYPOGRAPHY_CLASSES_MAP.textMd} ${TYPOGRAPHY_CLASSES_MAP.textSecondary} date`}
          >
            {formatDate(created)}
          </span>
          <p
            className={`${TYPOGRAPHY_CLASSES_MAP.textMd} ${TYPOGRAPHY_CLASSES_MAP.textSecondary}`}
          >
            {abstract}
          </p>
        </div>
        <Tags names={category} size="medium" />
      </div>
      <div className={utilsStyles.imageFullWidth}>
        <Image
          blurDataUrl={blurDataUrl}
          alt={title}
          priority
          src={imageUrl ?? fallbackImage}
        />
      </div>
    </div>
  );
}
