import Image from "next/image";
import styles from "./../../styles/GalleryBlock.module.css";

export function GalleryBlock() {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Gallery</h2>
      <div className={styles.grid}>
        <p className={`p1 ${styles.t1}`}>
          By the end of this course, you will be able to develop and publish
          your very own Google Chrome extension! In this course we will focus on
          coding exercises and projects.{" "}
        </p>
        <p className={`p1 ${styles.t2}`}>
          If you would like to learn web development and get a job in the tech
          industry, you are going to LOVE this course! Learn HTML, CSS,
          JavaScript, Bootstrap and more with over 15 hours of HD video
          tutorials! This course was designed to be extremely beginner friendly.
          We will begin with the very basics of HTML and build a simple web
          page.
        </p>
        <Image
          className={styles.pb}
          src={"/assets/png/developer1.png"}
          alt="Photo"
          width={600}
          height={434}
        />
        <Image
          className={styles.ps1}
          src={"/assets/png/developer2.png"}
          alt="Photo"
          width={288}
          height={209}
        />
        <Image
          className={styles.ps2}
          src={"/assets/png/developer3.png"}
          alt="Photo"
          width={288}
          height={209}
        />
        <Image
          className={styles.pm}
          src={"/assets/png/developer4.png"}
          alt="Photo"
          width={288}
          height={434}
        />
      </div>
    </section>
  );
}
