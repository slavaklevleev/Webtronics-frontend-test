import styles from "./../../styles/About.module.css";
import { MentorProfile } from "./ui/MentorProfile";

const MENTORS = [
  {
    name: "Wade Warren",
    description: "Front-end engineers work closely with designers",
    img: "/assets/png/Wade_Warren.png",
  },
  {
    name: "Kristin Watson",
    description: "Front-end engineers work closely with designers",
    img: "/assets/png/Kristin_Watson.png",
  },
  {
    name: "Robert Fox",
    description: "Front-end engineers work closely with designers",
    img: "/assets/png/Robert_Fox.png",
  },
];
export function About() {
  return (
    <section>
      <h2 id="about" className={styles.header}>About Us</h2>
      <div className={styles.wrapper}>
        <div className={styles.mentorsBlock}>
          <h3 className={styles.mentorsHeader}>Mentors</h3>
          <div className={styles.curvedLines}></div>
          <div className={styles.mentorsWrapper}>
            {MENTORS.map(
              (mentor: { img: string; name: string; description: string }) => (
                <MentorProfile
                  name={mentor.name}
                  description={mentor.description}
                  img={mentor.img}
                />
              )
            )}
          </div>
        </div>
        <div className={styles.descriptionBlock}>
          <p className={styles.description}>
            Front-end engineers work closely with designers to make websites
            beautiful, functional, and fast. This Career Path will teach you not
            only the necessary languages and technologies, but how to think like
            a front-end engineer, too.
          </p>

          <div className={styles.frontLetters}>
             
          </div>
        </div>
      </div>
    </section>
  );
}
