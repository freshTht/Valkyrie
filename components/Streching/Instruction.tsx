import React from 'react'
import {
  View,
} from 'react-native'

import StyledText from 'react-native-styled-text'
import { StrechingData } from '@app/utils/content/streching'
import { SharedStyle } from '../styles'
import { renderOrderedList } from '../utils'
import i18n from 'i18n-js'
import VKInfoCard from '../VKInfoCard'

const Instruction: React.FC = () => {
  // const TITLE = StrechingData.Note;
  // const CONTENT: string[] = i18n.t('streching_note')
  // return (
  //   <View style={SharedStyle.InfoCard}>
  //     <StyledText style={SharedStyle.Title}>
  //       { TITLE }
  //     </StyledText>
  //     { renderOrderedList(CONTENT) }
  //   </View>
  // )
  return (
    <VKInfoCard {...StrechingData.Notes} />
  )
};

export default Instruction
