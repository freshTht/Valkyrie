/* eslint-disable */

import React, {Component} from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native'

// import {
//   Button,
//   Text
// } from 'react-native-elements'

import i18n from 'i18n-js'
import { SharedStyle } from '@app/components/styles'

import VKHeader from '@app/components/VKHeader'
import VKInfoCard from '@app/components/VKInfoCard'
import BodyEquipment from '@app/components/CPInfo/BodyEquipment'

interface Props {
  navigation?: any
}

const BodyEquipmentPage: React.FC<Props> = (props) => {

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
  const RAW_DATA = i18n.t(`cpinfo_body_equipments`)
  
  let CAUTION_CARD: any 
  // if (RAW_DATA.caution) {
  //   CAUTION_CARD = {
  //     title: i18n.t('routine_section_caution'),
  //     contentSections: [
  //       {
  //         sectionImageSource: CAUTION_IMAGE,
  //         sectionOrderedList: RAW_DATA.caution,
  //         hideNumber: RAW_DATA.caution.length <= 1,
  //       }
  //     ]
  //   }
  // }

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
    <View style={SharedStyle.Root}>

      <VKHeader 
        title={i18n.t('page_title_cpinfo_body_equipment')}
        backgroundColor='#E16E5B'
        navigation={ props.navigation }
      />
      
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 16 }}>
        {/* <BodyEquipment /> */}
        <View style={{ flex: 1 }}>
          {/* {
            CAUTION_CARD ?
            <VKInfoCard 
              title={ CAUTION_CARD.title }
              titleAlignment='left'
              contentSections={ CAUTION_CARD.contentSections }
            />
            : <></>
          } */}
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
  bottomBar: {
    paddingVertical: 8,
    width: '100%', 
    flex: 0,

    paddingHorizontal: 8,
  },
  mainMenu: {
    // paddingHorizontal: 12,
    // paddingVertical: 16,
    flex: 1,
    // height: '100%',
  },
  
  menuListRight: {
    alignSelf: 'flex-end',
    width: '50%',
    marginBottom: 8,
  },
  menuListFull: {
    alignSelf: 'flex-end',
    width: '100%',
    marginBottom: 8,
  },
});

export default BodyEquipmentPage
