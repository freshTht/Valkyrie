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
    // fontSize: 19,
    // fontWeight: 'bold',

    fontFamily: 'rsu-text_bold',
    fontSize: 24,
  },
  Content: {
    // fontSize: 15,
    fontFamily: 'rsu-text',
    fontSize: 17,
  },
  Subtitle: {
    fontSize: 15,
    marginBottom: 12,
    // marginLeft: 24,
  },
  InfoCard: {
    borderRadius: 8,

    paddingTop: 20,
    paddingHorizontal: 20,
  },
  SubSection: {
    marginTop: 16,
    marginBottom: 16,
  },
  SubSectionTitle: {
    marginBottom: 4,
    // fontSize: 15,
    // fontWeight: 'bold',
    fontFamily: 'rsu-text_bold',
    fontSize: 19,
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
    // fontSize: 19,
    textAlign: 'center',

    fontFamily: 'rsu-text',
    fontSize: 24,
  },
});

export {
  SharedStyle
}