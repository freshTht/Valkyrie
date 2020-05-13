/* eslint-disable */
import React from 'react'
import {
  StyleSheet, View
} from 'react-native'

import {
  Text
} from 'react-native-elements'

import { SharedStyle } from '../styles'
import i18n from 'i18n-js'

interface Props {
  // backgroundColor?: string,
  // title?: string,
  // navigation?: any,
}

const Meaning: React.FC<Props> = (props) => {
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

  const TITLE = i18n.t('cpinfo_meaning_title')
  const CONTENT = i18n.t('cpinfo_meaning_body')
  return (
    <View style={SharedStyle.InfoCard}>
      <Text style={SharedStyle.Title}>
        { TITLE }
      </Text>
      <Text style={SharedStyle.Content}>
        { CONTENT }
      </Text>
    </View>
  )
}

const LocalStyle = StyleSheet.create({
  header: {
    width: '100%',
    height: 100
  },
});

export default Meaning
