/* eslint-disable */

import React from 'react'
import {
  ScrollView,
} from 'react-native'

import Symptoms from '@app/components/CPInfo/Symptoms'
import VKRootView from '@app/components/VKRootView'
import { VKPageContainer } from '@app/components/VKPageContainer'

interface Props {
  navigation?: any
}

const DiagnosticsPage: React.FC<Props> = (_) => {
  return (
    <VKPageContainer>
      <Symptoms/>
    </VKPageContainer>
  )
};

export default DiagnosticsPage
