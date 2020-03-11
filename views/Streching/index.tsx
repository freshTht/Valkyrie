/* eslint-disable */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native'

// import {
//   Button,
//   Text
// } from 'react-native-elements'

import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'

import { SharedStyle } from '@app/components/styles'

import VKHeader from '@app/components/VKHeader'
import { renderMenuItems, MenuItemData } from '@app/components/utils'
import i18n from 'i18n-js'

import Instruction from '@app/components/Streching/Instruction'
import Carousel from 'react-native-snap-carousel'
import { Card } from 'react-native-elements'
import Image from 'react-native-scalable-image'

interface Props {
  navigation?: any
}

const StrechingPage: React.FC<Props> = (props) => {

  // STATE
  let [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    // componentDidMount
    setTimeout(() => {
      setLoading(false)
    }, 100)

    const componentWillUnmount = () => {
      // do something..
    }
    return componentWillUnmount
  }, [])

  // 
  // PARAMS
  // 
  const DATA = i18n.t(`streching_types`)
  const IMG_FILES = [
    [
      // require('@app/assets/Streching/ต้นแขน-1.png'),
      require('@app/assets/colored/Stretching/8(ขยับ).gif'),
      // require('@app/assets/Streching/ต้นแขน-2.png'),
      require('@app/assets/colored/Stretching/9ขยับ.gif'),
    ],
    [
      // require('@app/assets/Streching/แขน.png'),
      require('@app/assets/colored/Stretching/10.png'),
    ],
    [
      // require('@app/assets/Streching/ยกแขนกดหมอน.png'),
      require('@app/assets/colored/Stretching/11ขยับ.gif'),
      // require('@app/assets/Streching/เว็ดเชฟ.png'),
      require('@app/assets/colored/Stretching/12เว็ดเชฟ.png'),
      // require('@app/assets/Streching/หมุนตัว.png'),
      require('@app/assets/colored/Stretching/13ขยับ.gif'),
      // require('@app/assets/Streching/ดันบอลเหยียด.png'),
      require('@app/assets/colored/Stretching/14ขยับ.gif'),
    ],
    [
      // require('@app/assets/Streching/ดันบอลขัด.png'),
      require('@app/assets/colored/Stretching/15ขยับ.gif'),
      // require('@app/assets/Streching/ยันกำแพง.png'),
      require('@app/assets/colored/Stretching/16.png'),
    ],
  ]
  // const ITEM_COUNT = 4;

  // MENU items
  // let menuItems: MenuItemData[] = []
  let carouselItems = []
  for (var i = 0; i < DATA.length; i++) {
    let ITEM = DATA[i]

    carouselItems.push({
      title: ITEM.title,
      href: 'StrechingInfo',
      imgSrc: IMG_FILES[i][0],
      hrefParams: {
        INDEX: i,
        IMG_SRC: IMG_FILES[i],
      },
      backgroundColor: '#325E96',
    })
  }

  let _carousel: Component
  
  const WIDTH = Dimensions.get('window').width
  const ITEM_WIDTH = Dimensions.get('window').width * 0.7

  const HEIGHT = Dimensions.get('window').height

  const _renderItems = (itemData: any) => {
    const { item, index } = itemData
    return (
      <TouchableOpacity activeOpacity={0.8}
        onPress={() => props.navigation.navigate( item.href, item.hrefParams )}
      >
        <Card
          containerStyle={[ SharedStyle.CarouselCard, { backgroundColor: item.backgroundColor } ]}>

          <View style={{ alignItems: 'center' }}>
            <View style={ SharedStyle.CarouselCardImageContainer }>
              {
                item.imgSrc ? 
                <Image 
                  source={item.imgSrc}
                  width={ITEM_WIDTH * 0.7}
                  style={ SharedStyle.CarouselCardImage }
                />
                :<></>
              }
            </View>
            <Text style={SharedStyle.CarouselCardTitle}> 
              { item.title } 
            </Text>
          </View>
        </Card>
      </TouchableOpacity>
    )
  }

  if (loading) {
    return <></>
  }
  else {
    return (
      <View style={SharedStyle.Root}>

        <VKHeader 
          title={i18n.t('page_title_streching')}
          backgroundColor='#4FAFA1'
          color='#fff'
          barStyle='light-content'
          navigation={ props.navigation }
        />
        
        <ScrollView style={{ flex: 1 }} contentContainerStyle={LocalStyle.mainMenu}>

          <View style={{ flex: 1, paddingBottom: 16 }}>
            
            <Instruction />

            <Carousel
              ref={(c: any) => { _carousel = c; }}
              data={carouselItems}
              renderItem={_renderItems}
              sliderWidth={ WIDTH }
              sliderHeight={ HEIGHT }
              itemWidth={ ITEM_WIDTH }
              itemHeight={ 1000 }
            />

          </View>

        </ScrollView>

      </View>
    )
  }
}

const LocalStyle = StyleSheet.create({
  mainMenu: {
    // paddingHorizontal: 12,
    // paddingVertical: 16,
    // flex: 1,
  },
  
  menuListRight: {
    flex: 1,
    alignSelf: 'flex-end',
    width: 224,
    marginTop: 20,
    marginBottom: 8,
  },
});

export default StrechingPage
