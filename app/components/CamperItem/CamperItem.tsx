import { Camper } from '@/app/types/camper';
import css from './CamperItem.module.css';
import Image from 'next/image';
import ProductFeaturesList from '../CamperFeaturesList/CamperFeaturesList';
import Link from 'next/link';

interface CamperItemProps {
  camper: Camper;
}
export default function CamperItem({ camper }: CamperItemProps) {
  const thumb = camper.gallery[0].thumb;
  return (
    <div className={css.card}>
      <div className={css.cardImage}>
        <Image
          className={css.img}
          src={thumb}
          alt="Camper photo"
          width={292}
          height={320}
        />
      </div>
      <div className={css.cardContent}>
        <div className={css.cardHeader}>
          <p>{camper.name.slice(0, 26)}</p>
          <div className={css.priceAndHeart}>
            <p>
              <span>&#8364;</span>
              {camper.price.toFixed(2)}
            </p>
            <svg width={26} height={24}>
              <use href="/sprite.svg#icon-heart"></use>
            </svg>
          </div>
        </div>
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
            <p>{camper.location}</p>
          </div>
        </div>
        <p className={css.camperDescr}>
          {camper.description.slice(0, 60) + '...'}
        </p>
        <div className={css.features}>
          <ProductFeaturesList camper={camper} />
        </div>
        <Link className={css.btn} href={`/catalog/${camper.id}`}>
          Show more
        </Link>
      </div>
    </div>
  );
}
