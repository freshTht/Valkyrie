/* eslint-disable */
import React, {Component} from 'react'
import {
  View,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native'


import { SharedStyle } from '@app/components/styles'

import i18n from 'i18n-js'

import Instruction from '@app/components/Streching/Instruction'
import VKRootView from '@app/components/VKRootView'
import { VKCarousel } from '@app/components/VKCarousel'

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
  }, [])

  // 
  // PARAMS
  // 
  const DATA = i18n.t(`streching_types`) as any;

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

  if (loading) {
    return <></>
  }
  else {
    return (
      <VKRootView>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ flex: 1, paddingBottom: 16 }}>
            <Instruction />
            <VKCarousel data={carouselItems} />
          </View>
        </ScrollView>
      </VKRootView>
    )
  };
};

export default StrechingPage;
