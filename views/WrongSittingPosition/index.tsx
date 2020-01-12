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

import Importance from '@app/components/SittingPosition/Importance'
import Carousel from 'react-native-snap-carousel'
import { Card } from 'react-native-elements'
import Image from 'react-native-scalable-image'
import HealthEffect from '@app/components/WrongSittingPosition/HealthEffect'

interface Props {
  navigation?: any
}

const WrongSittingPositionPage: React.FC<Props> = (props) => {

  // STATE
  let [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    // componentDidMount
    setLoading(false)

    const componentWillUnmount = () => {
      // do something..
    }
    return componentWillUnmount
  }, [])

  // 
  // PARAMS
  // 
  
  // MENU items
  const DATA = i18n.t(`wrong_sitting_positions`)
  const IMG_FILES = [
    require('@app/assets/WrongSittingPosition/w.png'),
    require('@app/assets/WrongSittingPosition/sacral.png'),
    require('@app/assets/WrongSittingPosition/chair-wrong.png'),
  ]

  let carouselItems = []
  for (var i = 0; i < DATA.length; i++) {
    let ITEM = DATA[i]
    carouselItems.push({
      // title: i18n.t(`wrong_sitting_position${i+1}_title`),
      title: ITEM.title,
      href: 'WrongSittingPositionInfo',
      imgSrc: IMG_FILES[i],
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
              <Image 
                source={item.imgSrc}
                width={ITEM_WIDTH * 0.7}
                style={ SharedStyle.CarouselCardImage }
              />
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
          title={i18n.t('page_title_wrong_sitting_position')}
          backgroundColor='#EC8C50'
          color='#fff'
          barStyle='light-content'
          navigation={ props.navigation }
        />
        
        <ScrollView style={{ flex: 1 }} contentContainerStyle={LocalStyle.mainMenu}>

          <View style={{ flex: 1, paddingBottom: 16 }}>
            {/* <View style={LocalStyle.menuListRight}>
              {
                renderMenuItems(menuItems, props.navigation)
              }
            </View> */}

            <Carousel
              ref={(c: any) => { _carousel = c; }}
              data={carouselItems}
              renderItem={_renderItems}
              sliderWidth={ WIDTH }
              sliderHeight={ HEIGHT }
              itemWidth={ ITEM_WIDTH }
            />

            <HealthEffect />

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

export default WrongSittingPositionPage
