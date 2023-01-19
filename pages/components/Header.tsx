import logo from "./../../public/logo.svg";
import styles from "./../../styles/Header.module.css";
import Image from "next/image";
import { NavElement } from "./NavElement";

export function Header() {
  return (
    <header className={styles.header}>
      <a href="#">
        <Image src={logo} alt="Logo WEBTRONICS" width={169} height={33} />
      </a>
      <nav>
        <ul className={styles.navList}>
          <NavElement href="#" title="About" />
          <NavElement href="#" title="Programs" />
          <NavElement href="#" title="Steps" />
          <NavElement href="#" title="Questions" />
          <NavElement href="#" title="Get in touch" />
        </ul>
      </nav>
    </header>
  );
}
