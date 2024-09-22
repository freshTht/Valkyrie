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
import VKRootView from '@app/components/VKRootView'
import { VKCarousel } from '@app/components/VKCarousel'

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
  }, [])

  // 
  // PARAMS
  // 
  const DATA = i18n.t(`exercise_types`) as any;
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

  if (loading) {
    return <></>
  }
  else {
    return (
      <VKRootView>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={LocalStyle.mainMenu}>
          <View style={{ flex: 1, paddingBottom: 16 }}>
            <Note />
            <VKCarousel data={carouselItems} />
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
