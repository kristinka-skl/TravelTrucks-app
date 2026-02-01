import { Camper } from '@/app/types/camper';
import CamperFeaturesList from '../CamperFeaturesList/CamperFeaturesList';
import css from './CamperFeatures.module.css';
import { typeOptions } from '@/app/constants/constants';
interface CamperFeaturesProps {
  camper: Camper;
}
export default function CamperFeatures({ camper }: CamperFeaturesProps) {
  const camperForm = typeOptions[camper.form];

  return (
    <div className={css.camperFeatures}>
      <CamperFeaturesList camper={camper} />
      <div className={css.vehicleDetails}>
        <h3 className={css.vehicleDetailsTitle}>Vehicle details</h3>
        <ul className={css.vehicleDetailsList}>
          <li className={css.vehicleDetailsItem}>
            <p>Form</p>
            <p>{camperForm.label}</p>
          </li>
          <li className={css.vehicleDetailsItem}>
            <p>Length</p>
            <p>{camper.length}</p>
          </li>

          <li className={css.vehicleDetailsItem}>
            <p>Width</p>
            <p>{camper.width}</p>
          </li>
          <li className={css.vehicleDetailsItem}>
            <p>Height</p>
            <p>{camper.height}</p>
          </li>

          <li className={css.vehicleDetailsItem}>
            <p>Tank</p>
            <p>{camper.tank}</p>
          </li>

          <li className={css.vehicleDetailsItem}>
            <p>Consumption</p>
            <p>{camper.consumption}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
