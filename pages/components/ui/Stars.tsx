import Image from "next/image";
import styles from "./../../../styles/Stars.module.css";
import star from "/assets/svg/star.svg";
import { useEffect, useState } from "react";

interface StarsParamentrs {
  width: number;
  // height: number,
  top: number;
  left: number;
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export function Stars() {
  const [starsParamentrsArray, setstarsParamentrsArray] = useState<StarsParamentrs[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let tempStarsParamentrsArray: StarsParamentrs[] = [];

      for (let i = 0; i < 35; i++) {
        
        tempStarsParamentrsArray.push({
          width: getRandomInt(10, 35),
          top: getRandomInt(50, document.body.scrollHeight - 150),
          left: getRandomInt(1, 99),
        });
      }

      setstarsParamentrsArray(tempStarsParamentrsArray)
    }
  }, [typeof window !== "undefined"]);

  return (
    <>
      {starsParamentrsArray.map((star: StarsParamentrs) => (
        <div
          className={styles.star}
          style={{ top: `${star.top}px`, left: `${star.left}%` }}
        >
          <Image
            src={"/assets/svg/star.svg"}
            alt="star"
            width={star.width}
            height={star.width}
          />
        </div>
      ))}
    </>
  );
}
