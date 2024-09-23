/* eslint-disable */

import React from 'react'
import {
  ScrollView,
} from 'react-native'

import Diagnostics1 from '@app/components/CPInfo/Diagnostics1'
import Diagnostics3 from '@app/components/CPInfo/Diagnostics3'
import VKRootView from '@app/components/VKRootView'

interface Props {
  navigation?: any
}

const DiagnosticsPage: React.FC<Props> = (_) => {
  return (
    <VKRootView>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 16 }}>
        <Diagnostics1/>
        <Diagnostics3/>
      </ScrollView>
    </VKRootView>
  )
};

export default DiagnosticsPage
