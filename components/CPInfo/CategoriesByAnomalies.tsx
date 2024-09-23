/* eslint-disable */
import React from 'react'
import {
  StyleSheet, 
  View,
  Dimensions,
  Image,
} from 'react-native'

import {
  Text,
} from 'react-native-elements'

import i18n from 'i18n-js'
import { renderOrderedList } from '@app/components/utils'
import { SharedStyle } from '@app/components/styles'

interface Props {
  // backgroundColor?: string,
  // title?: string,
  // navigation?: any,
}

const CategoriesByAnomalies: React.FC<Props> = (props) => {
  // STATE
  // let [balance, setBalance] = React.useState<number>();

  // PROPS
  // const TITLE = props.title ? props.title : ''

  React.useEffect(() => {
    // componentDidMount

    const componentWillUnmount = () => {
      // do something..
    }
    return componentWillUnmount
  }, [])

  const TITLE = i18n.t('cpcategory_anomalies_title')
  const LIST_ITEMS = i18n.t('cpcategory_anomalies')
  const IMG_WIDTH = Dimensions.get('window').width - (2*16) - (2*12)

  return (
    <View style={SharedStyle.InfoCard}>
      <Text style={SharedStyle.Title}>
        { TITLE }
      </Text>
      <View>
        {
          renderOrderedList(LIST_ITEMS)
        }
      </View>
      <Image source={require('@app/assets/CPInfo/Categories/plegia.png')} 
        width={IMG_WIDTH}
        style={{
          marginTop: IMG_WIDTH * 0.1,
          marginBottom: IMG_WIDTH * 0.1,
          width: IMG_WIDTH,
          height: IMG_WIDTH,
        }}
      />
    </View>
  )
}

const LocalStyle = StyleSheet.create({
  header: {
    width: '100%',
    height: 100
  },
});

export default CategoriesByAnomalies
