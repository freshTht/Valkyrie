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

import Note from '@app/components/Exercise/Note'
import Carousel from 'react-native-snap-carousel'
import VKRootView from '@app/components/VKRootView'

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
    require('@app/assets/colored/Exercise/COM/17ขยับ.gif'),
    require('@app/assets/colored/Exercise/COM/26weat.png'),
    require('@app/assets/colored/Exercise/COM/30ขยับ.gif'),
    require('@app/assets/colored/Exercise/COM/1ขยับ.gif'),
    
  ]
  const IMG_FILES = [
    [
      // require('@app/assets/Exercise/1/1.png'),
      [
        require('@app/assets/colored/Exercise/COM/17ขยับ.gif'),
        require('@app/assets/colored/Exercise/COM/18ขยับ.gif'),
      ],
      [
        require('@app/assets/colored/Exercise/COM/19paraside.png'),
        require('@app/assets/colored/Exercise/COM/20parafront.png'),
        require('@app/assets/colored/Exercise/COM/21paraback.png'),
      ],
      '',
      require('@app/assets/colored/Exercise/COM/22ขยับ.gif'),
      [
        require('@app/assets/colored/Exercise/COM/23ขยับ.gif'),
        require('@app/assets/colored/Exercise/COM/24ขยับ.gif'),
      ],
      require('@app/assets/colored/Exercise/COM/25ขยับ.gif'),
      [
        require('@app/assets/colored/Exercise/COM/25_01-นั่งโยก.gif'),
        require('@app/assets/colored/Exercise/COM/25_01-โยกด้านข้าง.gif'),
      ],
    ], 
    [
      require('@app/assets/colored/Exercise/COM/26weat.png'),
      '',
      require('@app/assets/colored/Exercise/COM/27roller.png'),
      '',
      require('@app/assets/colored/Stretching/15ขยับ.gif'),
      '',
      require('@app/assets/colored/Exercise/COM/29ขยับ.gif'),
    ],
    [
      [
        require('@app/assets/colored/Exercise/COM/30ขยับ.gif'),
        require('@app/assets/colored/Exercise/COM/30-31.gif'),
      ],
    ],
    [
      require('@app/assets/colored/Exercise/COM/1ขยับ.gif'),
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
        <View
          style={[ SharedStyle.CarouselCard, { backgroundColor: item.backgroundColor } ]}>

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

export default ExerciseTutorialPage
