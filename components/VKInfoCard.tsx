import React from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  ImageSourcePropType,
  Text,
  useWindowDimensions
} from 'react-native'

import StyledText from 'react-native-styled-text'
import { renderOrderedList } from '@app/components/utils'
import { SharedStyle } from '@app/components/styles'
import { useScaledWindowDimension } from '@app/utils/window/useScaledWindowDimension'
import { Image } from 'expo-image'

interface VKSection {
  sectionTitle?: string,
  sectionContent?: string,
  sectionOrderedList?: string[],
  sectionOrderedListImages?: ImageSourcePropType[],
  hideNumber?: boolean,
  sectionImageSource?: ImageSourcePropType,
  sectionMultipleImageSource?: ImageSourcePropType[],
  sectionNestedSection?: VKSection,

  isSeperatorSection?: boolean,
}
interface Props {
  title?: string,
  titleAlignment?: 'left' | 'center' | 'right',
  contentSections?: VKSection[],
}

const VKInfoCard: React.FC<Props> = (props) => {
  const TITLE = props.title
  const SECTIONS = props.contentSections ? props.contentSections:[]

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
    const dimension = useWindowDimensions();
    if (s.isSeperatorSection) {
      return (
        <View style={{ width: '100%', height: 1, backgroundColor: '#000000', opacity: 0.2, marginVertical: 20 }} key={i}/>
      )
    }
    else {
      const AVAILABLE_SPACE = dimension.width - (2*16) - (2*12)
      const IMG_WIDTH = AVAILABLE_SPACE * 0.9
      
      const ORDERED_LIST = s.sectionOrderedList ? s.sectionOrderedList : []
      const ORDERED_LIST_IMAGES = s.sectionOrderedListImages ? s.sectionOrderedListImages : []

      const SMALL_IMG_WIDTH = AVAILABLE_SPACE * 0.5
      const SMALL_IMG_MARGIN = -(AVAILABLE_SPACE * 0.05)
      
      return (
        <View style={SharedStyle.SubSection} key={i}>
          {s.sectionTitle && (
            <StyledText style={SharedStyle.SubSectionTitle}>
              { s.sectionTitle }
            </StyledText>
          )}
          
          {s.sectionContent && (
            <StyledText style={SharedStyle.Content}>
              { s.sectionContent }
            </StyledText>
          )}
          
          {renderOrderedList(ORDERED_LIST, ORDERED_LIST_IMAGES, ORDERED_LIST.length <= 1 || s.hideNumber)}
          
          {s.sectionImageSource && (
            <Image
              source={s.sectionImageSource} 
              autoplay={true}
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                width: IMG_WIDTH,
                height: IMG_WIDTH,
              }}
            />
          )}

          {s.sectionMultipleImageSource && (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
              {
                s.sectionMultipleImageSource.map(elm =>
                  <Image
                    key={elm.toString()}
                    source={elm} 
                    autoplay={true}
                    style={{
                      marginHorizontal: SMALL_IMG_MARGIN,
                      width: SMALL_IMG_WIDTH,
                      height: SMALL_IMG_WIDTH,
                    }}
                  />
                )
              }
            </View>
          )}
        </View>
      )
    }
  }

  return (
    <View style={SharedStyle.InfoCard}>
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
