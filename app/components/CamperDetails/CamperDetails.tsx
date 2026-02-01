import { Camper } from '@/app/types/camper';
import css from './CamperDetails.module.css';
import RatingAndLocation from '../RatingAndLocation/RatingAndLocation';
import Image from 'next/image';

interface CamperDetailsProps {
  camper: Camper;
}
export default function CamperDetails({ camper }: CamperDetailsProps) {
  const galleryArr = camper.gallery.flatMap((gal) => gal.original);

  return (
    <div className={css.camperDetailsInfo}>
      <h3 className={css.camperDetailsHeading}>{camper.name}</h3>
      <div className={css.ratingAndLocationDetailsPage}>
        <RatingAndLocation camper={camper} />
      </div>
      <p className={css.camperDetailsPrice}>
        <span>&#8364;</span>
        {camper.price.toFixed(2)}
      </p>
      <ul className={css.camperDetailsGallery}>
        {galleryArr.map((img, index) => (
          <li key={index}>
            <Image
              src={img}
              alt={`Camper detail ${index + 1}`}
              width={292}
              height={312}
              className={css.camperDetailsImage}
            />
          </li>
        ))}
      </ul>
      <p className={css.camperDetailsDescr}>{camper.description}</p>
    </div>
  );
}
