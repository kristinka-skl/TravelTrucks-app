import React from 'react';
import css from './FeatureBadge.module.css';

interface FeatureBadgeProps {
  icon: string;
  label: string;
  invert: boolean;
}

const FeatureBadge: React.FC<FeatureBadgeProps> = ({ icon, label, invert }) => {
  return (
    <div className={css.badge}>
      <span className={css.iconWrapper}>
        <svg
          className={invert ? css.iconSvgInvert : css.iconSvg}
          width={20}
          height={20}
        >
          <use href={icon} />
        </svg>
      </span>
      <span className={css.text}>{label}</span>
    </div>
  );
};

export default FeatureBadge;
