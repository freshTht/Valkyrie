/* eslint-disable */
import React, { PropsWithChildren } from 'react'
import {
  ImageBackground,
} from 'react-native'

import { SharedStyle } from './styles';

const VKRootView: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ImageBackground 
      source={require('@app/assets/_brand/bg.png')}
      style={SharedStyle.Root}
    >
      {children}
    </ImageBackground>
  )
};

export default VKRootView;
