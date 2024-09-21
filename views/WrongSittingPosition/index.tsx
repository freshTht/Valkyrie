/* eslint-disable */
import React from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import VKHeader from '@app/components/VKHeader'
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

        <VKHeader 
          title={i18n.t('page_title_wrong_sitting_position')}
          backgroundColor='#EC8C50'
          color='#fff'
          barStyle='light-content'
          navigation={ props.navigation }
        />
        
        <ScrollView style={{ flex: 1 }} contentContainerStyle={LocalStyle.mainMenu}>

          <View style={{ flex: 1, paddingBottom: 16 }}>
            <VKCarousel data={carouselItems} />

            <HealthEffect />
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

export default WrongSittingPositionPage
