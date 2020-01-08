/* eslint-disable */
import React, {Component,} from 'react'
import {
  StyleSheet, TouchableOpacity,
  View,
} from 'react-native'

import {
  Header, Card
} from 'react-native-elements'

import i18n from 'i18n-js'
import StyledText from 'react-native-styled-text'
import { renderOrderedList } from '@app/components/utils'
import { SharedStyle } from '@app/components/styles'

interface Props {
  // backgroundColor?: string,
  // title?: string,
  // navigation?: any,
}

const BodyEquipment: React.FC<Props> = (props) => {
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

  const TITLE = i18n.t('cpinfo_body_equipment1_title')
  const CONTENT = i18n.t('cpinfo_body_equipment1_body')

  const OBJECTIVES_TITLE = i18n.t('cpinfo_body_equipment1_objectives_title')
  const OBJECTIVES = [
    i18n.t('cpinfo_body_equipment1_objectives_item_1'),
    i18n.t('cpinfo_body_equipment1_objectives_item_2'),
    i18n.t('cpinfo_body_equipment1_objectives_item_3'),
    i18n.t('cpinfo_body_equipment1_objectives_item_4'),
  ]

  const SUGGESTIONS_TITLE = i18n.t('cpinfo_body_equipment1_suggestions_title')
  const SUGGESTIONS = i18n.t('cpinfo_body_equipment1_suggestions_body')

  return (
    <Card containerStyle={SharedStyle.InfoCard}>
      <View>

        <StyledText style={SharedStyle.Title}>
          { TITLE }
        </StyledText>
        <View style={SharedStyle.SubSection}>
          <StyledText style={SharedStyle.Content}>
            { CONTENT }
          </StyledText>
        </View>
        
        <View style={SharedStyle.SubSection}>
          <StyledText style={SharedStyle.SubSectionTitle}>
            { OBJECTIVES_TITLE }
          </StyledText>

          <View style={{ marginLeft: 12 }}>
            {
              renderOrderedList(OBJECTIVES)
            }
          </View>
        </View>

        <View style={SharedStyle.SubSection}>
          <StyledText style={SharedStyle.SubSectionTitle}>
            { SUGGESTIONS_TITLE }
          </StyledText>

          <StyledText style={SharedStyle.Content}>
            { SUGGESTIONS }
          </StyledText>
        </View>
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

export default BodyEquipment
