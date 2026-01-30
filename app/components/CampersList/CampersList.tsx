import { Camper } from '@/app/types/camper';
import CamperItem from '../CamperItem/CamperItem';
import css from './CampersList.module.css';

interface CampersListProp {
  campers: Camper[];
}
export default function CampersList({ campers }: CampersListProp) {
  return (
    <ul className={css.camperList}>
      {campers.map((camper) => (
        <li key={camper.id}>
          <CamperItem camper={camper} />
        </li>
      ))}
    </ul>
  );
}
