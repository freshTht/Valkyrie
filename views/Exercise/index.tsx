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

import { SharedStyle } from '@app/components/styles'

import VKHeader from '@app/components/VKHeader'
import i18n from 'i18n-js'

import Note from '@app/components/Exercise/Note'
import Carousel from 'react-native-snap-carousel'
import { Card } from 'react-native-elements'
import Image from 'react-native-scalable-image'

interface Props {
  navigation?: any
}

const ExerciseTutorialPage: React.FC<Props> = (props) => {

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
  const DATA = i18n.t(`exercise_types`)
  const COVER_IMG_FILES = [
    require('@app/assets/Exercise/17epui1.png'),
    require('@app/assets/Exercise/weat.png'),
    require('@app/assets/Exercise/bride.png'),
    require('@app/assets/Exercise/ถีบบอล.png'),

  ]
  const IMG_FILES = [
    [
      require('@app/assets/Exercise/1/1.png'),
      [
        require('@app/assets/Exercise/1/2-1.png'),
        require('@app/assets/Exercise/1/2-2.png'),
      ],
      '',
      require('@app/assets/Exercise/1/3-1.png'),
      [
        require('@app/assets/Exercise/1/3-2-1.png'),
        require('@app/assets/Exercise/1/3-2-2.png'),
      ],
      require('@app/assets/Exercise/1/3-3.png'),
      require('@app/assets/Exercise/1/3-4.png'),
    ], 
    [
      require('@app/assets/Exercise/2/1-wedge.png'),
      '',
      require('@app/assets/Exercise/2/2-crawl.png'),
      '',
      require('@app/assets/Exercise/2/3-ball.png'),
      '',
      require('@app/assets/Exercise/2/4-toys.png'),
    ],
    [
      require('@app/assets/Exercise/3/1.png'),
    ],
    [
      require('@app/assets/Exercise/4/1.png'),
    ],
    [
      '',   // TODO: add image
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
      href: 'ExerciseInfo',
      imgSrc: COVER_IMG_FILES[i],
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
          title={i18n.t('page_title_exercise')}
          backgroundColor='#FDC055'
          color='#000'
          barStyle='dark-content'
          navigation={ props.navigation }
        />
        
        <ScrollView style={{ flex: 1 }} contentContainerStyle={LocalStyle.mainMenu}>

          <View style={{ flex: 1, paddingBottom: 16 }}>
            
            <Note />
            
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

export default ExerciseTutorialPage
