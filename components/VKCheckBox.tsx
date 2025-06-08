import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SharedStyle } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { VKTouchable } from './VKTouchable';
import { TintColor } from './styles/enum/TintColor.enum';

interface Props {
    title: string;
    checked: boolean;
    checkedColor?: TintColor;
    onPress: () => void;
}

export const VKCheckBox: React.FC<Props> = ({ title, checked, checkedColor = TintColor.Green, onPress }) => {
    return (
        <VKTouchable onPress={onPress}>
            <View style={SharedStyle.CheckBoxContainer}>
                <MaterialIcons
                    name={checked ? "check-box" : "check-box-outline-blank"}
                    size={22}
                    color={checked ? checkedColor : "#00000088"}
                />
                <Text style={SharedStyle.Content}>{title}</Text>
            </View>
        </VKTouchable>
    );
};
