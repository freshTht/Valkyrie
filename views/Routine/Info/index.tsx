/* eslint-disable */
import React from 'react'
import {
  View,
  ScrollView,
} from 'react-native'

import { VKInfoCard, VKSection } from '@app/components/VKInfoCard'
import i18n from 'i18n-js'
import VKRootView from '@app/components/VKRootView'
import { VKPageContainer } from '@app/components/VKPageContainer'

interface Props {
  route: any;
  navigation?: any
}

const RoutineInfoPage: React.FC<Props> = (props) => {
  const { INDEX, IMAGES, CAUTION_IMAGE } = props.route.params;
  const RAW_DATA = i18n.t(`routine_items`)[INDEX] as any;
  
  const CAUTION_CARD = RAW_DATA.caution && {
    title: i18n.t('routine_section_caution'),
    contentSections: [
      {
        sectionImageSource: CAUTION_IMAGE,
        sectionOrderedList: RAW_DATA.caution,
        hideNumber: RAW_DATA.caution.length <= 1,
      },
    ],
  };

  const POSTURES = RAW_DATA.postures
  const CARDS_DATA: any[] = []
  for (var i = 0; i < POSTURES.length; i++) {
    const P = POSTURES[i]
    const ITEM: any = {
      title: P.title,
      contentSections: [],
    }

    // TOP IMAGE
    if (IMAGES[i] && IMAGES[i].main) {
      if (IMAGES[i].main[0]) {
        ITEM.contentSections.push({
          sectionMultipleImageSource: IMAGES[i].main,
        })
      } else {
        ITEM.contentSections.push({
          sectionImageSource: IMAGES[i].main,
        })
      }
    }

    // ORDERED LIST
    if (P.instructions) {
      let SECTION_INSTRUCTION: VKSection = {
        // sectionImageSource: IMAGES[i] ? IMAGES[i]:'',
        sectionTitle: i18n.t('routine_section_instructions'),
        sectionOrderedList: P.instructions,
        hideNumber: P.hideInstructionNumbers,
      }
      ITEM.contentSections.push(SECTION_INSTRUCTION)
      
      // LIST IMAGES
      if (IMAGES[i] && IMAGES[i].orderedList) {
        SECTION_INSTRUCTION.sectionOrderedListImages = IMAGES[i].orderedList
      }
      
    }

    // show ADDITIONAL MESSAGES, if any
    if (P.additionalMessages) {
      ITEM.contentSections.push({
        sectionOrderedList: P.additionalMessages,
        hideNumber: true,
      })
    }

    // show ADVICE, if any
    if (P.advices) {
      ITEM.contentSections.push({
        sectionTitle: i18n.t('routine_section_advice'),
        sectionOrderedList: P.advices,
      })
    }

    CARDS_DATA.push(ITEM)
  }
  
  return (
    <VKPageContainer>
      {
        CAUTION_CARD && (
          <VKInfoCard 
            title={ CAUTION_CARD.title }
            titleAlignment='left'
            contentSections={ CAUTION_CARD.contentSections }
          />
        )
      }
      {
        CARDS_DATA.map((CARD_ITEM, index) => (
          <VKInfoCard 
            key={index}
            title={ CARD_ITEM.title }
            titleAlignment='left'
            contentSections={CARD_ITEM.contentSections}
          />
        ))
      }
    </VKPageContainer>
  );
};

export default RoutineInfoPage
