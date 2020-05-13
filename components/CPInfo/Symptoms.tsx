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

const Symptoms: React.FC<Props> = (props) => {
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

  const TITLE = i18n.t('cpinfo_symptoms_title')
  const LIST_ITEMS = i18n.t('cpinfo_symptoms_items')
  return (
    <View style={SharedStyle.InfoCard}>
      <Text style={SharedStyle.Title}>
        { TITLE }
      </Text>
      <View style={{ marginLeft: 16 }}>
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

export default Symptoms
