import React, { useEffect } from 'react'
import {
  View,
  StyleSheet,
  Platform,
  Alert,
  TouchableOpacity
} from 'react-native'

import {
  MaterialCommunityIcons,
} from '@expo/vector-icons'

import {
  Button, Card, CheckBox, Divider
} from 'react-native-elements'

import Image from 'react-native-scalable-image'

// import { SharedStyle } from '@app/components/styles'
import { renderUnorderedList } from '@app/components/utils'
import StyledText from 'react-native-styled-text'
import { SharedStyle } from '@app/components/styles'
import { ScrollView } from 'react-native-gesture-handler'

// ASYNC STORAGE
import _dontShowOverlay from '@app/utils/preferences/dontShowOverlay'

interface Props {
  navigation?: any,
  onCloseButtonPress?: () => void,
}

const FirstTimeMessage: React.FC<Props> = (props) => {

  // STATE
  // let [overlayVisible, setOverlayVisible] = React.useState<boolean>(false);
  let [dontShowOverlayAgain, setDontShowOverlayAgain] = React.useState<boolean>(false);

  React.useEffect(() => {
    // // componentDidMount
    setTimeout(async () => {
      const dontShowOverlayAgain = await _dontShowOverlay.load()
      setDontShowOverlayAgain(dontShowOverlayAgain)
      // alert(dontShowOverlayAgain)
    }, 100)

    const componentWillUnmount = () => {
      // do something..
    }
    return componentWillUnmount
  }, [])

  // EventListeners
  const closeButtonClicked = async () => {
    // setOverlayVisible(false)
    await _dontShowOverlay.save(dontShowOverlayAgain)

    // trigger the event
    if (props.onCloseButtonPress) {
      props.onCloseButtonPress()
    }
  }

  return (
    <View style={{ paddingVertical: 20, paddingHorizontal: 8 }}>
      <View style={LocalStyle.Dialog}>
        <View style={LocalStyle.DialogHeader}>
          <StyledText style={[ SharedStyle.Title, { textAlign: 'center' } ]}>
            ชี้แจงจากคณะผู้จัดทำ
          </StyledText>
        </View>

        <ScrollView 
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        >
          <View style={{ marginTop: 16 }}>
            <StyledText style={SharedStyle.Content}>
              แอพพลิเคชั่นนี้ จัดทำขึ้นเพื่อให้ความรู้แก่ผู้ดูแลเด็กในเรื่องการออกกำลังกายในท่านั่งของเด็กภาวะสมองพิการ 
              โดยมีเนื้อหาเกี่ยวกับการนั่ง การออกกำลังกายด้วยท่านั่งและการฝึกการใช้ชีวิตประจำวัน ในเด็กภาวะสมองพิการ
            </StyledText>
          </View>

          <View style={{ marginTop: 16 }}>
            <StyledText style={[ SharedStyle.Content, { marginBottom: 8, fontFamily: 'rsu-text_bold' }]}>
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

          <View style={{ marginTop: 16 }}>
            <StyledText style={[ SharedStyle.Content, { fontFamily: 'rsu-text_bold' }]}>
              ภาควิชากายภาพบำบัด คณะสหเวชศาสตร์ มหาวิทยาลัยธรรมศาสตร์
            </StyledText>
          </View>

          {/* <View style={{ marginTop: 16 }}>
            <StyledText style={[ SharedStyle.Content, { marginBottom: 8, fontFamily: 'rsu-text_bold', textAlign: 'center' }]}>
              อาจารย์ที่ปรึกษา
            </StyledText>
            { 
              renderUnorderedList([
                'อ.ดร.ปฤณภัก มหาทรัพย์',
              ]) 
            }
          </View> */}

          <StyledText style={[ SharedStyle.Content, { marginTop: 16} ]}>
            งานวิจัยนี้ได้รับทุนสนับสนุนงานวิจัยเชิงนวัตกรรมประจำปีงบประมาณ 2562 จากคณะสหเวชศาสตร์ มหาวิทยาลัยธรรมศาสตร์
          </StyledText>

          <StyledText style={[ SharedStyle.Content, { marginTop: 16} ]}>
            ทางคณะผู้จัดทำหวังเป็นอย่างยิ่งว่าแอพพลิเคชั่นนี้จะเป็นประโยชน์ต่อผู้ใช้งาน 
          </StyledText>

          <Image 
            source={require('@app/assets/_brand/TU-Logo.png')} 
            width={100} 
            style={{ alignSelf: 'center', marginTop: 32, marginBottom: 16 }} />

        </ScrollView>

        <Divider style={{ width: '100%' }} />

        <View style={{ paddingHorizontal: 8, paddingVertical: 8 }}>
          <CheckBox
            title={`ไม่ต้องแสดงข้อความนี้อีก`}
            titleProps={{ style: [ SharedStyle.Content, { marginLeft: 8 } ] }}
            checkedIcon={<MaterialCommunityIcons name='checkbox-marked' size={12}/>}
            uncheckedIcon={<MaterialCommunityIcons name='checkbox-blank-outline' size={12}/>}
            checked={dontShowOverlayAgain}
            onPress={() => setDontShowOverlayAgain(!dontShowOverlayAgain)}
            containerStyle={{ paddingVertical: 4 }}
          />
          {/* <Button 
            buttonStyle={SharedStyle.ButtonOrange}
            titleStyle={SharedStyle.ButtonText}
            onPress={async () => {
              // setOverlayVisible(false)
              await _dontShowOverlay.save(dontShowOverlayAgain)

              // trigger the event
              if (props.onCloseButtonPress) {
                props.onCloseButtonPress()
              }
            }}
            title='ปิด'
          /> */}
        </View>
      </View>

      {/* dialog close button */}
      <View 
          style={{ 
            position: 'absolute', width: '100%', flexDirection: 'row', justifyContent: 'flex-end',
            right: -12
          }}
        >
          <TouchableOpacity 
            style={{ width: 48, height: 48, alignItems: 'center', justifyContent: 'center' }}
            onPress={closeButtonClicked}
            activeOpacity={0.5}
          >
            <View 
              style={{ 
                backgroundColor: '#000000ab',
                height: 24, width: 24, borderRadius: 12,
                alignItems: 'center', justifyContent: 'center',
                borderColor: 'white', borderWidth: 1,
                shadowColor: '#000', shadowRadius: 4, shadowOffset: { height: 3, width: 0 }, shadowOpacity: 0.75,
              }}>

              {/* add some margin so it looks center (only on) */}
              <MaterialCommunityIcons name='close' size={16} color={`#fff`} 
                style={ Platform.OS === "ios" ? { marginLeft: 2, marginTop: 1 } : {} } 
              />

            </View>
          </TouchableOpacity>
        </View>
    </View>
  )
}

const LocalStyle = StyleSheet.create({
  Dialog: { 
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    padding: 0,
    backgroundColor: '#fff',
    height: '100%',
    alignItems: 'center',
  },
  DialogHeader: { 
    padding: 16,
    paddingBottom: 8,
    width: '100%',
    backgroundColor: '#FDC055',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

export default FirstTimeMessage
