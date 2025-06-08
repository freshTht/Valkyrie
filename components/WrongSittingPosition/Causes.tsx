/* eslint-disable */
import React from 'react';
import i18n from 'i18n-js';
import VKInfoCard, { VKSection } from '../VKInfoCard';

const Causes: React.FC = () => {
  const TITLE = i18n.t('wrong_sitting_position_health_effect_title');
  const DATA: VKSection[] = [
    {
      sectionContent: i18n.t('wrong_sitting_position_health_effect_subtitle'),
    },
    {
      sectionOrderedList: i18n.t('wrong_sitting_position_health_effects') as unknown as string[],
    }
  ];

  return (
    <VKInfoCard title={TITLE} contentSections={DATA} />
  );
};

export default Causes;
