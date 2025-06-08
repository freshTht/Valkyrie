/* eslint-disable */
import React from 'react';
import i18n from 'i18n-js'
import VKInfoCard, { VKSection } from '../VKInfoCard'

const Importance: React.FC = () => {
  const TITLE = i18n.t('sitting_position_importance_title')
  const CONTENT_SECTIONS = i18n.t('sitting_position_importance_content') as unknown as VKSection[];

  return (
    <VKInfoCard
      title={TITLE}
      contentSections={CONTENT_SECTIONS}
    />
  )
};

export default Importance;
