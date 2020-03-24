/* eslint-disable */

import React, {Component,} from 'react'
import {
  StyleSheet,
  View, 
  // TouchableOpacity,
  // Image,
} from 'react-native'

import {
  Header,
} from 'react-native-elements'

// import { SharedStyle } from '@app/components/styles'
import { renderMenuItems } from '@app/components/utils'
import VKRootView from '@app/components/VKRootView'

interface Props {
  navigation?: any
}

const MainPage: React.FC<Props> = (props) => {
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
  const menuList1 = [
    {
      title: 'CP คืออะไร ?',
      href: 'CPInfo',
      backgroundColor: '#4FAFA1',
      // leftElement: <AntDesign name='exclamationcircle' size={20} color='#fff' />,
    },
    {
      title: 'ท่านั่งที่ถูกต้อง',
      href: 'SittingPosition',
      backgroundColor: '#FDC055',
    },
    {
      title: 'ท่านั่งที่ผิดปกติ',
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
      title: 'การออกกำลัง',
      href: 'Exercise',
      backgroundColor: '#FDC055',
    },
  ]
  // const menuList3 = [
  //   {
  //     title: 'วิดีโอการออกกำลังกาย',
  //     href: 'ExerciseTutorial',
  //     backgroundColor: '#E16E5B',
  //   },
  // ]

  return (
    <VKRootView>
      <Header
        backgroundColor='#336099'
        centerComponent={{ text: 'APP NAME', style: { color: '#fff' } }}
        barStyle="light-content"
        statusBarProps={{ barStyle: 'light-content', backgroundColor: '#00000033', translucent: true, animated: true }}
      />
      
      <View style={LocalStyle.mainMenu}>
        <View style={LocalStyle.menuListLeft}>
          {
            renderMenuItems(menuList1, props.navigation, 'left')
          }
        </View>

        <View style={{ height: 20 }}/>

        <View style={LocalStyle.menuListRight}>
          {
            renderMenuItems(menuList2, props.navigation, 'right')
          }
        </View>

        {/* <View style={LocalStyle.menuList3}>
          {
            renderMenuItems(menuList3, props.navigation, 'left')
          }
        </View> */}

      </View>

      {/* <View style={LocalStyle.bottomBar}>
        <Button 
          style={LocalStyle.menuButton}  
          title='DETECT' 
          onPress={() => alert('coming soon..') } />
      </View> */}

    </VKRootView>
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
