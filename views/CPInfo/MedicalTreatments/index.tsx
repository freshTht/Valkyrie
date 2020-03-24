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
import MedicalTreatments from '@app/components/CPInfo/MedicalTreatments'
import VKRootView from '@app/components/VKRootView'

interface Props {
  navigation?: any
}

const MedicalTreatmentsPage: React.FC<Props> = (props) => {

  // STATE
  // let [balance, setBalance] = React.useState<number>();

  React.useEffect(() => {
    // componentDidMount

    const componentWillUnmount = () => {
      // do something..
    }
    return componentWillUnmount
  }, [])

  return (
    <VKRootView>

      <VKHeader 
        title={i18n.t('page_title_cpinfo_medical_treatments')}
        backgroundColor='#E16E5B'
        navigation={ props.navigation }
      />
      
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 16 }}>
        <MedicalTreatments />
      </ScrollView>

    </VKRootView>
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

export default MedicalTreatmentsPage
