/* eslint-disable */
import React from 'react'
import {
  StyleSheet, 
  View,
  useWindowDimensions,
} from 'react-native'

import {
  Text,
} from 'react-native-elements'

import i18n from 'i18n-js'
import { renderOrderedList } from '@app/components/utils'
import { SharedStyle } from '@app/components/styles'
import { Spacing } from '../styles/enum/Spacing.enum'
import { Image } from 'expo-image'

const CategoriesByAnomalies: React.FC = () => {
  const TITLE = i18n.t('cpcategory_anomalies_title')
  const LIST_ITEMS = i18n.t('cpcategory_anomalies') as unknown as string[];

  const dimensions = useWindowDimensions();
  const IMG_WIDTH = dimensions.width * 0.4;

  return (
    <View style={SharedStyle.InfoCard}>
      <Text style={SharedStyle.Title}>
        { TITLE }
      </Text>
      {renderOrderedList(LIST_ITEMS)}
      <Image source={require('@app/assets/CPInfo/Categories/plegia.png')} 
        style={{
          marginVertical: Spacing.XL,
          marginHorizontal: 'auto',
          width: IMG_WIDTH,
          height: IMG_WIDTH,
        }}
      />
    </View>
  )
}

const LocalStyle = StyleSheet.create({
  header: {
    width: '100%',
    height: 100
  },
});

export default CategoriesByAnomalies
