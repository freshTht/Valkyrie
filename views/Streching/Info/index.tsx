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

const StrechingInfoPage: React.FC<Props> = (props) => {

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
  // let IMG_SRC = props.navigation.getParam('IMG_SRC', '')
  
  // DATA
  const RAW_DATA = i18n.t(`streching_types`)[INDEX]
  const DATA: any = {
    title: RAW_DATA.title_full,
    contentSections: []
  }
  for (let i = 0; i < RAW_DATA.methods.length; i++) {
    const METHOD = RAW_DATA.methods[i]

    DATA.contentSections.push({
      // sectionImageSource: IMG_SRC[i],
      sectionImageSource: METHOD.image,
    })
    // console.log(JSON.stringify(IMG_SRC[INDEX]));

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
    <VKRootView>

      <VKHeader 
        title=''
        backgroundColor='#4FAFA1'
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

export default StrechingInfoPage
