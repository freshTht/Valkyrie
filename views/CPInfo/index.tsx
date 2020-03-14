/* eslint-disable */

import React, {Component,} from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native'

import {
  // Button,
  // Text,
  Card
} from 'react-native-elements'

import {
  AntDesign,
  MaterialCommunityIcons,
} from '@expo/vector-icons'

import { 
  // renderListItems, ListItemData
  renderMenuItems, MenuItemData
} from '@app/components/utils'

import { SharedStyle } from '@app/components/styles'

import VKHeader from '@app/components/VKHeader'
import Meaning from '@app/components/CPInfo/Meaning'
// import Causes from '@app/components/CPInfo/Causes'

interface Props {
  navigation?: any
}

const CPInfoPage: React.FC<Props> = (props) => {

  // STATE
  // let [balance, setBalance] = React.useState<number>();

  React.useEffect(() => {
    // componentDidMount

    const componentWillUnmount = () => {
      // do something..
    }
    return componentWillUnmount
  }, [])

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
    <View style={SharedStyle.Root}>

      <VKHeader 
        title='CP คืออะไร?'
        backgroundColor='#4FAFA1'
        navigation={ props.navigation }
      />
      
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 16 }}>
        <View style={{ flex: 1 }}>
          <Meaning />
          {/* <Causes /> */}
          {/* <Card containerStyle={LocalStyle.menuCard}> */}
          <View style={LocalStyle.menuListRight}>
            {
              renderMenuItems(menuItems, props.navigation)
            }
          </View>
          {/* </Card> */}
        </View>

      </ScrollView>

    </View>
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
    // paddingVertical: 16,
    flex: 1,
  },
  
  menuListRight: {
    alignSelf: 'flex-end',
    width: 240,
    marginTop: 20,
    marginBottom: 8,
  },
  // menuListFull: {
  //   alignSelf: 'flex-end',
  //   width: '100%',
  //   marginBottom: 8,
  // },

  menuCard: {
    padding: 0,
    borderRadius: 8,
  }
});

export default CPInfoPage
