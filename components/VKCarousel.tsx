import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SharedStyle } from "./styles";
import TouchableScale from "react-native-touchable-scale";
import { useNavigation } from "@react-navigation/native";
// import Carousel from "react-native-snap-carousel";

interface VKCarouselItem {
  title: string,
  href: string,
  imgSrc: any,
  hrefParams: {
    INDEX: number,
    IMG_SRC?: any,
  },
  backgroundColor: string,
}

interface VKCarouselProps {
  data: VKCarouselItem[];
};

export const VKCarousel: React.FC<VKCarouselProps> = (props) => {
    const navigation = useNavigation();
    const _renderItems = (item: VKCarouselItem) => {
      return (
        <TouchableScale
          activeScale={0.95}
          onPress={() => navigation.navigate(item.href, item.hrefParams)}
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
        // <Carousel
        //     ref={(c: any) => { _carousel = c; }}
        //     data={props.data}
        //     renderItem={_renderItems}
        //     sliderWidth={ WIDTH }
        //     sliderHeight={ HEIGHT }
        //     itemWidth={ ITEM_WIDTH }
        //     itemHeight={ 1000 }
        // />

      // TODO: use proper carousel
      <ScrollView
        style={{
          display: 'flex',
          flexDirection: 'row',
          paddingHorizontal: 16,
          columnGap: 16,
          rowGap: 16,
        }}
        horizontal
      >
        {/* <View
          style={{ display: 'flex', flexDirection: 'row', overflow: 'scroll' }}
        > */}
          {props.data?.map((item) => _renderItems(item))}
        {/* </View> */}
      </ScrollView>
    );
};
