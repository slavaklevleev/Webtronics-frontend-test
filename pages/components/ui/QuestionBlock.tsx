import Image from "next/image";
import styles from "./../../../styles/QuestionBlock.module.css";
import plus from "./../../../public/assets/svg/plus.svg";
import minus from "./../../../public/assets/svg/minus.svg";
import { useEffect, useRef } from "react";

interface QuestionBlockProps {
  id: number;
  question: string;
  answer: string;
  isSelected: boolean;
  setSelectedQuestion: (id: number) => void;
}

export function QuestionBlock(props: QuestionBlockProps) {
  const textBlockRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textBlockRef.current) {
      textBlockRef.current.focus();
    }
  }, []);

  return (
    <section className={styles.QuestionsCardGradientWrapper}>
      <div className={styles.QuestionsCard}>
        <div className={styles.header}>
          <h4
            onClick={() =>
              props.setSelectedQuestion(!props.isSelected ? props.id : 0)
            }
          >
            {props.question}
          </h4>
          <button
            className={styles.clearButton}
            onClick={() =>
              props.setSelectedQuestion(!props.isSelected ? props.id : 0)
            }
          >
            <Image
              src={props.isSelected ? plus : minus}
              width={14}
              height={14}
              alt={"plus"}
            />
          </button>
        </div>
        <p
          ref={textBlockRef}
          className={`p1 ${styles.textCollapse} ${
            props.isSelected ? styles.selected : styles.unselected
          }`}
        >
          {props.answer}
        </p>
      </div>
    </section>
  );
}
