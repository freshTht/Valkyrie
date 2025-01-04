/* eslint-disable */

import React from 'react'
import {
  ScrollView,
  View,
} from 'react-native'

import i18n from 'i18n-js'
import VKInfoCard from '@app/components/VKInfoCard'
import VKRootView from '@app/components/VKRootView'
import { VKPageContainer } from '@app/components/VKPageContainer'

interface Props {
  route: any;
  navigation?: any;
}

const BodyEquipmentPage: React.FC<Props> = (props) => {
  const RAW_DATA = i18n.t(`cpinfo_body_equipments`) as any

  const CARDS_DATA: any[] = []
  for (var i = 0; i < RAW_DATA.length; i++) {
    const RAW_ITEM = RAW_DATA[i];
    const ITEM = {
      title: RAW_ITEM.title,
      contentSections: [
        {
          sectionImageSource: RAW_ITEM.body_image,
        },
        {
          sectionContent: RAW_ITEM.body,
        },
        {
          sectionTitle: i18n.t('cpinfo_body_equipment_section_objectives'),
          sectionOrderedList: RAW_ITEM.objectives,
        },
        {
          sectionTitle: i18n.t('cpinfo_body_equipment_section_suggestions'),
          sectionOrderedList: RAW_ITEM.suggestions,
        },
      ],
    };
    CARDS_DATA.push(ITEM)
  }

  return (
    <VKPageContainer>
      {CARDS_DATA.map((CARD_ITEM, index) => (
        <VKInfoCard 
          key={index}
          title={ CARD_ITEM.title }
          titleAlignment='left'
          contentSections={CARD_ITEM.contentSections}
        />
      ))}
    </VKPageContainer>
  )
};

export default BodyEquipmentPage
