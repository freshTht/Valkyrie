/* eslint-disable */

import React from 'react'
import {
  ScrollView,
} from 'react-native'

import MedicalTreatments from '@app/components/CPInfo/MedicalTreatments'
import VKRootView from '@app/components/VKRootView'

interface Props {
  navigation?: any
}

const MedicalTreatmentsPage: React.FC<Props> = (props) => {
  return (
    <VKRootView>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 16 }}>
        <MedicalTreatments />
      </ScrollView>
    </VKRootView>
  );
};

export default MedicalTreatmentsPage
