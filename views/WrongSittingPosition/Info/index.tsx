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
import VKRootView from '@app/components/VKRootView'

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
  let INDEX = props.navigation.getParam('INDEX', 0)
  let IMG_SRC = props.navigation.getParam('IMG_SRC', '')
  
  // DATA
  const RAW_DATA = i18n.t(`wrong_sitting_positions`)[INDEX]
  const DATA = {
    title: RAW_DATA.title,
    contentSections: [
      {
        sectionImageSource: IMG_SRC,
      },
      {
        sectionContent: RAW_DATA.description,
      },
      {
        sectionTitle: i18n.t(`wrong_sitting_position_section_disadvantages`),
        sectionOrderedList: RAW_DATA.disadvantages,
      },
    ]
  }
  
  
  return (
    <VKRootView>

      <VKHeader 
        title=''
        backgroundColor='#EC8C50'
        color='#fff'
        barStyle='light-content'
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

    </VKRootView>
  )
}

const LocalStyle = StyleSheet.create({
  // 
});

export default SittingPositionInfoPage
