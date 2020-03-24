/* eslint-disable */
import React from 'react'
import {
  StyleSheet,
  ImageBackground,
} from 'react-native'

import { SharedStyle } from './styles';

interface Props {
  // backgroundColor?: string,
  // color?: string,
  // title?: string,
  // // backButtonVisible?: boolean,
  // navigation?: any,
  // barStyle?: StatusBarStyle,
}

const VKRootView: React.FC<Props> = (props) => {
  // STATE
  // let [balance, setBalance] = React.useState<number>();

  // PROPS
  // const BG_COLOR = props.backgroundColor ? props.backgroundColor : '#424242'

  React.useEffect(() => {
    // componentDidMount

    const componentWillUnmount = () => {
      // do something..
    }
    return componentWillUnmount
  }, [])

  return (
    <ImageBackground 
      source={require('@app/assets/_brand/bg.png')}
      style={SharedStyle.Root}
    >
      {props.children}
    </ImageBackground>
  )
}

const LocalStyle = StyleSheet.create({
  header: {
    width: '100%',
    height: 100
  }
});

export default VKRootView