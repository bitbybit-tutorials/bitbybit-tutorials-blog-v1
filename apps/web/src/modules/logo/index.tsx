import Image from "next/image";
import Link from "next/link";

import utilStyles from "styles/utils.module.css";

type Props = {
  onClick?: () => void;
};

export default function Logo({ onClick }: Props) {
  const LOGO_SIZE = "40px";

  return (
    <Link href="/">
      <a onClick={onClick}>
        <Image
          priority
          src="/images/snoopy.png"
          className={utilStyles.borderCircle}
          height={LOGO_SIZE}
          width={LOGO_SIZE}
          alt={"logo"}
        />
      </a>
    </Link>
  );
}
