import Image from "next/image";
import styles from "./../../styles/StepsBlock.module.css";
import { StepCard } from "./StepCard";

interface Step {
  id: number;
  title: string;
  description: string;
  direction: string;
}

const STEPS = [
  {
    id: 1,
    title: "Introduction to Front-End",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
    direction: "right",
  },
  {
    id: 2,
    title: "Overview of Development",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
    direction: "left",
  },
  {
    id: 3,
    title: "Introduction to Front-End",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
    direction: "right",
  },
  {
    id: 4,
    title: "Overview of Development",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
    direction: "left",
  },
  {
    id: 5,
    title: "Introduction to Front-End",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
    direction: "right",
  },
  {
    id: 6,
    title: "Overview of Development",
    description:
      "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. ",
    direction: "left",
  },
];

export function StepsBlock() {
  return (
    <div className={styles.borderWrapper}>
      <div className={styles.innerWrapper}>
        <h2 className={styles.header}>Steps</h2>
        <div className={styles.timeline}>
          {STEPS.map(
            (step: Step) => (
              <StepCard
                id={step.id}
                title={step.title}
                description={step.description}
                direction={step.direction}
              />
            )
          )}

          <div className={styles.timeline}> </div>
        </div>
      </div>
    </div>
  );
}
