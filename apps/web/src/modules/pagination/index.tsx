import { css } from "@emotion/react";

import Link from "next/link";

import ButtonSecondary from "modules/button/button-secondary";

const styles = css`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 40px 10px;
`;

const buttonStyles = css`
  padding: 8px 12px;
  &:first-of-type {
    margin-right: 1.25rem;
  }
`;

const disabledStyles = css`
  pointer-events: none;
`;

type Props = {
  activePage: number | string;
  pagesCount: number;
  urlPath: string;
};

export default function Pagination({ activePage, pagesCount, urlPath }: Props) {
  const selectedPage = activePage ? Number(activePage) : 1;

  function isDisabled(button: string) {
    if (button === "previous" && selectedPage === 1) {
      return true;
    }
    if (button === "next" && selectedPage === pagesCount) {
      return true;
    }
  }

  return (
    <div css={styles}>
      <Link
        href={`/${urlPath}${
          selectedPage === 2 ? "" : `/pages/${selectedPage - 1}`
        }`}
      >
        <a css={isDisabled("previous") && disabledStyles}>
          <ButtonSecondary
            containerStyles={buttonStyles}
            disabled={isDisabled("previous")}
            title="Previous"
          />
        </a>
      </Link>
      <Link href={`/${urlPath}/pages/${selectedPage + 1}`}>
        <a css={isDisabled("next") && disabledStyles}>
          <ButtonSecondary
            containerStyles={buttonStyles}
            disabled={isDisabled("next")}
            title="Next"
          />
        </a>
      </Link>
    </div>
  );
}
