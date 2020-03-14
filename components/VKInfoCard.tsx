/* eslint-disable */
import React, {Component,} from 'react'
import {
  StyleSheet, TouchableOpacity,
  View,
  Dimensions,
  ImageSourcePropType,
  Text
} from 'react-native'

import {
  Header, Card
} from 'react-native-elements'

import Image from 'react-native-scalable-image'
import StyledText from 'react-native-styled-text'
import { renderOrderedList, renderUnorderedList } from '@app/components/utils'
import { SharedStyle } from '@app/components/styles'

interface VKSection {
  sectionTitle?: string,
  sectionContent?: string,
  sectionOrderedList?: string[],
  sectionOrderedListImages?: ImageSourcePropType[],
  hideNumber?: boolean,
  sectionImageSource?: ImageSourcePropType,
  sectionNestedSection?: VKSection,

  isSeperatorSection?: boolean,
}
interface Props {
  title?: string,
  titleAlignment?: 'left' | 'center' | 'right',
  contentSections?: VKSection[],
  // navigation?: any,
}

const VKInfoCard: React.FC<Props> = (props) => {
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

  const TITLE = props.title
  const SECTIONS = props.contentSections ? props.contentSections:[]
  
  // console.log(props.titleAlignment)
  let TITLE_ALIGNMENT
  switch (props.titleAlignment) {
    case 'center':
      TITLE_ALIGNMENT = LocalStyle.TitleCenter
      break
    case 'right':
      TITLE_ALIGNMENT = LocalStyle.TitleRight
      break
    default:
      TITLE_ALIGNMENT = LocalStyle.TitleLeft
      break
  }

  const _renderSection = (s: VKSection, i: number) => {
    if (s.isSeperatorSection) {
      return (
        <View style={{ width: '100%', height: 1, backgroundColor: '#000000', opacity: 0.2, marginVertical: 20 }}/>
      )
    }
    else {
      const AVAILABLE_SPACE = Dimensions.get('window').width - (2*16) - (2*12)
      const IMG_WIDTH = AVAILABLE_SPACE * 0.9
  
      const ORDERED_LIST = s.sectionOrderedList ? s.sectionOrderedList : []
      const ORDERED_LIST_IMAGES = s.sectionOrderedListImages ? s.sectionOrderedListImages : []
      
      return (
        <View style={SharedStyle.SubSection} key={i}>
          { 
            s.sectionTitle ?
            (
              <StyledText style={SharedStyle.SubSectionTitle}>
                { s.sectionTitle }
              </StyledText>
            )
            : (<></>)
          }
          
          { 
            s.sectionContent ?
            (
              <StyledText style={SharedStyle.Content}>
                { s.sectionContent }
              </StyledText>
            )
            : (<></>)
          }
          
          <View style={{ marginLeft: 12 }}>
            {
              // (ORDERED_LIST.length <= 1 || s.hideNumber) ? 
              // renderUnorderedList(ORDERED_LIST) : renderOrderedList(ORDERED_LIST, ORDERED_LIST_IMAGES)
              renderOrderedList(ORDERED_LIST, ORDERED_LIST_IMAGES, ORDERED_LIST.length <= 1 || s.hideNumber)
            }
          </View>
          
          {
            s.sectionImageSource ?
            (
              <Image source={s.sectionImageSource} 
                style={{ marginLeft: 'auto', marginRight: 'auto' }}
                width={IMG_WIDTH}
              />
                // style={{ marginTop: '-5%', marginBottom: '5%' }}
            )
            : (<></>)
          }
  
          {/* {
            s.sectionNestedSection ? _renderSection(s.sectionNestedSection, i) : <></>
          } */}
          
        </View>
      )
    }
  }

  return (
    <Card containerStyle={SharedStyle.InfoCard}>
      <View>
        { 
          TITLE ?
          (
            <Text style={[ SharedStyle.Title, TITLE_ALIGNMENT ]}>
              { TITLE }
            </Text>
          ) 
          : (<></>)
        }

        {
          SECTIONS.map( (s: VKSection, i: number) => _renderSection(s, i))
        }
      </View>
    </Card>
  )
}

const LocalStyle = StyleSheet.create({ 
  TitleLeft: {
    textAlign: 'left',
  },
  TitleCenter: {
    textAlign: 'center',
  },
  TitleRight: {
    textAlign: 'right',
  },
});

export default VKInfoCard
export {
  VKInfoCard,
  VKSection
}
