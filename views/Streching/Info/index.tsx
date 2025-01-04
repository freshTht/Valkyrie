import React from 'react'
import {
  View,
  ScrollView,
} from 'react-native'

import { VKInfoCard } from '@app/components/VKInfoCard'
import i18n from 'i18n-js'
import VKRootView from '@app/components/VKRootView'
import { VKPageContainer } from '@app/components/VKPageContainer'

interface Props {
  route?: any
}

const StrechingInfoPage: React.FC<Props> = (props) => {
  // PARAM
  const { INDEX } = props.route.params;
  
  // DATA
  const RAW_DATA = i18n.t(`streching_types`)[INDEX] as any;
  const DATA: any = {
    title: RAW_DATA.title_full,
    contentSections: []
  }
  for (let i = 0; i < RAW_DATA.methods.length; i++) {
    const METHOD = RAW_DATA.methods[i]

    DATA.contentSections.push({
      sectionImageSource: METHOD.image,
    })

    DATA.contentSections.push({
      sectionTitle: (
        METHOD.name ? 
        METHOD.name
        : i18n.t(`streching_section_method`)
      ),
      sectionContent: (
        METHOD.description ? 
        METHOD.description
        : undefined
      ),
      sectionOrderedList: METHOD.steps,
    })

    if (METHOD.notes) {
      DATA.contentSections.push({
        sectionContent: METHOD.notes,
      })
    }

    DATA.contentSections.push({
      sectionTitle: i18n.t(`streching_section_benefits`),
      sectionOrderedList: METHOD.benefits,
    })

    if (i !== RAW_DATA.methods.length - 1) {
      DATA.contentSections.push({
        isSeperatorSection: true,
      })
    }
  }
  
  return (
    <VKPageContainer>
      <VKInfoCard 
        title={ DATA.title }
        titleAlignment='center'
        contentSections={ DATA.contentSections }
      />
    </VKPageContainer>
  );
};

export default StrechingInfoPage
