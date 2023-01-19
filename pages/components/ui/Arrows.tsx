import Image from "next/image";
import prevArrow from "./../../../public/assets/svg/prevArrow.svg";
import styles from "./../../../styles/CarouselArrow.module.css"

interface CarouselArrowProps {
  direction: string;
  handleArrowClick: (direction: string) => void
}

export function CarouselArrow(props: CarouselArrowProps) {
  return (
    <div className={styles.borderWrapper}>
      <button className={styles.innerWrapper} onClick={()=>props.handleArrowClick(props.direction)}>
        <Image
          className={`${props.direction == "next" && styles.nextArrow}`}
          src={prevArrow}
          alt={`${props.direction} arrow`}
          width={9.5}
          height={19}
        />
      </button>
    </div>
  );
}
