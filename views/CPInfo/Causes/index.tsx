/* eslint-disable */

import React from 'react'
import {
  ScrollView,
} from 'react-native'

import Causes from '@app/components/CPInfo/Causes'
import VKRootView from '@app/components/VKRootView'

interface Props {
  navigation?: any
}

const CausesPage: React.FC<Props> = (props) => {
  return (
    <VKRootView>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 16 }}>
        <Causes />
      </ScrollView>      
    </VKRootView>
  )
};

export default CausesPage;
