import React from 'react'
import {
  View,
} from 'react-native'

import {
  Text
} from 'react-native-elements'

import i18n from 'i18n-js';
import { renderOrderedList } from '@app/components/utils'
import { SharedStyle } from '@app/components/styles'

const CategoriesByMovement: React.FC = () => {
  const TITLE = i18n.t('cpcategory_movement_title')
  const LIST_ITEMS = i18n.t('cpcategory_movement')
  return (
    <View style={SharedStyle.InfoCard}>
      <Text style={SharedStyle.Title}>
        { TITLE }
      </Text>
      { renderOrderedList(LIST_ITEMS) }
    </View>
  )
}

export default CategoriesByMovement
