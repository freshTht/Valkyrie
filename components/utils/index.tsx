import React from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  ImageSourcePropType,
  Image,
} from 'react-native'

import {
  ListItem,
} from 'react-native-elements'

import StyledText from 'react-native-styled-text'
import { SharedStyle } from '@app/components/styles'
import { MenuItemData, VKMenuItem, VKMenuItemStyle } from '@app/components/VKMenuItem'

//
// MENU ITEMS
//

const renderMenuItems = (menuItems: MenuItemData[], navigation: any, style: VKMenuItemStyle = 'right') => {
  return menuItems.map((item, index) => (
    <VKMenuItem
      key={index}
      item={item}
      style={style}
      navigation={navigation}
    />
  ));
};
    
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
          style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: 32 }}
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
    color: '#ffffff',
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