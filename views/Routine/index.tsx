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
import { renderMenuItems } from '@app/components/utils'
import Meaning from '@app/components/Routine/Meaning'
// const DefaultTouchableComponent = TouchableOpacity

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
  const menuItems = [
    // {
    //   title: 'คืออะไร?',
    //   // href: 'Main',
    //   backgroundColor: '#E16E5B',
    //   leftElement: <AntDesign name='exclamationcircle' size={20} color='#fff' />,
    // },
    {
      title: 'การนอน',
      href: 'Routine_Sleeping',
      backgroundColor: '#4FAFA1',
      leftElement: <MaterialCommunityIcons name='power-sleep' size={22} color='#fff' />,
    },
    {
      title: 'การอาบน้ำ',
      href: 'Routine_Showering',
      backgroundColor: '#4FAFA1',
      leftElement: <FontAwesome5 name='shower' size={22} color='#fff' />,
    },
    {
      title: 'การเข้าห้องน้ำ',
      href: 'Routine_Toileting',
      backgroundColor: '#4FAFA1',
      leftElement: <FontAwesome5 name='toilet-paper' size={20} color='#fff' />,
    },
    {
      title: 'การแต่งตัว',
      href: 'Routine_Dressing',
      backgroundColor: '#4FAFA1',
      leftElement: <MaterialCommunityIcons name='tshirt-crew' size={22} color='#fff' />,
    },
    {
      title: 'การรับประทานอาหาร',
      href: 'Routine_Eating',
      backgroundColor: '#4FAFA1',
      leftElement: <MaterialCommunityIcons name='food-fork-drink' size={22} color='#fff'/>,
    },
    {
      title: 'การอุ้ม',
      href: 'Routine_Carrying',
      backgroundColor: '#4FAFA1',
      leftElement: <FontAwesome5 name='child' size={22} color='#fff' style={{ width: 22 }}  />,
    },
    {
      title: 'การเล่น',
      href: 'Routine_Playing',
      backgroundColor: '#4FAFA1',
      leftElement: <MaterialIcons name='toys' size={22} color='#fff' />,
    },
    {
      title: 'ของเล่น',
      href: 'Routine_Toy',
      backgroundColor: '#E16E5B',
      leftElement: <MaterialCommunityIcons name='badminton' size={22} color='#fff' />,
    },
  ]

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
              renderMenuItems(menuItems, props.navigation)
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
