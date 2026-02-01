import { Camper } from '../types/camper';

export interface FeatureConfigItem {
  key: keyof Camper;
  label?: string;
  icon: string;
  variant?: 'boolean' | 'value';
}

export const FEATURES_CONFIG: FeatureConfigItem[] = [
  {
    key: 'transmission',
    icon: '/sprite.svg#icon-transmission',
    variant: 'value',
  },
  { key: 'engine', icon: '/sprite.svg#icon-engine', variant: 'value' },
  { key: 'AC', label: 'AC', icon: '/sprite.svg#icon-ac' },
  { key: 'kitchen', label: 'Kitchen', icon: '/sprite.svg#icon-kitchen' },
  { key: 'radio', label: 'Radio', icon: '/sprite.svg#icon-radio' },
  //   { key: 'bathroom', label: 'Bathroom', icon: '/sprite.svg#icon-bathroom' },
  //   { key: 'TV', label: 'TV', icon:  },

  //   { key: 'refrigerator', label: 'Fridge', icon:  },
  //   { key: 'microwave', label: 'Microwave', icon:  },
  //   { key: 'gas', label: 'Gas', icon:  },
  //   { key: 'water', label: 'Water', icon:  },
];
