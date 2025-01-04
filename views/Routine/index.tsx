/* eslint-disable */
import React from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native'

import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'

import { renderMenuItems, MenuItemData } from '@app/components/utils'
import Meaning from '@app/components/Routine/Meaning'

import i18n from 'i18n-js'
import VKRootView from '@app/components/VKRootView'
import { VKPageContainer } from '@app/components/VKPageContainer'

interface Props {
  navigation?: any
}

const RoutinePage: React.FC<Props> = (props) => {
  // MENU items
  const MENU_ITEMS: MenuItemData[] = []
  const RAW_DATA = i18n.t('routine_items')
  const ASSETS = [
    {
      icon: <MaterialCommunityIcons name='power-sleep' size={22} color='#fff' />,
      images: [
        {
          main: require('@app/assets/colored/ADL/sleeping/33หงายss.png'),
        },
        {
          main: require('@app/assets/colored/ADL/sleeping/34ตะแคงss.png'),
        },
      ],
    },
    {
      icon: <FontAwesome5 name='shower' size={22} color='#fff' />,
      images: [
        {
          main: require('@app/assets/colored/ADL/bathing/35นอนคว่ำอาบ.png'),
        },
        {
          main: require('@app/assets/colored/ADL/bathing/36นั่งอาบเองในกะละมัง.png'),
        },
        {
          main: require('@app/assets/colored/ADL/bathing/37แม่อาบนั่งไม่ดี.png'),
        },
        {
          main: [
            require('@app/assets/colored/ADL/bathing/อาบเองนั่งได้.png'),
            require('@app/assets/colored/ADL/bathing/38แม่อาบนั่งได้.png'),
          ],
        },
        {
          main: require('@app/assets/colored/ADL/bathing/39ตัวเกร็งอาบน้ำ.png'),
        },
      ],
    },
    {
      icon: <FontAwesome5 name='toilet-paper' size={20} color='#fff' />,
      images: [
        {
          main: require('@app/assets/colored/ADL/toileting/40นั่งตักแม่ขี้.png'),
        },
        {
          main: require('@app/assets/colored/ADL/toileting/41นั่งขี้เอง.png'),
        },
        {
          main: require('@app/assets/colored/ADL/toileting/42นั่งยองขี้.gif'),
        },
      ],
    },
    {
      icon: <MaterialCommunityIcons name='tshirt-crew' size={22} color='#fff' />,
      images: [
        // TODO: ADD IMAGES
        {
          orderedList: [
            require('@app/assets/colored/ADL/Dressing/43นอนแต่ง(ขยับ)1.gif'),
            require('@app/assets/colored/ADL/Dressing/43นอนแต่ง(ขยับ)2.gif'),
            require('@app/assets/colored/ADL/Dressing/43นอนแต่ง(ขยับ)3.gif'),
          ],
        },
        {
          // main: require('@app/assets/colored/ADL/Dressing/4Xนอนหงายใส่เสื้อคอกลม.png'),
          main: require('@app/assets/colored/ADL/Dressing/4Xนอนหงายใส่เสื้อคอกลม.gif'),
        },
        {
          main: require('@app/assets/colored/ADL/Dressing/44นอนคว่ำแต่งตัว(ขยับ).gif'),
        },
        {
          orderedList: [
            require('@app/assets/colored/ADL/Dressing/45แต่งเอง1.png'),
            require('@app/assets/colored/ADL/Dressing/46ใส่เอง2.png'),
            require('@app/assets/colored/ADL/Dressing/46ใส่เอง3.png'),
            require('@app/assets/colored/ADL/Dressing/47แต่งเอง4.png'),
          ],
        },
      ],
    },
    {
      icon: <MaterialCommunityIcons name='food-fork-drink' size={22} color='#fff'/>,
      images: [
        {
          main: require('@app/assets/colored/ADL/feeding/48ดูดนม.png'),
        },
        {
          main: require('@app/assets/colored/ADL/feeding/49นั่งป้อน.png'),
          // orderedList: [
          //   require('@app/assets/colored/ADL/feeding/50มือกดปาก.png'),
          //   require('@app/assets/colored/ADL/feeding/49นั่งป้อน.png'),
          //   require('@app/assets/colored/ADL/feeding/51ก้มนิดนึงนะ.png'),
          // ],
        },
        {
          orderedList: [
            require('@app/assets/colored/ADL/feeding/50มือกดปาก.png'),
            require('@app/assets/colored/ADL/feeding/51ก้มนิดนึงนะ.png'),
          ],
        },
        {
          main: [
            require('@app/assets/colored/ADL/feeding/53กินน้ำ-1.png'),
            require('@app/assets/colored/ADL/feeding/53กินน้ำ-2.png'),
          ],
        },
        {
          main: require('@app/assets/colored/ADL/feeding/54ด้ามใหญ่.png'),
        },
      ],
    },
    {
      icon: <FontAwesome5 name='child' size={22} color='#fff' style={{ width: 22 }}  />,
      cautionImage: require('@app/assets/colored/ADL/carrying/55ท่าอุ้ม.png'),
      images: [
        {
          main: [
            require('@app/assets/colored/ADL/carrying/56แม่อุ้ม.png'),
            require('@app/assets/colored/ADL/carrying/57เด็กบิน.png'),
          ],
          // main: require('@app/assets/colored/ADL/carrying/56-57-combined.png'),
        },
        {
          main: require('@app/assets/colored/ADL/carrying/58แม่อุ้ม.png'),
        },
      ],
    },
    {
      icon: <MaterialIcons name='toys' size={22} color='#fff' />,
      images: [
        {
          main: require('@app/assets/colored/ADL/playing/คว่ำไปหงาย.gif'),
        },
        {
          main: require('@app/assets/colored/ADL/playing/พลิกคว่ำ.gif'),
        },
        {
          main: require('@app/assets/colored/ADL/playing/60ตั้งคลานขยับ.gif'),
        },
        {
          main: require('@app/assets/colored/ADL/playing/61นอนไปนั่ง(ขยับ).gif'),
        },
      ],
    },
    {
      icon: <MaterialCommunityIcons name='badminton' size={22} color='#fff' />,
      images: [
        {
          main: require('@app/assets/colored/ADL/playing/62นั่งไปยืน(ขยับ).gif'),
        },
        {
          main: require('@app/assets/colored/ADL/playing/63เดิน(ขยับ).gif'),
        },
        {
          main: require('@app/assets/colored/ADL/playing/64ลูกบอล.png'),
        },
        {
          main: require('@app/assets/colored/ADL/playing/65นอนคว่ำเล่น.png'),
          // main: require('@app/assets/Routine/toy2.png'),
        },
        {
          main: require('@app/assets/colored/ADL/playing/66คว่ำ2.png'),
          // main: require('@app/assets/Routine/toy3.png'),
        },
        {
          main: require('@app/assets/colored/ADL/playing/67คว่ำบนหมอน.png'),
          // main: require('@app/assets/Routine/toy4.png'),
        },
        {
          main: require('@app/assets/colored/ADL/playing/68ตะแคงเล่น.png'),
          // main: require('@app/assets/Routine/toy5.png'),
        },
        {
          main: require('@app/assets/colored/ADL/playing/69นั่งเล่น.png'),
          // main: require('@app/assets/Routine/toy6.png'),
        },
        {
          main: require('@app/assets/colored/ADL/playing/70ยืนเข่าเล่น.png'),
          // main: require('@app/assets/Routine/toy7.png'),
        },
      ],
    },
  ]
  for (var i = 0; i < RAW_DATA.length; i++) {
    const ITEM = RAW_DATA[i] as any;
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
    <VKPageContainer>
      <Meaning />
      <View style={LocalStyle.menuListRight}>
        {
          renderMenuItems(MENU_ITEMS, props.navigation, 'right')
        }
      </View>
    </VKPageContainer>
  )
}

const LocalStyle = StyleSheet.create({
  menuListRight: {
    flex: 1,
    alignSelf: 'flex-end',
    width: 224,
    marginTop: 20,
    marginBottom: 8,
  },
});

export default RoutinePage
