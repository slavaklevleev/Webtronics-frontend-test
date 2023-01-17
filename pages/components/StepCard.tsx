import styles from "./../../styles/StepCard.module.css";

interface StepCardProps {
  id: number;
  title: string;
  description: string;
  direction: string;
}

export function StepCard(props: StepCardProps) {
  return (
    <div className={`${styles.stroke} ${props.direction == 'right' ? styles.strokeRight : styles.strokeLeft}`}>
      <div className={styles.strokeGradientWrapper}>
        <div className={styles.borderWrapper}>
          <div className={styles.innerWrapper}>
            <h4>Step {props.id}</h4>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={`p1`}>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
