import React from 'react'
import {
  Button,
  StyleSheet,
  View,
} from 'react-native'

import { renderMenuItems } from '@app/components/utils'

import { AboutModal } from '@app/components/AboutModal'
import { VKPageContainer } from '@app/components/VKPageContainer'
import { TintColor } from '@app/components/styles/enum/TintColor.enum'
import { MenuItemData } from '@app/components/VKMenuItem'
import { SharedStyle } from '@app/components/styles'

interface Props {
  navigation?: any
}

const MainPage: React.FC<Props> = (props) => {
  // MENU items
  const menuList1: MenuItemData[] = [
    {
      title: 'Cerebral palsy คืออะไร',
      href: 'CPInfo',
      backgroundColor: TintColor.Green,
    },
    {
      title: 'ท่านั่งที่ถูกต้อง',
      href: 'SittingPosition',
      backgroundColor: TintColor.Yellow,
    },
    {
      title: 'การนั่งที่ไม่เหมาะสม',
      href: 'WrongSittingPosition',
      backgroundColor: TintColor.Orange,
    },
  ]
  const menuList2: MenuItemData[] = [
    {
      title: 'กิจวัตรประจำวัน',
      href: 'Routine',
      backgroundColor: TintColor.Red,
    },
    {
      title: 'การยืดกล้ามเนื้อ',
      href: 'Streching',
      backgroundColor: TintColor.Green,
    },
    {
      title: 'การออกกำลังกาย',
      href: 'Exercise',
      backgroundColor: TintColor.Yellow,
    },
  ]

  return (
    <VKPageContainer>
      <View style={{ height: '100%' }}>
        <View style={{ flexGrow: 1, justifyContent: 'center' }}>
          <View style={SharedStyle.menuListLeft}>
            { renderMenuItems(menuList1, props.navigation, 'left') }
          </View>

          <View style={{ height: 20 }}/>

          <View style={SharedStyle.menuListRight}>
            { renderMenuItems(menuList2, props.navigation, 'right') }
          </View>
        </View>
        <AboutModal />
      </View>
    </VKPageContainer>
  );
};

export default MainPage;
