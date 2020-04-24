/* eslint-disable */
import React, {Component,} from 'react'
import {
  StyleSheet, TouchableOpacity,
  View,
} from 'react-native'

import {
  Header, Card, Text
} from 'react-native-elements'

import i18n from 'i18n-js';
import { renderOrderedList } from '@app/components/utils'
import { SharedStyle } from '@app/components/styles'

interface Props {
  // backgroundColor?: string,
  // title?: string,
  // navigation?: any,
}

const Diagnostics3: React.FC<Props> = (props) => {
  // STATE
  // let [balance, setBalance] = React.useState<number>();

  // PROPS
  // const TITLE = props.title ? props.title : ''

  React.useEffect(() => {
    // componentDidMount

    const componentWillUnmount = () => {
      // do something..
    }
    return componentWillUnmount
  }, [])

  const TITLE = i18n.t('cpinfo_diagnostics3_title')
  const SUBTITLE = i18n.t('cpinfo_diagnostics3_subtitle')
  const rawListItems = i18n.t('cpinfo_diagnostics3_items')

  const LIST_ITEMS = rawListItems.map((elm: any) => `${elm.title} ${elm.body}`)
  // const LIST_ITEMS = [
  //   i18n.t('cpinfo_diagnostics3_item_1_title') + '\n\t' + i18n.t('cpinfo_diagnostics3_item_1_body'),
  //   i18n.t('cpinfo_diagnostics3_item_2_title') + '\n\t' + i18n.t('cpinfo_diagnostics3_item_2_body'),
  //   i18n.t('cpinfo_diagnostics3_item_3_title') + '\n\t' + i18n.t('cpinfo_diagnostics3_item_3_body'),
  // ]
  return (
    <Card containerStyle={SharedStyle.InfoCard}>
      <Text style={SharedStyle.Title}>
        { TITLE }
      </Text>
      <Text style={SharedStyle.Subtitle}>
        { SUBTITLE }
      </Text>
      <View style={{ marginLeft: 16 }}>
        {
          renderOrderedList(LIST_ITEMS)
        }
      </View>
    </Card>
  )
}

const LocalStyle = StyleSheet.create({
  header: {
    width: '100%',
    height: 100
  },
});

export default Diagnostics3
