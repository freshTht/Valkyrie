/* eslint-disable */
import React from 'react';
import i18n from 'i18n-js';
import VKInfoCard, { VKSection } from '../VKInfoCard';

const Diagnostics1: React.FC = () => {
  const TITLE = i18n.t('cpinfo_diagnostics1_title');
  const CONTENT = i18n.t('cpinfo_diagnostics1_body');

  const contentSections: VKSection[] = [
    {
      sectionContent: CONTENT,
    },
  ];

  return (
    <VKInfoCard title={TITLE} contentSections={contentSections} />
  );
};

export default Diagnostics1;
