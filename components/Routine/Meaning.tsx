/* eslint-disable */
import React from 'react';
import i18n from 'i18n-js';
import VKInfoCard, { VKSection } from '../VKInfoCard';

const Meaning: React.FC = () => {
  const DATA = i18n.t('routine_meaning') as any;

  const TITLE = DATA.title;
  const CONTENT = DATA.body;

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
