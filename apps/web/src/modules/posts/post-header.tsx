import { css } from "@emotion/react";

import Image from "modules/image";
import Tags from "modules/tags/tags";
import { BREAKPOINTS } from "modules/theme/constants/breakpoints";
import { TYPOGRAPHY_CLASSES_MAP } from "modules/theme/styles/typography";
import { addMargin } from "modules/theme/utils/add-margin";
import { formatDate } from "utils/formatDate";
import fallbackImage from "public/images/snoopy.png";

const styles = css`
  .title {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .image-container {
    height: 25rem;
    position: relative;
    margin: 1.2rem 0 2rem;
  }
  .meta {
    margin: 0.6rem 0;
  }
  .tags {
    margin-top: 1.5rem;
  }

  @media only screen and (min-width: ${BREAKPOINTS.medium}) {
    .title {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    .meta {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
    }
    .tags {
      margin-top: 0;
    }
    .image-container {
      margin: 2rem 0;
    }
  }
`;

type Props = {
  post: Post;
};

export default function PostHeader({ post }: Props) {
  const {
    blurDataUrl,
    category,
    created,
    imageUrl,
    lastUpdated,
    readingTime,
    title,
  } = post;

  return (
    <div css={styles}>
      <h1 className={`${TYPOGRAPHY_CLASSES_MAP.headingXl} title`}>{title}</h1>
      <div className="meta">
        <div>
          <div>
            <span
              className={`${TYPOGRAPHY_CLASSES_MAP.textSm} ${TYPOGRAPHY_CLASSES_MAP.textSecondary}`}
            >
              {formatDate(created)}
            </span>
            {readingTime && (
              <>
                <span
                  className={`${TYPOGRAPHY_CLASSES_MAP.textSm} ${TYPOGRAPHY_CLASSES_MAP.textSecondary}`}
                >
                  {" "}
                  &#183;{" "}
                </span>
                <span
                  className={`${TYPOGRAPHY_CLASSES_MAP.textSm} ${TYPOGRAPHY_CLASSES_MAP.textSecondary}`}
                >
                  {readingTime} min read
                </span>
              </>
            )}
          </div>
          {lastUpdated && (
            <span
              css={addMargin("top", "0.3rem")}
              className={`${TYPOGRAPHY_CLASSES_MAP.textSm} ${TYPOGRAPHY_CLASSES_MAP.textSecondary} ${TYPOGRAPHY_CLASSES_MAP.textItalic}`}
            >
              Last updated - {formatDate(lastUpdated)}
            </span>
          )}
        </div>
        <div className="tags">
          <Tags names={category} size="medium" />
        </div>
      </div>
      <div className="image-container">
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
