import styles from "./../../styles/WelcomeBlock.module.css";
import { Button } from "./Button";

export function WelcomeBlock() {
  return (
    <section>
      <div className={styles.grid}>
        <h1 className={styles.h1_1}>Front-End</h1>
        <p className={`p1 ${styles.p}`}>
          Make UIs and websites beautiful, functional, and fast. Cover all the
          topics that expensive bootcamps teach (and more).{" "}
        </p>
        <Button className={styles.b} text={"Start my career change"} small />
        <h1 className={styles.h1_2}>Developer</h1>
        <h3 className={styles.h3}>Courses</h3>
      </div>
      <div className={styles.programmer}></div>
    </section>
  );
}
