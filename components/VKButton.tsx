import { Text, View, ViewProps, ViewStyle } from 'react-native';
import React from 'react';
import { SharedStyle } from './styles';
import { VKTouchable } from './VKTouchable';
import { getContrastedColor, TintColor } from './styles/enum/TintColor.enum';
import { FontSize } from './styles/enum/FontSize';

export enum ButtonSize {
    Default,
    Small,
}

const fontSize: Record<ButtonSize, number> = {
    [ButtonSize.Default]: FontSize.Button,
    [ButtonSize.Small]: FontSize.ButtonSmall,
};

interface VKButtonProps {
  style?: ViewStyle,
  onPress: () => void;
  title: string;
  tintColor?: TintColor;
  size?: ButtonSize;
};

export const VKButton: React.FC<VKButtonProps> = ({ 
  onPress,
  title,
  tintColor = TintColor.Green,
  size = ButtonSize.Default,
  style,
}) => {
  const containerStyles = [
    {
      ...SharedStyle.Button,
      ...style,
      backgroundColor: tintColor,
    },
  ];

  const textStyles = {
    ...SharedStyle.ButtonText,
    color: getContrastedColor(tintColor),
    fontSize: fontSize[size],
  };

  return (
    <VKTouchable onPress={onPress}>
      <View style={containerStyles}>
        <Text style={textStyles}>{title}</Text>
      </View>
    </VKTouchable>
  );
};
