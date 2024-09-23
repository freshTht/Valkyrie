/* eslint-disable */

import React from 'react'
import {
  StyleSheet,
  ScrollView,
} from 'react-native'

import CategoriesByMovement from '@app/components/CPInfo/CategoriesByMovement'
import CategoriesByAnomalies from '@app/components/CPInfo/CategoriesByAnomalies'
import VKRootView from '@app/components/VKRootView'

interface Props {
  navigation?: any
}

const CategoriesPage: React.FC<Props> = (props) => {
  return (
    <VKRootView>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 16 }}>
        <CategoriesByMovement />
        <CategoriesByAnomalies />
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

export default CategoriesPage
