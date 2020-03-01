/* eslint-disable */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

// import {
//   Button,
//   Text
// } from 'react-native-elements'

import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'

import { SharedStyle } from '@app/components/styles'

import VKHeader from '@app/components/VKHeader'
import { renderMenuItems, MenuItemData } from '@app/components/utils'
import Meaning from '@app/components/Routine/Meaning'
// const DefaultTouchableComponent = TouchableOpacity

import i18n from 'i18n-js'

interface Props {
  navigation?: any
}

const RoutinePage: React.FC<Props> = (props) => {

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
  const MENU_ITEMS: MenuItemData[] = []
  const RAW_DATA = i18n.t('routine_items')
  const ASSETS = [
    {
      icon: <MaterialCommunityIcons name='power-sleep' size={22} color='#fff' />,
      images: [
        {
          main: require('@app/assets/Routine/sleeping1.png'),
        },
        {
          main: require('@app/assets/Routine/sleeping2.png'),
        },
      ],
    },
    {
      icon: <FontAwesome5 name='shower' size={22} color='#fff' />,
      images: [
        {
          main: require('@app/assets/Routine/bathing1.png'),
        },
        {
          main: require('@app/assets/Routine/bathing2.png'),
        },
        {
          main: require('@app/assets/Routine/bathing3.png'),
        },
        {
          main: require('@app/assets/Routine/bathing4.png'),
        },
        {
          main: require('@app/assets/Routine/bathing5.png'),
        },
      ],
    },
    {
      icon: <FontAwesome5 name='toilet-paper' size={20} color='#fff' />,
      images: [
        {
          main: require('@app/assets/Routine/toilet1.png'),
        },
        {
          main: require('@app/assets/Routine/toilet2.png'),
        },
        {
          main: require('@app/assets/Routine/toilet3.png'),
        },
      ],
    },
    {
      icon: <MaterialCommunityIcons name='tshirt-crew' size={22} color='#fff' />,
      images: [
        // TODO: ADD IMAGES
        {
          orderedList: [
            require('@app/assets/Routine/clothing1_1.png'),
            require('@app/assets/Routine/clothing1_2.png'),
            require('@app/assets/Routine/clothing1_3.png'),
          ],
        },
        {
          main: require('@app/assets/Routine/clothing2.png'),
        },
        {
          orderedList: [
            require('@app/assets/Routine/clothing3_1.png'),
            require('@app/assets/Routine/clothing3_2.png'),
            require('@app/assets/Routine/clothing3_3.png'),
            require('@app/assets/Routine/clothing3_4.png'),
          ],
        },
      ],
    },
    {
      icon: <MaterialCommunityIcons name='food-fork-drink' size={22} color='#fff'/>,
      images: [
        {
          main: require('@app/assets/Routine/feeding1.png'),
        },
        {
          main: require('@app/assets/Routine/feeding2.png'),
        },
        {
          main: require('@app/assets/Routine/feeding3.png'),
        },
        {
          main: require('@app/assets/Routine/feeding4.png'),
        },
      ],
    },
    {
      icon: <FontAwesome5 name='child' size={22} color='#fff' style={{ width: 22 }}  />,
      cautionImage: require('@app/assets/Routine/carrying1.png'),
      images: [
        {
          main: require('@app/assets/Routine/carrying1.png'),
        },
        {
          main: require('@app/assets/Routine/carrying2.png'),
        },
        {
          main: require('@app/assets/Routine/carrying3.png'),
        },
      ],
    },
    {
      icon: <MaterialIcons name='toys' size={22} color='#fff' />,
      images: [
        {
          main: require('@app/assets/Routine/playing1.png'),
        },
        {
          main: require('@app/assets/Routine/playing1.png'),
        },
        {
          main: require('@app/assets/Routine/playing2.png'),
        },
        {
          main: require('@app/assets/Routine/playing3.png'),
        },
        {
          main: require('@app/assets/Routine/playing4.png'),
        },
        {
          main: require('@app/assets/Routine/playing5.png'),
        },
      ],
    },
    {
      icon: <MaterialCommunityIcons name='badminton' size={22} color='#fff' />,
      images: [
        {
          main: require('@app/assets/Routine/toy1.png'),
        },
        {
          main: require('@app/assets/Routine/toy2.png'),
        },
        {
          main: require('@app/assets/Routine/toy3.png'),
        },
        {
          main: require('@app/assets/Routine/toy4.png'),
        },
        {
          main: require('@app/assets/Routine/toy5.png'),
        },
        {
          main: require('@app/assets/Routine/toy6.png'),
        },
        {
          main: require('@app/assets/Routine/toy7.png'),
        },
      ],
    },
  ]
  for (var i = 0; i < RAW_DATA.length; i++) {
    const ITEM = RAW_DATA[i]
    MENU_ITEMS.push({
      title: ITEM.title,
      backgroundColor: ITEM.backgroundColor,
      href: 'RoutineInfo',
      leftElement: ASSETS[i].icon,
      hrefParams: {
        INDEX: i,
        TINT_COLOR: ITEM.backgroundColor,
        IMAGES: ASSETS[i].images,
        CAUTION_IMAGE: ASSETS[i].cautionImage,
      }
    })
  }

  return (
    <View style={SharedStyle.Root}>

      <VKHeader 
        title='กิจวัตรประจำวัน'
        backgroundColor='#E16E5B'
        navigation={ props.navigation }
      />
      
      <ScrollView style={{ flex: 1 }} contentContainerStyle={LocalStyle.mainMenu}>

        <View style={{ flex: 1 }}>
          <Meaning />
          <View style={LocalStyle.menuListRight}>
            {
              renderMenuItems(MENU_ITEMS, props.navigation)
            }
          </View>
        </View>

      </ScrollView>

    </View>
  )
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

export default RoutinePage
