import styles from "./../../../styles/PhotoCarousel.module.css";
import { CarouselArrow } from "./Arrows";

interface PhotoObject {
  id: number;
  photo: string;
}

interface PhotoCarouselProps {
  handleArrowClick: (direction: string) => void;
  photos: PhotoObject[];
  currentReview: number
}

export function PhotoCarousel(props: PhotoCarouselProps) {
  return (
    <div className={styles.container}>
      <div className={styles.counter}>
        <p className={styles.currentCounter}>{props.currentReview}/</p>
        <p className={styles.totalNumCounter}>{props.photos.length}</p>
      </div>
      <div className={styles.arrows}>
        <CarouselArrow handleArrowClick={props.handleArrowClick} direction="prev" />
        <CarouselArrow handleArrowClick={props.handleArrowClick} direction="next" />
      </div>
      <div className={styles.photoCarousel}>
        {props.photos.map((photo: PhotoObject) => (
          <div className={styles.borderWrapper}>
            <div
              className={styles.innerWrapper}
              style={{ backgroundImage: `url(${photo.photo})` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
