import { ProgTechIcon } from "./ProgTechIcon";
import styles from './../../styles/ProgrammingTechnologies.module.css'
const TECHNOLOGIES = [
  { name: "Angular", img: "/assets/png/angular.png" },
  { name: "React", img: "/assets/png/react.png" },
  { name: "Vue", img: "/assets/png/vue.png" },
  { name: "JavaScript", img: "/assets/png/js.png" },
];

export function ProgrammingTechnologies() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.header}>Programming<br/>technologies</h2>
      <p className={`p1 ${styles.text}`}>
        By the end, you’ll have the portfolio and interview skills <br/> you need to
        start your new career.
      </p>

      <div className={styles.icons}>
        {
            TECHNOLOGIES.map((technologie: {
                name: string,
                img: string
            }) => <ProgTechIcon name={technologie.name} img={technologie.img} />)
        }
        
      </div>
    </section>
  );
}
