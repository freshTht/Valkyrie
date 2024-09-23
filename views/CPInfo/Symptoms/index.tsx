/* eslint-disable */

import React from 'react'
import {
  ScrollView,
} from 'react-native'

import Symptoms from '@app/components/CPInfo/Symptoms'
import VKRootView from '@app/components/VKRootView'

interface Props {
  navigation?: any
}

const DiagnosticsPage: React.FC<Props> = (_) => {
  return (
    <VKRootView>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 16 }}>
        <Symptoms/>
      </ScrollView>
    </VKRootView>
  )
};

export default DiagnosticsPage
