import Image from "next/image";
import styles from "./../../styles/ProgTechIcon.module.css";

interface ProgTechIconProps {
  name: string;
  img: string;
}

export function ProgTechIcon(props: ProgTechIconProps) {
  return (
    <div className={styles.borderWrapper}>
      <div className={styles.innerWrapper}>
        <Image
          className={styles.icon}
          src={props.img}
          alt={props.name}
          width={162}
          height={136}
        />
        <h4 className={styles.name}>{props.name}</h4>
      </div>
    </div>
  );
}
