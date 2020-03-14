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

const ExerciseInfoPage: React.FC<Props> = (props) => {

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
  const RAW_DATA = i18n.t(`exercise_types`)[INDEX]
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
        sectionImageSource: '',
      }
      
      DATA.contentSections.push(TITLE_AND_IMGS);
      
      console.log(`${i} ${JSON.stringify(IMG)}`)
      if (IMG) { // if image exists
        if (!IMG[0]) {  // if not an array
          TITLE_AND_IMGS.sectionImageSource = IMG;
        }
        else {
          IMG.forEach((elm: any) => {
            DATA.contentSections.push({
              sectionImageSource: elm,
            });
          })
        }
      }
    }

    // if (IMG_SRC[i]) {
    //   DATA.contentSections.push({
    //     sectionImageSource: IMG_SRC[i],
    //   })
    // }
    // console.log(JSON.stringify(IMG_SRC[INDEX]));
    

    if (METHOD.description || METHOD.steps)
    DATA.contentSections.push({
      sectionTitle: i18n.t(`exercise_section_methods`),
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

    if (METHOD.warnings) {
      DATA.contentSections.push({
        sectionTitle: i18n.t(`exercise_section_warnings`),
        sectionOrderedList: METHOD.warnings,
      })
    }

    if (METHOD.note) {
      DATA.contentSections.push({
        sectionContent: METHOD.note,
      })
    }

    if (i !== RAW_DATA.methods.length - 1 
      && (METHOD.description || METHOD.steps || METHOD.notes || METHOD.warning || METHOD.note)) {
      DATA.contentSections.push({
        isSeperatorSection: true,
      })
    }
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

export default ExerciseInfoPage
