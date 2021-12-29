import Image from "modules/image";
import Link from "next/link";

import utilStyles from "styles/util.module.css";

type Props = {
  onClick?: () => void;
};

export default function Logo({ onClick }: Props) {
  const LOGO_SIZE = 80;

  return (
    <Link href="/">
      <a onClick={onClick}>
        <Image
          priority
          src="/images/logo.jpeg"
          className={utilStyles.containerCircle}
          height={LOGO_SIZE}
          width={LOGO_SIZE}
          alt={"logo"}
        />
      </a>
    </Link>
  );
}
