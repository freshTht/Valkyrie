import React from 'react'
import {
  View,
} from 'react-native'

import StyledText from 'react-native-styled-text'
import { SharedStyle } from '../styles'
import { renderOrderedList } from '../utils'
import i18n from 'i18n-js'

const Instruction: React.FC = () => {
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
};

export default Instruction
