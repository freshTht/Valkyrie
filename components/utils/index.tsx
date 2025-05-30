import React from 'react'
import {
  View,
  ImageSourcePropType,
  Text,
  useWindowDimensions,
} from 'react-native'

import { SharedStyle } from '@app/components/styles'
import { MenuItemData, VKMenuItem, VKMenuItemStyle } from '@app/components/VKMenuItem'
import { Image } from 'expo-image'

//
// MENU ITEMS
//
export const renderMenuItems = (menuItems: MenuItemData[], navigation: any, style: VKMenuItemStyle = 'right') => {
  return menuItems.map((item, index) => (
    <VKMenuItem
      key={index}
      item={item}
      style={style}
      navigation={navigation}
    />
  ));
};

export const renderOrderedList = (listItems: string[], listImages: ImageSourcePropType[] = [], hideOrders: boolean = false) => {
  const dimension = useWindowDimensions();
  const AVAILABLE_SPACE = dimension.width - (2*16) - (2*12);
  const IMG_WIDTH = AVAILABLE_SPACE * 0.8;

  return (
    <View style={SharedStyle.OrderedList}>
      {listItems.map((item, index) => (
        <React.Fragment key={index}>
          <View style={SharedStyle.OrderedListRow}>
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
              autoplay={true}
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: 32,
                width: IMG_WIDTH,
                height: IMG_WIDTH,
              }}
            />
          )}
        </React.Fragment> 
      ))}
    </View>
  );
};

export const renderUnorderedList = (listItems: string[], listImages: ImageSourcePropType[] = []) => {
  return renderOrderedList(listItems, listImages, true);
};
