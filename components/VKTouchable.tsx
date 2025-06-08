import { TouchableOpacity } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';

export enum VKTouchableType {
    scale = 'scale',
    opacity = 'opacity',
};

interface Props {
    onPress?: () => void;
    type?: VKTouchableType,
}

export const VKTouchable: React.FC<React.PropsWithChildren<Props>> = ({ children, onPress, type = VKTouchableType.scale }) => {
    switch(type) {
        case VKTouchableType.opacity:
            return (
                <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
                    {children}
                </TouchableOpacity>
            );
        case VKTouchableType.scale:
            return (
                <TouchableScale onPress={onPress} activeScale={0.95} friction={10}>
                    {children}
                </TouchableScale>
            );
    }
};
