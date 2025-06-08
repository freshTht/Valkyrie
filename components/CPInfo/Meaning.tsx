/* eslint-disable */
import React from 'react';
import i18n from 'i18n-js';
import VKInfoCard, { VKSection } from '../VKInfoCard';

const Meaning: React.FC = () => {
  const TITLE = i18n.t('cpinfo_meaning_title');
  const CONTENT = i18n.t('cpinfo_meaning_body');
  
  const contentSections: VKSection[] = [
    {
      sectionContent: CONTENT,
    },
  ];

  return (
    <VKInfoCard title={TITLE} contentSections={contentSections} />
  );
};

export default Meaning;
