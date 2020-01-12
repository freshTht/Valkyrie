/* eslint-disable */
import React, {Component,} from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'

import {
  Card
} from 'react-native-elements'

import StyledText from 'react-native-styled-text'
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

  const DATA = i18n.t('routine_meaning')

  const TITLE = DATA.title
  const CONTENT = DATA.body

  return (
    <Card containerStyle={SharedStyle.InfoCard}>
      <View>
        <StyledText style={SharedStyle.Title}>
          { TITLE }
        </StyledText>
        <StyledText style={SharedStyle.Content}>
          { CONTENT }
        </StyledText>
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

export default Meaning
