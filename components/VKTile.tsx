import { StyleProp, Text, View, ViewStyle } from "react-native";
import { SharedStyle } from "./styles";
import TouchableScale from "react-native-touchable-scale";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";

export interface VKTileModel {
  title: string;
  href: string;
  imgSrc: any;
  hrefParams: {
    INDEX: number,
    IMG_SRC?: any,
  };
}

export interface VKTileProps {
  data: VKTileModel;
  styles?: StyleProp<ViewStyle>[];
}

export const VKTile: React.FC<VKTileProps> = ({ data, styles = [] }) => {
  const navigation = useNavigation();

  const { title, href, imgSrc, hrefParams } = data;
  return (
    <TouchableScale
      activeScale={0.95}
      onPress={() => navigation.navigate(href, hrefParams)}
      friction={10}
      key={title}
    >
      <View style={[SharedStyle.Tile, ...styles]}>
        <View style={{ alignItems: 'center' }}>
          <View style={SharedStyle.CarouselCardImageContainer}>
            <Image
              source={imgSrc}
              style={SharedStyle.CarouselCardImage}
            />
          </View>
          <Text style={SharedStyle.CarouselCardTitle}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableScale>
  )
};
