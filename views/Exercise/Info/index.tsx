/* eslint-disable */
import React from 'react'
import {
  View,
  ScrollView,
} from 'react-native'

import { VKInfoCard } from '@app/components/VKInfoCard'
import i18n from 'i18n-js'
import VKRootView from '@app/components/VKRootView'

interface Props {
  route?: any
}

const ExerciseInfoPage: React.FC<Props> = (props) => {
  // PARAM
  const { INDEX, IMG_SRC } = props.route.params;
  
  // DATA
  const RAW_DATA = i18n.t(`exercise_types`)[INDEX] as any;
  const DATA: any = {
    title: RAW_DATA.title_full,
    contentSections: [
      // {}, // extra padding on top
    ]
  }
  for (let i = 0; i < RAW_DATA.methods.length; i++) {
    const METHOD = RAW_DATA.methods[i]

    const IMG = IMG_SRC[i];
    if (METHOD.name || IMG) {
      const TITLE_AND_IMGS = {
        sectionTitle: (
          METHOD.name ? 
          METHOD.name
          : undefined
        ),
        sectionImageSource: undefined,
        sectionMultipleImageSource: undefined,
      }
      
      DATA.contentSections.push(TITLE_AND_IMGS);
      
      if (IMG) { // if image exists
        if (!IMG[0]) {  // if not an array
          TITLE_AND_IMGS.sectionImageSource = IMG;
        }
        else {
          TITLE_AND_IMGS.sectionMultipleImageSource = IMG;
        }
      }
    }

    if (METHOD.description || METHOD.steps) {
      DATA.contentSections.push({
        sectionTitle: i18n.t(`exercise_section_methods`),
        sectionContent: (
          METHOD.description ? 
          METHOD.description
          : undefined
        ),
        sectionOrderedList: METHOD.steps,
      })
    }

    if (METHOD.multiSteps) {
      for (let key in METHOD.multiSteps) {
        DATA.contentSections.push({
          sectionTitle: key,
          sectionOrderedList: METHOD.multiSteps[key],
        })
      }
    }

    if (METHOD.notes) {
      DATA.contentSections.push({
        sectionContent: METHOD.notes,
      })
    }
    
    if (METHOD.advice) {
      DATA.contentSections.push({
        sectionTitle: i18n.t(`exercise_section_advice`),
        sectionContent: METHOD.advice,
      })
    }

    if (METHOD.warnings) {
      DATA.contentSections.push({
        sectionTitle: i18n.t(`exercise_section_warnings`),
        sectionOrderedList: METHOD.warnings,
      })
    }


    if (i !== RAW_DATA.methods.length - 1 
      && (METHOD.description || METHOD.steps || METHOD.multiSteps || METHOD.notes || METHOD.warning || METHOD.advice)) {
      DATA.contentSections.push({
        isSeperatorSection: true,
      })
    }
  }
  
  return (
    <VKRootView>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 16 }}>
        <View style={{ flex: 1 }}>
          <VKInfoCard 
            title={ DATA.title }
            titleAlignment='center'
            contentSections={ DATA.contentSections }
          />
        </View>
      </ScrollView>
    </VKRootView>
  );
};

export default ExerciseInfoPage
