/* eslint-disable */
import React, {Component,} from 'react'
import {
  StyleSheet, TouchableOpacity,
} from 'react-native'

import {
  Header, Card, Text
} from 'react-native-elements'

import { Feather } from '@expo/vector-icons';

interface Props {
  // backgroundColor?: string,
  // title?: string,
  // navigation?: any,
}

const VKHeader: React.FC<Props> = (props) => {
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


  return (
    <Card>
      <Text>XXX</Text>
    </Card>
  )
}

const LocalStyle = StyleSheet.create({
  header: {
    width: '100%',
    height: 100
  }
});

export default VKHeader
