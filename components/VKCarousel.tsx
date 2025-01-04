import { Dimensions, FlatList, Image, ListRenderItem, ListRenderItemInfo, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SharedStyle } from "./styles";
import TouchableScale from "react-native-touchable-scale";
import { useNavigation } from "@react-navigation/native";
import { Spacing } from "./styles/enum/Spacing.enum";
// import Carousel from "react-native-snap-carousel";

interface VKCarouselItem {
  title: string,
  href: string,
  imgSrc: any,
  hrefParams: {
    INDEX: number,
    IMG_SRC?: any,
  },
}

interface VKCarouselProps {
  data: VKCarouselItem[];
};

export const VKCarousel: React.FC<VKCarouselProps> = (props) => {
    const navigation = useNavigation();
    const renderItem = ({ item }: ListRenderItemInfo<VKCarouselItem>) => {
      return (
        <TouchableScale
          activeScale={0.95}
          onPress={() => navigation.navigate(item.href, item.hrefParams)}
          friction={10}
          key={item.title}
        >
          <View style={SharedStyle.CarouselCard}>
            <View style={{ alignItems: 'center' }}>
              <View style={ SharedStyle.CarouselCardImageContainer }>
                <Image 
                  source={item.imgSrc}
                  style={ SharedStyle.CarouselCardImage }
                />
              </View>
              <Text style={SharedStyle.CarouselCardTitle}> 
                { item.title } 
              </Text>
            </View>
          </View>
        </TouchableScale>
      )
    }
    
    return (
      <FlatList
        data={props.data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        fadingEdgeLength={Spacing.XL3}
        contentContainerStyle={{
          gap: Spacing.M,
        }}
        horizontal
      />
    );
};
