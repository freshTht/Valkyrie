import {
  Dimensions,
  StyleSheet
} from 'react-native'

const { width, height } = Dimensions.get('window')

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
    fontSize: 32,
  },
  Content: {
    // fontSize: 15,
    fontFamily: 'rsu-text',
    fontSize: 24,
  },
  Subtitle: {
    // fontSize: 15,
    marginBottom: 12,

    fontFamily: 'rsu-text',
    fontSize: 28,
    // marginLeft: 24,
  },
  InfoCard: {
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',

    paddingVertical: 20,
    paddingHorizontal: 20,

    margin: 16,
    // shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderColor: 'rgba(100, 100, 100, 0.1)',
    borderWidth: 1,
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
    fontSize: 24,
  },

  Carousel: {
    marginBottom: 24,
  },
  CarouselCard: { 
    marginHorizontal: 2, 
    marginVertical: 24, 
    paddingHorizontal: 12,
    paddingVertical: 24,

    // backgroundColor: '#424242',
    backgroundColor: '#ffffff',
    borderRadius: 36,
  },
  CarouselCardImageContainer: {
    // marginBottom: 0,
    // backgroundColor: '#fff',
    overflow: "hidden",
    // borderRadius: 1000,
    display: 'flex',
  },
  CarouselCardImage: {
    marginBottom: 0,
    width: width * 0.3,
    height: width * 0.3,
  },
  CarouselCardTitle: {
    color: '#000',
    // color: '#fff',
    marginTop: 20,
    // fontSize: 19,
    textAlign: 'center',

    fontFamily: 'rsu-text_bold',
    // fontSize: 24,
    fontSize: 32,
  },

  HeaderTitle: {
    fontSize: 28, 
    // fontWeight: 'bold', 
    fontFamily: 'rsu-text_bold',
  },
  
  ButtonText: {
    fontSize: 28,
    fontFamily: 'rsu-text_bold',
  },
  ButtonOrange: {
    backgroundColor: '#EC8C50',
  },
});

export {
  SharedStyle
}