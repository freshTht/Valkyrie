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
  const DATA = i18n.t('routine_meaning') as any

  const TITLE = DATA.title
  const CONTENT = DATA.body

  return (
    <View style={SharedStyle.InfoCard}>
      <StyledText style={SharedStyle.Title}>
        { TITLE }
      </StyledText>
      <StyledText style={SharedStyle.Content}>
        { CONTENT }
      </StyledText>
    </View>
  )
}

export default Meaning
