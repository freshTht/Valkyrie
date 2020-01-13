/* eslint-disable */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
} from 'react-native'

// import {
//   Button,
//   Text
// } from 'react-native-elements'

import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'

import { SharedStyle } from '@app/components/styles'

import VKHeader from '@app/components/VKHeader'
import { VKInfoCard, VKSection } from '@app/components/VKInfoCard'
import { renderMenuItems } from '@app/components/utils'
import i18n from 'i18n-js'

interface Props {
  navigation?: any
}

const RoutineInfoPage: React.FC<Props> = (props) => {

  // STATE
  // let [balance, setBalance] = React.useState<number>();

  React.useEffect(() => {
    // componentDidMount

    const componentWillUnmount = () => {
      // do something..
    }
    return componentWillUnmount
  }, [])

  // PARAM
  let INDEX = props.navigation.getParam('INDEX', 0)
  // let IMG_SRC = props.navigation.getParam('IMG_SRC', '')
  let TINT_COLOR = props.navigation.getParam('TINT_COLOR', '#424242')
  let IMAGES = props.navigation.getParam('IMAGES', [])
  let CAUTION_IMAGE = props.navigation.getParam('CAUTION_IMAGE', '')
  
  // DATA
  const RAW_DATA = i18n.t(`routine_items`)[INDEX]
  
  let CAUTION_CARD: any 
  if (RAW_DATA.caution) {
    CAUTION_CARD = {
      title: i18n.t('routine_section_caution'),
      contentSections: [
        {
          sectionImageSource: CAUTION_IMAGE,
          sectionOrderedList: RAW_DATA.caution,
          hideNumber: RAW_DATA.caution.length <= 1,
        }
      ]
    }
  }

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
      ITEM.contentSections.push({
        sectionImageSource: IMAGES[i].main,
      })
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
    CARDS_DATA.push(ITEM)
  }


  // const DATA = {
    // title: RAW_DATA.title,
    // contentSections: CARDS_DATA
  // }
  
  return (
    <View style={ SharedStyle.Root }>

      <VKHeader 
        title={ RAW_DATA.title }
        backgroundColor={ TINT_COLOR }
        color='#fff'
        barStyle='light-content'
        navigation={ props.navigation }
      />
      
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 16 }}>
        <View style={{ flex: 1 }}>
          {
            CAUTION_CARD ?
            <VKInfoCard 
              title={ CAUTION_CARD.title }
              titleAlignment='left'
              contentSections={ CAUTION_CARD.contentSections }
            />
            : <></>
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
        </View>
      </ScrollView>

    </View>
  )
}

const LocalStyle = StyleSheet.create({
  // 
});

export default RoutineInfoPage
