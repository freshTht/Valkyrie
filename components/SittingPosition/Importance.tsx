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
import VKInfoCard from '../VKInfoCard'

interface Props {
  // backgroundColor?: string,
  // title?: string,
  // navigation?: any,
}

const Importance: React.FC<Props> = (props) => {
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

  const TITLE = i18n.t('sitting_position_importance_title')
  const CONTENT_SECTIONS = i18n.t('sitting_position_importance_content')
  return (
    <VKInfoCard
      title={TITLE}
      contentSections={CONTENT_SECTIONS}
    />
  )
}

const LocalStyle = StyleSheet.create({
  header: {
    width: '100%',
    height: 100
  },
});

export default Importance
