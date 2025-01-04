/* eslint-disable */
import React, {Component,} from 'react'
import {
  StyleSheet, TouchableOpacity,
  View,
} from 'react-native'

import {
  Header, Card, Text
} from 'react-native-elements'

import i18n from 'i18n-js'
import { renderOrderedList } from '@app/components/utils'
import { SharedStyle } from '@app/components/styles'

const Causes: React.FC = () => {
  const TITLE = i18n.t('cpinfo_causes_title')
  const LIST_ITEMS = i18n.t('cpinfo_causes')
  return (
    <View style={SharedStyle.InfoCard}>
      <Text style={SharedStyle.Title}>
        { TITLE }
      </Text>
      <View>
        {
          renderOrderedList(LIST_ITEMS)
        }
      </View>
    </View>
  )
}

const LocalStyle = StyleSheet.create({
  header: {
    width: '100%',
    height: 100
  },
});

export default Causes
