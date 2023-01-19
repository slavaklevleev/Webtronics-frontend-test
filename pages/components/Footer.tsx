import styles from "./../../styles/Footer.module.css";
import logo from "./../../public/logo.svg";
import Image from "next/image";
export function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        <div>
          <a href="#" className={styles.logo}>
            <Image src={logo} alt="Logo WEBTRONICS" width={169} height={33} />
          </a>
          <p className="p1">
            Wisconsin Ave, Suite 700 <br /> Chase, Maryland 20815
          </p>
        </div>
        <div>
          <p className={styles.blockHeader}>Company</p>
          <nav className={styles.navigation}>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Steps</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Review</a></li>
              <li><a href="#">Gallery</a></li>
            </ul>
          </nav>
        </div>

        <div>
          <p className={styles.blockHeader}>Social media</p>
          <div>
            <a href="#">
              <Image
                src={"/assets/svg/social.svg"}
                alt="social logo"
                width={24}
                height={24}
                className={styles.socialLogo}
              />
            </a>
            <a href="#">
              <Image
                src={"/assets/svg/social-1.svg"}
                alt="social logo"
                width={24}
                height={24}
                className={styles.socialLogo}
              />
            </a>
            <a href="#">
              <Image
                src={"/assets/svg/social-2.svg"}
                alt="social logo"
                width={24}
                height={24}
                className={styles.socialLogo}
              />
            </a>
            <a href="#">
              <Image
                src={"/assets/svg/linkedin.svg"}
                alt="social logo"
                width={24}
                height={24}
                className={styles.socialLogo}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
