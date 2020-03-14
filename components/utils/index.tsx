import React, {Component} from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  ImageSourcePropType,
} from 'react-native'

import {
  ListItem,
} from 'react-native-elements'

// import TouchableScale from 'react-native-touchable-scale'
import StyledText from 'react-native-styled-text'
import { SharedStyle } from '@app/components/styles'
import Image from 'react-native-scalable-image'

//
// MENU ITEMS
//
interface MenuItemData {
  title?: string,
  href?: string,
  hrefParams?: any,
  backgroundColor?: string,
  color?: string,
  leftElement?: React.ReactElement,
}
const renderMenuItems = (menuItems: MenuItemData[], navigation: any, style: string = 'right') => {
  let menuButtonStyle: any
  switch(style) {
    case 'left':
      menuButtonStyle = LocalStyle.menuButtonLeft
      break
    case 'right':
      menuButtonStyle = LocalStyle.menuButtonRight
      break
  }
  return menuItems.map((item, index) => (
    // <Button 
    //   key={index}
    //   containerStyle={LocalStyle.menuButtonContainer} 
    //   title={item.title} 
    //   icon={{ name: 'human' }}
    //   onPress={() => navigation.push(item.href) }
    //   buttonStyle={[ LocalStyle.menuButton, { backgroundColor: item.backgroundColor }]}
    //   TouchableComponent={TouchableOpacity}
    //   />
    <ListItem
      key={index}
      leftElement={item.leftElement}
      title={item.title}
      onPress={() => navigation.navigate(item.href, item.hrefParams) }
      containerStyle={[ LocalStyle.menuButtonContainer, menuButtonStyle, { backgroundColor: item.backgroundColor, paddingLeft: 20 }]}
      contentContainerStyle={{ marginLeft: 0 }}
      titleStyle={{ color: item.color ? item.color:'#fff', paddingLeft: 0, fontFamily: 'rsu-text_bold', fontSize: 28, marginBottom: -4 }}
      Component={TouchableOpacity}
      activeOpacity={0.5}
    />
  ))
}
    
//
// LIST ITEMS
//
interface ListItemData {
  title?: string,
  href?: string,
  backgroundColor?: string,
  leftElement?: React.ReactElement,
}
const renderListItems = (menuItems: ListItemData[], navigation: any) => {
  return menuItems.map((item, index) => (
    <ListItem
      key={index}
      leftElement={item.leftElement}
      title={item.title}
      onPress={() => navigation.push(item.href) }
      containerStyle={{ backgroundColor: item.backgroundColor }}
      Component={TouchableOpacity}
      activeOpacity={0.5}
      
      bottomDivider
    />
      // activeScale={0.95}
      // friction={10}
      // tension={200}
    // subtitle={l.subtitle}
  ))
}

const renderOrderedList = (listItems: string[], listImages: ImageSourcePropType[] = [], hideOrders: boolean = false) => {
  const AVAILABLE_SPACE = Dimensions.get('window').width - (2*16) - (2*12)
  const IMG_WIDTH = AVAILABLE_SPACE * 0.8

  return listItems.map((item, index) => (
    <View key={index}>
      <View style={LocalStyle.OrderedListRow}>
        {
          hideOrders === false ?
          <StyledText style={[ SharedStyle.Content, { marginRight: 8, fontFamily: 'rsu-text_bold' }]}>
            { `<b>${index+1}.</b>` }
          </StyledText>
          : <></>
        }
        <StyledText style={[ SharedStyle.Content, { flex: 1 }]}>
          { item }
        </StyledText>
      </View>

      {
        listImages[index] ? 
        <Image source={listImages[index]} 
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
          width={IMG_WIDTH}
        />
        : <></>
      }
    </View> 
  ))
}
const renderUnorderedList = (listItems: string[], listImages: ImageSourcePropType[] = []) => {
  return renderOrderedList(listItems, listImages, true)
  // return listItems.map((item, index) => (
  //   <View style={LocalStyle.OrderedListRow}>
  //     <StyledText style={[ SharedStyle.Content, { flex: 1 }]}>
  //       { item }
  //     </StyledText>
  //   </View>
  // ))
}

const LocalStyle = StyleSheet.create({
  menuButtonContainer: {
    marginBottom: 12,
  },
  menuButtonLeft: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 32,
    borderBottomRightRadius: 32,
  },
  menuButtonRight: {
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  OrderedListRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
})

export {
  renderMenuItems, MenuItemData,
  renderListItems, ListItemData,
  renderOrderedList,
  renderUnorderedList,
}