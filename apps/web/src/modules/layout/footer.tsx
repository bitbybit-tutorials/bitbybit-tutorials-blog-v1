import { css } from "@emotion/react";

import Image from "next/image";
import Link from "next/link";

const styles = css`
  padding: 2rem 1.5rem;
  background-color: black;

  .nav {
    height: 60px;
    padding: 0 1.5rem;
  }
  .nav-list {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .item {
    margin-right: 1.5rem;
    color: white;
  }
`;

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
    <footer css={styles}>
      <nav className="nav">
        <ul className="nav-list">
          <li className="item">
            <Image
              priority
              src="/images/snoopy.png"
              height={LOGO_SIZE}
              width={LOGO_SIZE}
              alt={"logo"}
            />
          </li>
          {navLinks.map((link) => (
            <li key={link.id} className="item">
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
