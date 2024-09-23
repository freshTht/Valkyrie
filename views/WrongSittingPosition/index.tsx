/* eslint-disable */
import React from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import i18n from 'i18n-js'

import HealthEffect from '@app/components/WrongSittingPosition/HealthEffect'
import VKRootView from '@app/components/VKRootView'
import { VKCarousel } from '@app/components/VKCarousel'

interface Props {
  navigation?: any
}

const WrongSittingPositionPage: React.FC<Props> = (props) => {

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
  
  // MENU items
  const DATA = i18n.t(`wrong_sitting_positions`) as any;
  const IMG_FILES = [
    require('@app/assets/colored/Sitting/Incorrect/wss.png'),
    require('@app/assets/colored/Sitting/Incorrect/sacralss.png'),
    require('@app/assets/colored/Sitting/Incorrect/sittingผิดss.png'),
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
  
  if (loading) {
    return <></>
  }
  else {
    return (
      <VKRootView>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ flex: 1, paddingBottom: 16 }}>
            <VKCarousel data={carouselItems} />
            <HealthEffect />
          </View>
        </ScrollView>
      </VKRootView>
    )
  }
};

export default WrongSittingPositionPage
