import Image from "next/image";
import styles from "./../../styles/FAQBlock.module.css";
import { StepCard } from "./StepCard";
import { QuestionBlock } from "./QuestionBlock";
import { useState } from "react";

interface Question {
  id: number;
  question: string;
  answer: string;
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "What is the price?",
    answer:
      "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
  },
  {
    id: 2,
    question: "What is the price?",
    answer:
      "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
  },
  {
    id: 3,
    question: "What is the price?",
    answer:
      "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
  },
  {
    id: 4,
    question: "What is the price?",
    answer:
      "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
  },
  {
    id: 5,
    question: "What is the price?",
    answer:
      "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.",
  },
];

export function FAQBlock() {
  const [selectedQuestion, setSelectedQuestion] = useState(1);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.header}>
        Frequently Asked <br /> Questions
      </h2>
      <div className={styles.innerWrapper}>
        <div className={styles.leftSide}>
          <p className="p1">
            Do you have any kind of questions?
            <br />
            We are here to help.
          </p>
          <Image
            src={"/assets/svg/question.svg"}
            alt="question"
            width={344}
            height={405}
          />
        </div>
        <div className={styles.rightSide}>
          {QUESTIONS.map((question: Question) => (
            <QuestionBlock
              id={question.id}
              question={question.question}
              answer={question.answer}
              isSelected={selectedQuestion == question.id}
              setSelectedQuestion={setSelectedQuestion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
