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

interface Props {
  navigation?: any
}

const CPInfoPage: React.FC<Props> = (props) => {
  // MENU items
  const menuItems: MenuItemData[] = [
    // {
    //   title: 'ความหมาย',
    //   href: 'Main',
    //   backgroundColor: '#E16E5B',
    // },
    {
      title: 'ปัจจัยเสี่ยงการเกิดโรค',
      href: 'CPCauses',
      backgroundColor: '#E16E5B',
      leftElement: <AntDesign name='exclamationcircle' size={20} color='#fff' />,
    },
    {
      title: 'อาการอื่นๆ ที่อาจพบร่วมด้วย',
      href: 'CPSymptoms',
      backgroundColor: '#E16E5B',
      leftElement: <AntDesign name='exclamationcircle' size={20} color='#fff' />,
    },
    {
      title: 'การแบ่งประเภท',
      href: 'CPCategories',
      backgroundColor: '#E16E5B',
      leftElement: <MaterialCommunityIcons name='format-list-bulleted-type' size={20} color='#fff' />,
    },
    {
      title: 'การวินิจฉัยโรค',
      href: 'CPDiagnostics',
      backgroundColor: '#E16E5B',
      leftElement: <MaterialCommunityIcons name='medical-bag' size={20} color='#fff' />,
    },
    {
      title: 'การรักษา',
      href: 'CPMedicalTreatments',
      backgroundColor: '#E16E5B',
      leftElement: <MaterialCommunityIcons name='medical-bag' size={20} color='#fff' />,
    },
    {
      title: 'กายอุปกรณ์',
      href: 'CPBodyEquipment',
      backgroundColor: '#E16E5B',
      leftElement: <MaterialCommunityIcons name='human' size={20} color='#fff' />,
    },
  ]
  
  return (
    <VKPageContainer>
      <Meaning />
      <View style={LocalStyle.menuListRight}>
        {renderMenuItems(menuItems, props.navigation)}
      </View>
    </VKPageContainer>
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
    flex: 1,
  },
  
  menuListRight: {
    alignSelf: 'flex-end',
    width: 240,
    marginTop: 20,
    marginBottom: 8,
    marginRight: -Spacing.L,
  },

  menuCard: {
    padding: 0,
    borderRadius: BorderRadius.S,
  }
});

export default CPInfoPage
