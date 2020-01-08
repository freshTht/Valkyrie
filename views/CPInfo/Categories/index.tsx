/* eslint-disable */

import React, {Component,} from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
} from 'react-native'

// import {
//   Button,
//   Text
// } from 'react-native-elements'

import { SharedStyle } from '@app/components/styles'

import VKHeader from '@app/components/VKHeader'
import CategoriesByMovement from '@app/components/CPInfo/CategoriesByMovement'
import CategoriesByAnomalies from '@app/components/CPInfo/CategoriesByAnomalies'

interface Props {
  navigation?: any
}

const CategoriesPage: React.FC<Props> = (props) => {

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
    <View style={SharedStyle.Root}>

      <VKHeader 
        title='การแบ่งประเภทเด็กภาวะสมองพิการ'
        backgroundColor='#E16E5B'
        navigation={ props.navigation }
      />
      
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 16 }}>
        <CategoriesByMovement />
        <CategoriesByAnomalies />
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

export default CategoriesPage
