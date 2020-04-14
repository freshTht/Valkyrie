import React, { useEffect } from 'react'
import {
  StyleSheet,
  View,
  // TouchableOpacity,
  // Image,
  AsyncStorage,
  Alert,
} from 'react-native'

import {
  MaterialCommunityIcons,
} from '@expo/vector-icons'

import {
  Button, Card, CheckBox, Divider
} from 'react-native-elements'

import Modal from 'react-native-modal'

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

  return (
    <Card containerStyle={{ borderRadius: 8, padding: 0, alignItems: 'center' }}>
      <View style={{ padding: 16, paddingBottom: 8, backgroundColor: '#FDC055', borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
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
            แอพพลิเคชั่นนี้ จัดทำขึ้นเพื่อให้ความรู้แก่ผู้ดูแลเด็ก ในเรื่องการออกกำลังกายในท่านั่งของเด็กภาวะสมองพิการ
            โดยมีเนื้อหาเกี่ยวกับการนั่ง การออกกำลังกายด้วยท่านั่ง และการฝึกการใช้ชีวิตประจำวัน ในเด็กภาวะสมองพิการ
          </StyledText>
        </View>

        <View style={{ marginTop: 16 }}>
          <StyledText style={[ SharedStyle.Content, { marginBottom: 8, fontFamily: 'rsu-text_bold' }]}>
            คณะผู้จัดทำ
          </StyledText>
          { 
            renderUnorderedList([
              'นายวิริยะ เดชไชย',
              'นายเกริกพล ระกาศ',
              'นางสาวสุธิดา เชิดชูถิ่น',
            ]) 
          }
        </View>

        <View style={{ marginTop: 16 }}>
          <StyledText style={[ SharedStyle.Content, { marginBottom: 8, fontFamily: 'rsu-text_bold' }]}>
            อาจารย์ที่ปรึกษา
          </StyledText>
          { 
            renderUnorderedList([
              'อ.ดร.ปฤณภัก มหาทรัพย์',
            ]) 
          }
        </View>

        <StyledText style={[ SharedStyle.Content, { marginTop: 16} ]}>
          งานวิจัยนี้ได้รับทุนจาก ทุนสนับสนุนงานวิจัยเชิงนวัตกรรม
          ประจำปีงบประมาณ 2562 จากคณะสหเวชศาสตร์ 
          มหาวิทยาลัยธรรมศาสตร์
        </StyledText>

        <StyledText style={[ SharedStyle.Content, { marginTop: 16} ]}>
          ทางคณะผู้จัดทำหวังเป็นอยากยิ่งว่าแอพพลิเคชั่นนี้จะ
          เป็นประโยชน์ต่อผู้ใช้งาน 
        </StyledText>

      </ScrollView>

      <Divider />
      <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
        <CheckBox
          title={`ไม่ต้องแสดงข้อความนี้อีก`}
          titleProps={{ style: [ SharedStyle.Content, { marginLeft: 8 } ] }}
          checkedIcon={<MaterialCommunityIcons name='checkbox-marked' size={12}/>}
          uncheckedIcon={<MaterialCommunityIcons name='checkbox-blank-outline' size={12}/>}
          checked={dontShowOverlayAgain}
          onPress={() => setDontShowOverlayAgain(!dontShowOverlayAgain)}
          containerStyle={{ marginBottom: 8 }}
        />
        <Button 
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
        />
      </View>
    </Card>
  )
}

const LocalStyle = StyleSheet.create({
  // ...
});

export default FirstTimeMessage
