import React from 'react';
import { StyleSheet, View } from 'react-native';
import StyledText from 'react-native-styled-text';
import { SharedStyle } from './styles';
import { Spacing } from './styles/enum/Spacing.enum';
import { VKTouchable } from './VKTouchable';
import { getContrastedColor, TintColor } from './styles/enum/TintColor.enum';

export interface MenuItemData {
    title?: string,
    href?: string,
    hrefParams?: any,
    backgroundColor: TintColor,
    color?: string,
    leftElement?: React.ReactElement,
}

export type VKMenuItemStyle = 'left' | 'right'; 

interface VKMenuItemProps {
    item: MenuItemData;
    navigation: any;
    style: VKMenuItemStyle;
}

const borderRadiusStyles = {
    left: {
        paddingLeft: 20 + Spacing.L, // account for negative spacing
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 32,
        borderBottomRightRadius: 32,
    },
    right: {
        paddingLeft: 20,
        borderTopLeftRadius: 32,
        borderBottomLeftRadius: 32,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
}

export const VKMenuItem: React.FC<VKMenuItemProps> = ({ item, navigation, style }) => {
    const handlePress = React.useCallback(() => {
        navigation.navigate(item.href, item.hrefParams);
    }, []);

    return item.title && (
        <VKTouchable onPress={handlePress}>
            <View
                style={[
                    LocalStyle.menuButtonContainer,
                    borderRadiusStyles[style],
                    { backgroundColor: item.backgroundColor },
                ]}
            >
                {item.leftElement}
                <StyledText
                    style={[
                        SharedStyle.MenuItemText,
                        { color: getContrastedColor(item.backgroundColor) },
                    ]}
                >
                    {item.title}
                </StyledText>
            </View>
        </VKTouchable>
    );
};

const LocalStyle = StyleSheet.create({
    menuButtonContainer: {
        marginBottom: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // paddingLeft: 20,
        paddingVertical: 8,
        gap: 8,
        // TODO: fix font
        marginHorizontal: -Spacing.L,
    },
})