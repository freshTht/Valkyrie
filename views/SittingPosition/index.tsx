/* eslint-disable */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

import { SharedStyle } from '@app/components/styles'

import i18n from 'i18n-js'

import Importance from '@app/components/SittingPosition/Importance'
import VKRootView from '@app/components/VKRootView'
import { VKCarousel } from '@app/components/VKCarousel'

interface Props {
  navigation?: any
}

const SittingPositionPage: React.FC<Props> = (props) => {

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
  const DATA = i18n.t(`sitting_positions`) as any;
  const IMG_FILES = [
    require('@app/assets/colored/Sitting/Correct/ringss.png'),
    require('@app/assets/colored/Sitting/Correct/crossss.png'),
    require('@app/assets/colored/Sitting/Correct/longss.png'),
    require('@app/assets/colored/Sitting/Correct/chairss.png'),
  ]

  // MENU items
  let carouselItems = []
  for (var i = 0; i < DATA.length; i++) {
    let ITEM = DATA[i]

    carouselItems.push({
      title: ITEM.title,
      href: 'SittingPositionInfo',
      imgSrc: IMG_FILES[i],
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
        <ScrollView style={{ flex: 1 }}>
          <View style={{ flex: 1, paddingBottom: 16 }}>
            <VKCarousel data={carouselItems} />
            <Importance />
          </View>
        </ScrollView>
      </VKRootView>
    )
  }
};

export default SittingPositionPage
