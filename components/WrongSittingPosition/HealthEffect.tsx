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
import VKInfoCard, { VKSection } from '../VKInfoCard'

interface Props {
  // backgroundColor?: string,
  // title?: string,
  // navigation?: any,
}

const HealthEffect: React.FC<Props> = (props) => {
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

  const DATA: VKSection[] = [
    {
      // sectionTitle: i18n.t('wrong_sitting_position_health_effect_title'),
      sectionContent: i18n.t('wrong_sitting_position_health_effect_subtitle'),
      sectionOrderedList: i18n.t('wrong_sitting_position_health_effects')
    }
  ]
  return (
    // <Card containerStyle={SharedStyle.InfoCard}>
    //   <StyledText style={SharedStyle.Title}>
    //     { TITLE }
    //   </StyledText>
    //   <StyledText style={SharedStyle.Content}>
    //     { CONTENT }
    //   </StyledText>
    // </Card>
    <VKInfoCard
      title={ i18n.t('wrong_sitting_position_health_effect_title') }
      contentSections={ DATA }
    />
  )
}

const LocalStyle = StyleSheet.create({
  header: {
    width: '100%',
    height: 100
  },
});

export default HealthEffect
