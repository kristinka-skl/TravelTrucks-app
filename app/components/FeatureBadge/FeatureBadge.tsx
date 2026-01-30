import React from 'react';
import css from './FeatureBadge.module.css';

interface FeatureBadgeProps {
  icon: string;
  label: string;
}

const FeatureBadge: React.FC<FeatureBadgeProps> = ({ icon, label }) => {
  return (
    <div className={css.badge}>
      <span className={css.iconWrapper}>
        <svg className={css.iconSvg} width={20} height={20}>
          <use href={icon} />
        </svg>
      </span>
      <span className={css.text}>{label}</span>
    </div>
  );
};

export default FeatureBadge;
