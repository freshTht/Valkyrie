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
import { renderUnorderedList } from '@app/components/utils'
import { SharedStyle } from '@app/components/styles'

interface Props {
  // backgroundColor?: string,
  // title?: string,
  // navigation?: any,
}

const Diagnostics2: React.FC<Props> = (props) => {
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

  const TITLE = i18n.t('cpinfo_diagnostics2_title')
  const LIST_ITEMS = [
    i18n.t('cpinfo_diagnostics2_item_1'),
    i18n.t('cpinfo_diagnostics2_item_2'),
    i18n.t('cpinfo_diagnostics2_item_3'),
    i18n.t('cpinfo_diagnostics2_item_4'),
    i18n.t('cpinfo_diagnostics2_item_5'),
    i18n.t('cpinfo_diagnostics2_item_6'),
  ]
  return (
    <Card containerStyle={SharedStyle.InfoCard}>
      <Text style={SharedStyle.Title}>
        { TITLE }
      </Text>
      <View style={{ marginLeft: 24 }}>
        {
          renderUnorderedList(LIST_ITEMS)
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

export default Diagnostics2
