import React from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  ImageSourcePropType,
  Image,
  Text,
} from 'react-native'

import StyledText from 'react-native-styled-text'
import { FontFamily, SharedStyle } from '@app/components/styles'
import { MenuItemData, VKMenuItem, VKMenuItemStyle } from '@app/components/VKMenuItem'
import { BorderRadius } from '../styles/enum/BorderRadius.enum'
import { Spacing } from '../styles/enum/Spacing.enum'

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

const renderOrderedList = (listItems: string[], listImages: ImageSourcePropType[] = [], hideOrders: boolean = false) => {
  const AVAILABLE_SPACE = Dimensions.get('window').width - (2*16) - (2*12)
  const IMG_WIDTH = AVAILABLE_SPACE * 0.8

  return (
    <View style={{ display: 'flex', flexDirection: 'column', rowGap: Spacing.M }}>
      {listItems.map((item, index) => (
        <View key={index}>
          <View style={LocalStyle.OrderedListRow}>
            {!hideOrders && (
              <Text style={SharedStyle.OrderedListNumber}>
                { index + 1 }
              </Text>
            )}
            <Text style={[ SharedStyle.Content, { flex: 1 }]}>
              { item }
            </Text>
          </View>
    
          {listImages[index] && (
            <Image source={listImages[index]} 
              style={{ marginLeft: 'auto', marginRight: 'auto', marginBottom: 32 }}
              width={IMG_WIDTH}
            />
          )}
        </View> 
      ))}
    </View>
  );
}
const renderUnorderedList = (listItems: string[], listImages: ImageSourcePropType[] = []) => {
  return renderOrderedList(listItems, listImages, true)
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
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: BorderRadius.M,
  },
})

export {
  renderMenuItems, MenuItemData,
  renderOrderedList,
  renderUnorderedList,
}