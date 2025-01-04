import React from 'react'
import {
  View,
  ScrollView,
} from 'react-native'

import i18n from 'i18n-js'

import Instruction from '@app/components/Streching/Instruction'
import VKRootView from '@app/components/VKRootView'
import { VKCarousel } from '@app/components/VKCarousel'
import { VKPageContainer } from '@app/components/VKPageContainer'

const StrechingPage: React.FC = () => {
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
  return (
    <VKPageContainer>
      <Instruction />
      <VKCarousel data={carouselItems} />
    </VKPageContainer>
  );
};

export default StrechingPage;
