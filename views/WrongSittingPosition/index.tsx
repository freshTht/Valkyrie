import React from 'react'
import i18n from 'i18n-js'

import HealthEffect from '@app/components/WrongSittingPosition/HealthEffect'
import { VKCarousel } from '@app/components/VKCarousel'
import { VKPageContainer } from '@app/components/VKPageContainer'

const WrongSittingPositionPage: React.FC = () => {
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
  
  return (
    <VKPageContainer>
      <VKCarousel data={carouselItems} />
      <HealthEffect />
    </VKPageContainer>
  )
};

export default WrongSittingPositionPage
