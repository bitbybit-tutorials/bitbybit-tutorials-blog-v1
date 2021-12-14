import Image from "next/image";
import Link from "next/link";

import styles from "./footer.module.css";
import utilStyles from "styles/utils.module.css";

export default function Footer() {
  const LOGO_SIZE = "40px";

  const navLinks = [
    {
      id: 1,
      title: "Link 1",
    },
    {
      id: 2,
      title: "Link 3",
    },
    {
      id: 3,
      title: "Link 3",
    },
  ];

  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.item}>
            <Image
              priority
              src="/images/snoopy.png"
              className={utilStyles.borderCircle}
              height={LOGO_SIZE}
              width={LOGO_SIZE}
              alt={"logo"}
            />
          </li>
          {navLinks.map((link) => (
            <li key={link.id} className={styles.item}>
              <Link href="/">
                <a>{link.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
