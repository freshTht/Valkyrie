/* eslint-disable */
import React, {Component,} from 'react'
import {
  StyleSheet, TouchableOpacity,
} from 'react-native'

import {
  Header, Card
} from 'react-native-elements'

import { Feather } from '@expo/vector-icons'
import StyledText from 'react-native-styled-text'
import { SharedStyle } from '../styles'
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
  const CONTENT = i18n.t('streching_note')
  return (
    <Card containerStyle={SharedStyle.InfoCard}>
      <StyledText style={SharedStyle.Title}>
        { TITLE }
      </StyledText>
      <StyledText style={SharedStyle.Content}>
        { CONTENT }
      </StyledText>
    </Card>
  )
}

const LocalStyle = StyleSheet.create({
  header: {
    width: '100%',
    height: 100
  },
});

export default Instruction
