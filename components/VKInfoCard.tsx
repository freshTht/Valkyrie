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
  hideNumber?: boolean,
  sectionImageSource?: ImageSourcePropType,
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
          SECTIONS.map((s: VKSection, i: number) => {
            const ORDERED_LIST = s.sectionOrderedList ? s.sectionOrderedList : []
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
                    (ORDERED_LIST.length <= 1 || s.hideNumber) ? 
                    renderUnorderedList(ORDERED_LIST) : renderOrderedList(ORDERED_LIST)
                  }
                </View>
                
                {
                  s.sectionImageSource ?
                  (
                    <Image source={s.sectionImageSource} 
                      width={Dimensions.get('window').width - (2*16) - (2*12)}
                    />
                      // style={{ marginTop: '-5%', marginBottom: '5%' }}
                  )
                  : (<></>)
                }
                
              </View>
            )
          })
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
