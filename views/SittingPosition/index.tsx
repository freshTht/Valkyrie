import React from 'react'
import i18n from 'i18n-js'

import Importance from '@app/components/SittingPosition/Importance'
import { VKCarousel } from '@app/components/VKCarousel'
import { VKPageContainer } from '@app/components/VKPageContainer'

const SittingPositionPage: React.FC = () => {
  const DATA = i18n.t(`sitting_positions`) as unknown as any[];
  const IMG_FILES = [
    require('@app/assets/colored/Sitting/Correct/ringss.png'),
    require('@app/assets/colored/Sitting/Correct/crossss.png'),
    require('@app/assets/colored/Sitting/Correct/longss.png'),
    require('@app/assets/colored/Sitting/Correct/chairss.png'),
  ]

  const carouselItems = DATA.map((elm, i) => ({
    title: elm.title,
    href: 'SittingPositionInfo',
    imgSrc: IMG_FILES[i],
    hrefParams: {
      INDEX: i,
      IMG_SRC: IMG_FILES[i],
    },
    backgroundColor: '#325E96',
  }));

  return (
    <VKPageContainer>
      <VKCarousel data={carouselItems} />
      <Importance />
    </VKPageContainer>
  );
};

export default SittingPositionPage
