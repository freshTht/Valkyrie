import React from 'react';
import i18n from 'i18n-js';
import VKInfoCard, { VKSection } from '../VKInfoCard';

const Instruction: React.FC = () => {
  const TITLE = i18n.t('streching_note_title');
  const ORDERED_LIST: string[] = i18n.t('streching_note') as unknown as string[];

  const DATA: VKSection[] = [
    {
      sectionOrderedList: ORDERED_LIST,
    }
  ];

  return (
    <VKInfoCard title={TITLE} contentSections={DATA} />
  );
};

export default Instruction;
