/* eslint-disable */

import React from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native'


import {
  AntDesign,
  MaterialCommunityIcons,
} from '@expo/vector-icons'

import {
  renderMenuItems, MenuItemData
} from '@app/components/utils'


import Meaning from '@app/components/CPInfo/Meaning'
import VKRootView from '@app/components/VKRootView'
import { BorderRadius } from '@app/components/styles/enum/BorderRadius.enum'
import { VKPageContainer } from '@app/components/VKPageContainer'
import { Spacing } from '@app/components/styles/enum/Spacing.enum'
import { TintColor } from '@app/components/styles/enum/TintColor.enum'
import { SharedStyle } from '@app/components/styles'

interface Props {
  navigation?: any
}

const CPInfoPage: React.FC<Props> = (props) => {
  // MENU items
  const menuItems: MenuItemData[] = [
    // {
    //   title: 'ความหมาย',
    //   href: 'Main',
    //   backgroundColor: TintColor.Red,
    // },
    {
      title: 'ปัจจัยเสี่ยงการเกิดโรค',
      href: 'CPCauses',
      backgroundColor: TintColor.Red,
      leftElement: <AntDesign name='exclamationcircle' size={20} color='#fff' />,
    },
    {
      title: 'อาการอื่นๆ ที่อาจพบร่วมด้วย',
      href: 'CPSymptoms',
      backgroundColor: TintColor.Red,
      leftElement: <AntDesign name='exclamationcircle' size={20} color='#fff' />,
    },
    {
      title: 'การแบ่งประเภท',
      href: 'CPCategories',
      backgroundColor: TintColor.Red,
      leftElement: <MaterialCommunityIcons name='format-list-bulleted-type' size={20} color='#fff' />,
    },
    {
      title: 'การวินิจฉัยโรค',
      href: 'CPDiagnostics',
      backgroundColor: TintColor.Red,
      leftElement: <MaterialCommunityIcons name='medical-bag' size={20} color='#fff' />,
    },
    {
      title: 'การรักษา',
      href: 'CPMedicalTreatments',
      backgroundColor: TintColor.Red,
      leftElement: <MaterialCommunityIcons name='medical-bag' size={20} color='#fff' />,
    },
    {
      title: 'กายอุปกรณ์',
      href: 'CPBodyEquipment',
      backgroundColor: TintColor.Red,
      leftElement: <MaterialCommunityIcons name='human' size={20} color='#fff' />,
    },
  ]
  
  return (
    <VKPageContainer>
      <Meaning />
      <View style={{ ...SharedStyle.menuListRight, width: 240 }}>
        {renderMenuItems(menuItems, props.navigation)}
      </View>
    </VKPageContainer>
  )
}

export default CPInfoPage;
