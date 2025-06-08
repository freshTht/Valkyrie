/* eslint-disable */
import React from 'react'
import i18n from 'i18n-js'
import VKInfoCard, { VKSection } from '../VKInfoCard'

const CategoriesByAnomalies: React.FC = () => {
  const TITLE = i18n.t('cpcategory_anomalies_title')
  const LIST_ITEMS = i18n.t('cpcategory_anomalies') as unknown as string[];

  const contentSections: VKSection[] = [
    {
      sectionOrderedList: LIST_ITEMS,
    },
    {
      sectionImageSource: require('@app/assets/CPInfo/Categories/plegia.png'),
    },
  ];

  return (
    <VKInfoCard title={TITLE} contentSections={contentSections} />
  )
}

export default CategoriesByAnomalies
