import { FEATURES_CONFIG } from '@/app/_utils/featuresConfig';
import { Camper } from '@/app/types/camper';
import FeatureBadge from '../FeatureBadge/FeatureBadge';
import css from './CamperFeaturesList.module.css';

interface ProductFeaturesListProps {
  camper: Camper;
}

const ProductFeaturesList: React.FC<ProductFeaturesListProps> = ({
  camper,
}) => {
  return (
    <ul className={css.list}>
      {FEATURES_CONFIG.map((config) => {
        const value = camper[config.key];
        if (!value) return null;

        const displayLabel =
          config.variant === 'value'
            ? String(value)
            : (config.label ?? String(config.key));

        return (
          <li key={config.key} className={css.listItem}>
            <FeatureBadge icon={config.icon} label={displayLabel} />
          </li>
        );
      })}
    </ul>
  );
};

export default ProductFeaturesList;
