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

const SittingPositionInfoPage: React.FC<Props> = (props) => {

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
  let INDEX = props.navigation.getParam('INDEX', 1)
  let IMG_SRC = props.navigation.getParam('IMG_SRC', '')
  
  // DATA
  const RAW_DATA = i18n.t(`sitting_positions`)[INDEX]
  const DATA = {
    // title: i18n.t(`sitting_position${INDEX}_title`),
    title: RAW_DATA.title,
    contentSections: [
      {
        sectionImageSource: IMG_SRC,
      },
      {
        sectionTitle: i18n.t(`sitting_position_section_method`),
        // sectionContent: i18n.t(`sitting_position${INDEX}_method`),
        sectionContent: RAW_DATA.method,
      },
      {
        sectionTitle: i18n.t(`sitting_position_section_benefits`),
        // sectionContent: i18n.t(`sitting_position${INDEX}_benefits`),
        sectionContent: RAW_DATA.benefits,
      },
      {
        sectionTitle: i18n.t(`sitting_position_section_prohibitions`),
        // sectionContent: i18n.t(`sitting_position${INDEX}_prohibitions`),
        sectionContent: RAW_DATA.prohibitions,
      },
    ]
  }
  
  
  return (
    <View style={ SharedStyle.Root }>

      <VKHeader 
        title=''
        backgroundColor='#FDC055'
        color='#000'
        barStyle='dark-content'
        navigation={ props.navigation }
      />
      
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 16 }}>
        <View style={{ flex: 1 }}>
          <VKInfoCard 
            title={ DATA.title }
            titleAlignment='center'
            contentSections={ DATA.contentSections }
          />
        </View>
      </ScrollView>

    </View>
  )
}

const LocalStyle = StyleSheet.create({
  // 
});

export default SittingPositionInfoPage
