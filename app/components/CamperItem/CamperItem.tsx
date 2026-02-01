'use client';
import { Camper } from '@/app/types/camper';
import css from './CamperItem.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useFavoritesStore } from '@/app/store/favoritesStore';
import RatingAndLocation from '../RatingAndLocation/RatingAndLocation';
import CamperFeaturesList from '../CamperFeaturesList/CamperFeaturesList';

interface CamperItemProps {
  camper: Camper;
}
export default function CamperItem({ camper }: CamperItemProps) {
  const { favorites, toggleFavorite } = useFavoritesStore();
  const isFavorite = favorites.some((fav) => fav.id === camper.id);
  const handleHeartClick = () => {
    toggleFavorite(camper);
  };
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
            <button
              type="button"
              onClick={handleHeartClick}
              className={css.heartBtn}
            >
              <svg
                width={26}
                height={24}
                className={`${isFavorite ? css.activeHeartIcon : ''}`}
              >
                <use href="/sprite.svg#icon-heart"></use>
              </svg>
            </button>
          </div>
        </div>
        <RatingAndLocation camper={camper} />
        <p className={css.camperDescr}>
          {camper.description.slice(0, 60) + '...'}
        </p>
        <div className={css.features}>
          <CamperFeaturesList camper={camper} />
        </div>
        <Link className={css.btn} href={`/catalog/${camper.id}`}>
          Show more
        </Link>
      </div>
    </div>
  );
}
