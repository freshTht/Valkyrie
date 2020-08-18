import React, { useEffect } from 'react'
import {
  View,
  StyleSheet,
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
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

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
    <Card containerStyle={{ borderRadius: 8, padding: 0, alignItems: 'center' }}>
      <View style={{ padding: 16, paddingBottom: 8, backgroundColor: '#FDC055', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
        <StyledText style={[ SharedStyle.Title, { textAlign: 'center' } ]}>
          ชี้แจงจากคณะผู้จัดทำ
        </StyledText>
      </View>

      {/* dialog close button */}
      <View 
        style={{ 
          position: 'absolute', width: '100%', flexDirection: 'row', justifyContent: 'flex-end', 
          top: -16, right: -16
        }}
      >
        <TouchableOpacity 
          style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center' }}
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
            <MaterialCommunityIcons name='close' size={16} color={`#fff`} style={{ marginLeft: 2, marginTop: 1 }} />
          </View>
        </TouchableOpacity>
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
            คณะสหเวชศาสตร์ สาขาวิชากายภาพบำบัด มหาวิทยาลัยธรรมศาสตร์
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
          งานวิจัยนี้ได้รับทุนสนับสนุนงานวิจัยเชิงนวัตกรรมประจำปี
          จากคณะสหเวชศาสตร์ มหาวิทยาลัยธรรมศาสตร์
        </StyledText>

        <StyledText style={[ SharedStyle.Content, { marginTop: 16} ]}>
          ทางคณะผู้จัดทำหวังเป็นอย่างยิ่งว่าแอพพลิเคชั่นนี้จะเป็นประโยชน์ต่อผู้ใช้งาน 
        </StyledText>

        <Image 
          source={require('@app/assets/_brand/TU-Logo.png')} 
          width={100} 
          style={{ alignSelf: 'center', marginTop: 32, marginBottom: 16 }} />

      </ScrollView>

      <Divider />

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
    </Card>
  )
}

const LocalStyle = StyleSheet.create({
  // ...
});

export default FirstTimeMessage
