import React from 'react'
import {
  View,
  ScrollView,
} from 'react-native'

import i18n from 'i18n-js'

import Instruction from '@app/components/Streching/Instruction'
import VKRootView from '@app/components/VKRootView'
import { VKTileGroup } from '@app/components/VKTileGroup'
import { VKPageContainer } from '@app/components/VKPageContainer'
import { Spacing } from '@app/components/styles/enum/Spacing.enum'

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
    <VKPageContainer scrollable={false}>
      <VKTileGroup
        variant="grid"
        data={carouselItems}
        ListHeaderComponent={Instruction}
        ListHeaderComponentStyle={{ marginBottom: Spacing.XS }}
      />
    </VKPageContainer>
  );
};

export default StrechingPage;
