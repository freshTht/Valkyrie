/* eslint-disable */
import React, {Component,} from 'react'
import {
  StyleSheet, TouchableOpacity,
  View,
  Dimensions,
} from 'react-native'

import {
  Header, Card, Text,
} from 'react-native-elements'

import Image from 'react-native-scalable-image'

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
  const LIST_ITEMS = [
    i18n.t('cpcategory_anomalies_item_1'),
    i18n.t('cpcategory_anomalies_item_2'),
    i18n.t('cpcategory_anomalies_item_3'),
    i18n.t('cpcategory_anomalies_item_4'),
    i18n.t('cpcategory_anomalies_item_5'),
  ]
  return (
    <Card containerStyle={SharedStyle.InfoCard}>
      <Text style={SharedStyle.Title}>
        { TITLE }
      </Text>
      <View>
        {
          renderOrderedList(LIST_ITEMS)
        }
      </View>
      <Image source={require('@app/assets/CPInfo/Categories/plegia.png')} 
        width={Dimensions.get('window').width - (2*16) - (2*12)}
        style={{ marginTop: '-5%', marginBottom: '5%' }}
      />
    </Card>
  )
}

const LocalStyle = StyleSheet.create({
  header: {
    width: '100%',
    height: 100
  },
});

export default CategoriesByAnomalies
