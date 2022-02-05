import { css, useTheme } from "@emotion/react";

import Link from "next/link";

import Image from "modules/image";
import Tags from "modules/tags/tags";
import { BREAKPOINTS } from "modules/theme/constants/breakpoints";
import { TYPOGRAPHY_CLASSES_MAP } from "modules/theme/styles/typography";
import { UTILITY_CLASSES_MAP } from "modules/theme/styles/utilty";
import { THEME } from "modules/theme/theme";
import { formatDate } from "utils/formatDate";
import fallbackImage from "public/images/snoopy.png";

const styles = css`
  background-color: ${THEME.post.background};
  border-radius: 6px;
  min-width: 12rem;
  overflow: hidden;

  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
  }
  .date {
    display: inline-block;
    margin-bottom: 1.8rem;
    margin-top: 0.5rem;
  }

  @media only screen and (min-width: ${BREAKPOINTS.small}) {
    display: flex;

    .link {
      width: 35vw;
    }
    .description {
      flex: 1;
    }
  }

  @media only screen and (min-width: ${BREAKPOINTS.medium}) {
    flex-direction: column;

    .link {
      width: auto;
    }
  }
`;

type Props = {
  post: Post;
};

export default function PostItem({ post }: Props) {
  const { blurDataUrl, category, created, imageUrl, slug, title } = post;
  const theme = useTheme() as Theme;

  return (
    <div css={styles}>
      <Link href={`/posts/${slug}`}>
        <a className="link">
          <div className={UTILITY_CLASSES_MAP.imageRegular}>
            <Image
              blurDataUrl={blurDataUrl}
              alt={title}
              src={imageUrl ?? fallbackImage}
            />
          </div>
        </a>
      </Link>
      <div className="description">
        <div>
          <Link href={`/posts/${slug}`}>
            <a>
              <h2 className={TYPOGRAPHY_CLASSES_MAP.headingBig}>{title}</h2>
            </a>
          </Link>
          <span
            className={`${TYPOGRAPHY_CLASSES_MAP.textSm} ${TYPOGRAPHY_CLASSES_MAP.textSecondary} date`}
          >
            {formatDate(created)}
          </span>
        </div>
        <Tags names={category} />
      </div>
    </div>
  );
}
