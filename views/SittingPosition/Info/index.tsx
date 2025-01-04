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
  navigation?: any
}

const SittingPositionInfoPage: React.FC<Props> = (props) => {
  // PARAM
  const { INDEX, IMG_SRC } = props.route.params;
  
  // DATA
  const RAW_DATA = i18n.t(`sitting_positions`)[INDEX] as any;
  const DATA = {
    title: RAW_DATA.title,
    contentSections: [
      {
        sectionImageSource: IMG_SRC,
      },
      {
        sectionTitle: i18n.t(`sitting_position_section_method`),
        sectionContent: RAW_DATA.method,
      },
      {
        sectionTitle: i18n.t(`sitting_position_section_benefits`),
        sectionOrderedList: RAW_DATA.benefits,
      },
      {
        sectionTitle: i18n.t(`sitting_position_section_prohibitions`),
        sectionOrderedList: RAW_DATA.prohibitions,
      },
    ]
  }
  
  return (
    <VKPageContainer>
      <VKInfoCard 
        title={ DATA.title }
        titleAlignment='center'
        contentSections={ DATA.contentSections }
      />
    </VKPageContainer>
  )
};

export default SittingPositionInfoPage;
