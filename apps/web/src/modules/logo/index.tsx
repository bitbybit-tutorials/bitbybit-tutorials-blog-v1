import { css } from "@emotion/react";

import Image from "modules/image";
import Link from "next/link";

const styles = css`
  height: 2.25rem;
  width: 12rem;
  position: relative;
  margin: 0;
`;

type Props = {
  onClick?: () => void;
};

export default function Logo({ onClick }: Props) {
  return (
    <Link href="/">
      <a onClick={onClick}>
        <div css={styles}>
          <Image priority src="/images/logo.png" alt={"logo"} />
        </div>
      </a>
    </Link>
  );
}
