/* eslint-disable */
import React from 'react';
import i18n from 'i18n-js';
import VKInfoCard, { VKSection } from '../VKInfoCard';

const Note: React.FC = () => {
  const TITLE = i18n.t('exercise_note_title');
  const CONTENT = i18n.t('exercise_note_subtitle');

  const DATA: VKSection[] = [
    {
      sectionContent: CONTENT,
    },
  ];

  return (
    <VKInfoCard title={TITLE} contentSections={DATA} />
  );
};

export default Note;
