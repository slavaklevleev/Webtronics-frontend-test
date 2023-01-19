import { useState } from "react";
import { PhotoCarousel } from "./ui/PhotoCarousel";
import styles from "./../../styles/Review.module.css";

interface ReviewType {
  id: number;
  title: string;
  review: string;
  photo: string;
}

const REVIEWS: ReviewType[] = [
  {
    id: 1,
    title: "Best courses ever",
    review:
      'Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.',
    photo: "/assets/png/photo1.png",
  },
  {
    id: 2,
    title: "Amazing teaching",
    review:
      "The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.",
    photo: "/assets/png/photo2.png",
  },
  {
    id: 3,
    title: "Simple and easy",
    review:
      "I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.",
    photo: "/assets/png/photo3.png",
  },
];

export function Review() {
  const [currentReview, setCurrentReview] = useState(1);

  function swap(direction: string) {
    let temp: number = currentReview;
    if (direction === "prev") {
      temp--;
      if (temp === 0) {
        temp = REVIEWS.length;
      }
    } else {
      temp++;
      if (temp === 4) {
        temp = 1;
      }
    }

    let reviewID: number = REVIEWS.findIndex((x: ReviewType) => x.id === temp)

    if (temp == 1) {
      REVIEWS.sort((a, b) => a.id - b.id);
    } else {
      [REVIEWS[0], REVIEWS[reviewID]] = [REVIEWS[reviewID], REVIEWS[0]];
    }

    setCurrentReview(temp);
  }

  return (
    <section>
      <h2 id="review" className={styles.header}>Review</h2>
      <div className={styles.container}>
        <div className={styles.reviewBlock}>
          <h4>{REVIEWS.find((x: ReviewType) => x.id === currentReview)?.title}</h4>
          <p>{REVIEWS.find((x: ReviewType) => x.id === currentReview)?.review}</p>
        </div>
        <PhotoCarousel
          handleArrowClick={swap}
          currentReview={currentReview}
          photos={REVIEWS.map((review: ReviewType) => ({
            id: review.id,
            photo: review.photo,
          }))}
        />
      </div>
    </section>
  );
}
