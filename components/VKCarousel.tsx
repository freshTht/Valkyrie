import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { SharedStyle } from "./styles";
// import Carousel from "react-native-snap-carousel";

interface VKCarouselProps {
  navigation?: any;
  data: Array<{
    title: string,
    href: string,
    imgSrc: any,
    hrefParams: {
      INDEX: number,
      IMG_SRC?: any,
    },
    backgroundColor: string,
  }>;
};

export const VKCarousel: React.FC<VKCarouselProps> = (props) => {
    // const WIDTH = Dimensions.get('window').width
    // const ITEM_WIDTH = Dimensions.get('window').width * 0.7
  
    // const HEIGHT = Dimensions.get('window').height
  
    // let _carousel;
    // const _renderItems = (itemData: any) => {
    //   const { item, index } = itemData
    //   return (
    //     <TouchableOpacity activeOpacity={0.8}
    //       onPress={() => props.navigation.navigate( item.href, item.hrefParams )}
    //     >
    //       <View
    //         style={[ SharedStyle.CarouselCard, { backgroundColor: item.backgroundColor } ]}>
  
    //         <View style={{ alignItems: 'center' }}>
    //           <View style={ SharedStyle.CarouselCardImageContainer }>
    //             <Image 
    //               source={item.imgSrc}
    //               width={ITEM_WIDTH * 0.7}
    //               style={ SharedStyle.CarouselCardImage }
    //             />
    //           </View>
    //           <Text style={SharedStyle.CarouselCardTitle}> 
    //             { item.title } 
    //           </Text>
    //         </View>
    //       </View>
    //     </TouchableOpacity>
    //   )
    // }
    
    // return (
    //     <Carousel
    //         ref={(c: any) => { _carousel = c; }}
    //         data={props.data}
    //         renderItem={_renderItems}
    //         sliderWidth={ WIDTH }
    //         sliderHeight={ HEIGHT }
    //         itemWidth={ ITEM_WIDTH }
    //         itemHeight={ 1000 }
    //     />
    // );
    return <Text>TODO: add Carousel here </Text>
};
