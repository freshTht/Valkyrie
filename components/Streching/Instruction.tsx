/* eslint-disable */
import React, {Component,} from 'react'
import {
  StyleSheet, View,
} from 'react-native'

import StyledText from 'react-native-styled-text'
import { SharedStyle } from '../styles'
import { renderOrderedList } from '../utils'
import i18n from 'i18n-js'

interface Props {
  // backgroundColor?: string,
  // title?: string,
  // navigation?: any,
}

const Instruction: React.FC<Props> = (props) => {
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

  const TITLE = i18n.t('streching_note_title')
  const CONTENT: string[] = i18n.t('streching_note')
  return (
    <View style={SharedStyle.InfoCard}>
      <StyledText style={SharedStyle.Title}>
        { TITLE }
      </StyledText>
      { renderOrderedList(CONTENT) }
    </View>
  )
}

const LocalStyle = StyleSheet.create({
  header: {
    width: '100%',
    height: 100
  },
});

export default Instruction
