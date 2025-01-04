import React from 'react'
import {
  View,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import {
  MaterialCommunityIcons,
} from '@expo/vector-icons'

import {
  CheckBox, Divider
} from 'react-native-elements'

// import { SharedStyle } from '@app/components/styles'
import { renderUnorderedList } from '@app/components/utils'
import StyledText from 'react-native-styled-text'
import { FontFamily, SharedStyle } from '@app/components/styles'
// import { ScrollView } from 'react-native-gesture-handler'

// ASYNC STORAGE
import _dontShowOverlay from '@app/utils/preferences/dontShowOverlay'
import { BorderRadius } from './styles/enum/BorderRadius.enum'

interface Props {
  navigation?: any,
  onCloseButtonPress?: () => void,
}

const FirstTimeMessage: React.FC<Props> = (props) => {

  // // STATE
  // // let [overlayVisible, setOverlayVisible] = React.useState<boolean>(false);
  // let [dontShowOverlayAgain, setDontShowOverlayAgain] = React.useState<boolean>(false);

  // React.useEffect(() => {
  //   // // componentDidMount
  //   setTimeout(async () => {
  //     const dontShowOverlayAgain = await _dontShowOverlay.load()
  //     setDontShowOverlayAgain(dontShowOverlayAgain)
  //     // alert(dontShowOverlayAgain)
  //   }, 100)

  //   const componentWillUnmount = () => {
  //     // do something..
  //   }
  //   return componentWillUnmount
  // }, [])

  // EventListeners
  const closeButtonClicked = async () => {
    // // setOverlayVisible(false)
    // await _dontShowOverlay.save(dontShowOverlayAgain)

    // trigger the event
    if (props.onCloseButtonPress) {
      props.onCloseButtonPress()
    }
  }

  return (
    <>
      <StyledText style={SharedStyle.ModalHeader}>
        ชี้แจงจากคณะผู้จัดทำ
      </StyledText>

      <ScrollView style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 16, paddingVertical: 16 }}>
          <View style={LocalStyle.ModalItem}>
            <StyledText style={SharedStyle.Content}>
              แอพพลิเคชั่นนี้ จัดทำขึ้นเพื่อให้ความรู้แก่ผู้ดูแลเด็กในเรื่องการออกกำลังกายในท่านั่งของเด็กภาวะสมองพิการ 
              โดยมีเนื้อหาเกี่ยวกับการนั่ง การออกกำลังกายด้วยท่านั่งและการฝึกการใช้ชีวิตประจำวัน ในเด็กภาวะสมองพิการ
            </StyledText>
          </View>

          <View style={{ marginTop: 16 }}>
            <StyledText style={[ SharedStyle.Content, { marginBottom: 8, fontFamily: FontFamily.DefaultBold }]}>
              คณะผู้จัดทำ
            </StyledText>
            { 
              renderUnorderedList([
                'อ.ดร.ปฤณภัก มหาทรัพย์',
                'นายวิริยะ เดชไชย',
                'นายเกริกพล ระกาศ',
                'นางสาวสุธิดา เชิดชูถิ่น',
              ]) 
            }
          </View>

          {/* <View style={{ marginTop: 16 }}> */}
            <StyledText style={SharedStyle.ContentBold}>
              ภาควิชากายภาพบำบัด คณะสหเวชศาสตร์ มหาวิทยาลัยธรรมศาสตร์
            </StyledText>
          {/* </View> */}

          <StyledText style={[ SharedStyle.Content, { marginTop: 16} ]}>
            งานวิจัยนี้ได้รับทุนสนับสนุนงานวิจัยเชิงนวัตกรรมประจำปีงบประมาณ 2562 จากคณะสหเวชศาสตร์ มหาวิทยาลัยธรรมศาสตร์
          </StyledText>

          <StyledText style={[ SharedStyle.Content, { marginTop: 16} ]}>
            ทางคณะผู้จัดทำหวังเป็นอย่างยิ่งว่าแอพพลิเคชั่นนี้จะเป็นประโยชน์ต่อผู้ใช้งาน 
          </StyledText>

          <Image 
            source={require('@app/assets/_brand/TU-Logo.png')}
            style={SharedStyle.TuLogo} />
            
        </View>
      </ScrollView>

      <Divider style={{ width: '100%' }} />
    </>
  )
}

const LocalStyle = StyleSheet.create({
  ModalItem: {
    backgroundColor: '#ffffff',
    borderRadius: BorderRadius.M,
    // padding: 12,
  },
});

export default FirstTimeMessage
