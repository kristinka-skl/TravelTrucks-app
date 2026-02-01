import { Camper } from '@/app/types/camper';
import css from './RatingAndLocation.module.css';
interface RatingAndLocationProps {
  camper: Camper;
}
export default function RatingAndLocation({ camper }: RatingAndLocationProps) {
  return (
    <div className={css.ratingAndLocation}>
      <div className={css.rating}>
        <svg width={16} height={16}>
          <use href="/sprite.svg#icon-star"></use>
        </svg>
        <p>
          {camper.rating} ({camper.reviews.length} Reviews)
        </p>
      </div>
      <div className={css.location}>
        <svg width={16} height={16}>
          <use href="/sprite.svg#icon-map"></use>
        </svg>
        <p>{camper.location.split(', ').reverse().join(', ')}</p>
      </div>
    </div>
  );
}
