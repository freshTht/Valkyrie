/* eslint-disable */

import React from 'react'
import {
  Modal,
  StyleSheet,
  View,
} from 'react-native'

import { MenuItemData, renderMenuItems } from '@app/components/utils'
import VKRootView from '@app/components/VKRootView'

import { FirstTimeMessageModal } from '@app/components/FirstTimeMessageModal'
import { VKPageContainer } from '@app/components/VKPageContainer'

interface Props {
  navigation?: any
}

const MainPage: React.FC<Props> = (props) => {
  // MENU items
  const menuList1: MenuItemData[] = [
    {
      title: 'Cerebral palsy คืออะไร',
      href: 'CPInfo',
      backgroundColor: '#4FAFA1',
    },
    {
      title: 'ท่านั่งที่ถูกต้อง',
      href: 'SittingPosition',
      backgroundColor: '#FDC055',
      color: '#000',
    },
    {
      title: 'การนั่งที่ไม่เหมาะสม',
      href: 'WrongSittingPosition',
      backgroundColor: '#EC8C50',
    },
  ]
  const menuList2 = [
    {
      title: 'กิจวัตรประจำวัน',
      href: 'Routine',
      backgroundColor: '#E16E5B',
    },
    {
      title: 'การยืดกล้ามเนื้อ',
      href: 'Streching',
      backgroundColor: '#4FAFA1',
    },
    {
      title: 'การออกกำลังกาย',
      href: 'Exercise',
      backgroundColor: '#FDC055',
      color: '#000',
    },
  ]

  return (
    <>
      <VKPageContainer>
        <View style={{ height: '100%', justifyContent: 'center' }}>
          <View style={LocalStyle.menuListLeft}>
            { renderMenuItems(menuList1, props.navigation, 'left') }
          </View>

          <View style={{ height: 20 }}/>

          <View style={LocalStyle.menuListRight}>
            { renderMenuItems(menuList2, props.navigation, 'right') }
          </View>
        </View>
      </VKPageContainer>
      <FirstTimeMessageModal />
    </>
  )
}

const LocalStyle = StyleSheet.create({
  bottomBar: {
    paddingVertical: 8,
    width: '100%', 
    flex: 0,

    paddingHorizontal: 8,
  },
  mainMenu: {
    // paddingHorizontal: 12,
    paddingVertical: 16,
    justifyContent: 'center',
    flex: 1,
  },
  menuButton: {
    marginBottom: 8,
  },
  
  menuListLeft: {
    alignSelf: 'flex-start',
    width: 200,
    marginBottom: 8,
  },
  menuListRight: {
    alignSelf: 'flex-end',
    width: 180,
    marginBottom: 8,
  },
  menuList3: {
    alignSelf: 'flex-start',
    width: 220,
    marginBottom: 8,
  },
});

export default MainPage
