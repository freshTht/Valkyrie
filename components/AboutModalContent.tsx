import React from 'react'
import {
  View,
  Image,
  ScrollView,
  Text
} from 'react-native'

import {
  Divider
} from 'react-native-elements'

import { renderUnorderedList } from '@app/components/utils'
import { SharedStyle } from '@app/components/styles'
import { Spacing } from '@app/components/styles/enum/Spacing.enum'

interface Props {
  navigation?: any,
  onCloseButtonPress?: () => void,
}

const AboutModalContent: React.FC<Props> = (props) => {
  return (
    <>
      <Text style={SharedStyle.ModalHeader}>
        ชี้แจงจากคณะผู้จัดทำ
      </Text>

      <Divider style={{ width: '100%' }} />

      <ScrollView
        style={{ flex: 1, width: '100%' }}
        contentContainerStyle={{ padding: 16, gap: Spacing.XL }}
      >
        <Image 
          source={require('@app/assets/_brand/TU-Logo.png')}
          style={SharedStyle.TuLogo} />

        {renderUnorderedList([
          'แอพพลิเคชั่นนี้จัดทำขึ้นเพื่อให้ความรู้แก่ผู้ดูแลเด็กในเรื่องการออกกำลังกายในท่านั่งของเด็กภาวะสมองพิการ โดยมีเนื้อหาเกี่ยวกับการนั่ง การออกกำลังกายด้วยท่านั่งและการฝึกการใช้ชีวิตประจำวันในเด็กภาวะสมองพิการ',
        ])}

        <View>
          <Text style={SharedStyle.Subtitle}>
            คณะผู้จัดทำ
          </Text>
          { 
            renderUnorderedList([
              'อ.ดร.ปฤณภัก มหาทรัพย์',
              'นายวิริยะ เดชไชย',
              'นายเกริกพล ระกาศ',
              'นางสาวสุธิดา เชิดชูถิ่น',
            ]) 
          }
          <Text style={[SharedStyle.ContentBold, { marginTop: 16 }]}>
            ภาควิชากายภาพบำบัด คณะสหเวชศาสตร์ มหาวิทยาลัยธรรมศาสตร์
          </Text>
        </View>

        {renderUnorderedList([
          'งานวิจัยนี้ได้รับทุนสนับสนุนงานวิจัยเชิงนวัตกรรมประจำปีงบประมาณ 2562 จากคณะสหเวชศาสตร์ มหาวิทยาลัยธรรมศาสตร์',
          'ทางคณะผู้จัดทำหวังเป็นอย่างยิ่งว่าแอพพลิเคชั่นนี้จะเป็นประโยชน์ต่อผู้ใช้งาน',
        ])}
          
      </ScrollView>
    </>
  )
}

export default AboutModalContent
