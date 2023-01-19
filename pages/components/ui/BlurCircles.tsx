import Image from "next/image";
import styles from "./../../../styles/BlurCircles.module.css";
import star from "/assets/svg/star.svg";
import { useEffect, useState } from "react";

interface BlurCirclesParamentrs {
  top: number;
  left: number;
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export function BlurCircles() {
  const [blurCirclesArray, setBlurCirclesArray] = useState<BlurCirclesParamentrs[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let tempBlurCirclesArray: BlurCirclesParamentrs[] = [];

      for (let i = 0; i < 10; i++) {
        
        tempBlurCirclesArray.push({
          top: getRandomInt(1300, document.body.scrollHeight - 500),
          left: getRandomInt(1, 99),
        });
      }

      setBlurCirclesArray(tempBlurCirclesArray)
    }
  }, [typeof window !== "undefined"]);

  return (
    <>
      {blurCirclesArray.map((circle: BlurCirclesParamentrs) => (
        <div
          className={styles.circle}
          style={{ top: `${circle.top}px`, left: `${circle.left}%` }}
        >
        </div>
      ))}
    </>
  );
}
