import {
  StyleSheet
} from 'react-native'

const SharedStyle = StyleSheet.create({
  Root: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  Title: {
    marginBottom: 4,
    fontSize: 19,
    fontWeight: 'bold',
  },
  Content: {
    fontSize: 15,
  },
  Subtitle: {
    fontSize: 15,
    marginBottom: 12,
    // marginLeft: 24,
  },
  InfoCard: {
    borderRadius: 8,
  },
  SubSection: {
    marginTop: 8,
    marginBottom: 8,
  },
  SubSectionTitle: {
    marginBottom: 4,
    fontSize: 15,
    fontWeight: 'bold',
  },

  Carousel: {
    marginBottom: 24,
  },
  CarouselCard: { 
    marginHorizontal: 2, 
    marginVertical: 24, 
    // paddingHorizontal: 20, 
    // paddingVertical: 20,
    padding: 24,

    backgroundColor: '#424242',
    borderRadius: 36,
  },
  CarouselCardImageContainer: {
    // marginBottom: 0,
    // backgroundColor: '#fff',
    overflow: "hidden",
    borderRadius: 1000,
  },
  CarouselCardImage: {
    marginBottom: 0,
    backgroundColor: '#fff',
    // overflow: "hidden",
    // borderRadius: 100,
  },
  CarouselCardTitle: {
    color: '#fff',
    marginTop: 20,
    // marginHorizontal: 24,
    fontSize: 19,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
});

export {
  SharedStyle
}