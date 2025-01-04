/* eslint-disable */
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

const Diagnostics3: React.FC = () => {
  const TITLE = i18n.t('cpinfo_diagnostics3_title')
  const SUBTITLE = i18n.t('cpinfo_diagnostics3_subtitle')
  const rawListItems = i18n.t('cpinfo_diagnostics3_items') as any

  const LIST_ITEMS = rawListItems.map((elm: any) => `${elm.title} ${elm.body}`)
  return (
    <View style={SharedStyle.InfoCard}>
      <Text style={SharedStyle.Title}>
        { TITLE }
      </Text>
      <Text style={SharedStyle.Subtitle}>
        { SUBTITLE }
      </Text>
      { renderOrderedList(LIST_ITEMS) }
    </View>
  )
}

export default Diagnostics3
