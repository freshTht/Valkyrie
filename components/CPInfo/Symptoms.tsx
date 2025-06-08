/* eslint-disable */
import React from 'react';
import i18n from 'i18n-js';
import VKInfoCard, { VKSection } from '../VKInfoCard';

const Symptoms: React.FC = () => {
  const TITLE = i18n.t('cpinfo_symptoms_title');
  const LIST_ITEMS = i18n.t('cpinfo_symptoms_items') as unknown as string[];

  const contentSections: VKSection[] = [
    {
      sectionOrderedList: LIST_ITEMS,
    },
  ];

  return (
    <VKInfoCard title={TITLE} contentSections={contentSections} />
  );
};

export default Symptoms;
