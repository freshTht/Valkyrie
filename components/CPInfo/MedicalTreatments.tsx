import React from 'react'

import i18n from 'i18n-js'
import VKInfoCard from '../VKInfoCard'

const MedicalTreatments: React.FC = () => {
  const TITLE = i18n.t('cpinfo_medical_treatments_title')
  const CONTENT_SECTIONS = i18n.t('cpinfo_medical_treatments_content') as any

  return (
    <VKInfoCard 
      title={TITLE}
      titleAlignment={`left`}
      contentSections={CONTENT_SECTIONS}
    />
  )
}

export default MedicalTreatments
