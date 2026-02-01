import { Camper } from '@/app/types/camper';
import css from './Reviews.module.css';

interface ReviewsProps {
  camper: Camper;
}
export default function Reviews({ camper }: ReviewsProps) {
  return (
    <ul className={css.reviewsList}>
      {camper.reviews.map((review, index) => (
        <li key={index}>
          <div className={css.reviewHeading}>
            <span className={css.ava}>{review.reviewer_name.slice(0, 1)}</span>
            <div>
              <p className={css.name}>{review.reviewer_name}</p>
              <div className={css.rating}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    width={16}
                    height={16}
                    className={
                      star <= review.reviewer_rating
                        ? css.fullStar
                        : css.emptyStar
                    }
                  >
                    <use href="/sprite.svg#icon-star"></use>
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <p className={css.reviewText}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
}
