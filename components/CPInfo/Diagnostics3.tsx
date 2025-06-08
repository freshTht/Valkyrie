/* eslint-disable */
import React from 'react'
import i18n from 'i18n-js';
import VKInfoCard, { VKSection } from '../VKInfoCard';

const Diagnostics3: React.FC = () => {
  const TITLE = i18n.t('cpinfo_diagnostics3_title');
  const SUBTITLE = i18n.t('cpinfo_diagnostics3_subtitle');
  const rawListItems = i18n.t('cpinfo_diagnostics3_items') as any;

  const LIST_ITEMS = rawListItems.map((elm: any) => `${elm.title}\n${elm.body}`);

  const contentSections: VKSection[] = [
    {
      sectionContent: SUBTITLE,
    },
    {
      sectionOrderedList: LIST_ITEMS,
    },
  ];

  return (
    <VKInfoCard title={TITLE} contentSections={contentSections} />
  );
};

export default Diagnostics3;
