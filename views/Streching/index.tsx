/* eslint-disable */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native'


import { SharedStyle } from '@app/components/styles'

import VKHeader from '@app/components/VKHeader'
import i18n from 'i18n-js'

import Instruction from '@app/components/Streching/Instruction'
import Carousel from 'react-native-snap-carousel'
import VKRootView from '@app/components/VKRootView'

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

  // MENU items
  let carouselItems = []
  for (var i = 0; i < DATA.length; i++) {
    let ITEM = DATA[i]

    carouselItems.push({
      title: ITEM.title,
      href: 'StrechingInfo',
      imgSrc: ITEM.preview_image,
      hrefParams: {
        INDEX: i,
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
        <View
          style={[ SharedStyle.CarouselCard, { backgroundColor: item.backgroundColor } ]}>

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
        </View>
      </TouchableOpacity>
    )
  }

  if (loading) {
    return <></>
  }
  else {
    return (
      <VKRootView>

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

      </VKRootView>
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
