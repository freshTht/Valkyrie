import {
  Dimensions,
  StyleSheet
} from 'react-native'
import { BorderRadius } from './enum/BorderRadius.enum';
import { FontSize } from './enum/FontSize';
import { Spacing } from './enum/Spacing.enum';

const { width } = Dimensions.get('window')

export enum FontFamily {
  DefaultBold = 'rsu-text_bold',
  // DefaultRegular = 'rsu-text',
};

const SharedStyle = StyleSheet.create({
  Root: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  Title: {
    marginBottom: 4,
    // fontSize: 19,
    // fontWeight: 'bold',

    fontFamily: FontFamily.DefaultBold,
    fontSize: FontSize.Title,
  },
  Content: {
    fontFamily: FontFamily.DefaultBold,
    opacity: 0.6,
    fontSize: FontSize.Content,
  },
  ContentBold: {
    fontFamily: FontFamily.DefaultBold,
    fontSize: FontSize.Content,
  },
  
  OrderedList: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: Spacing.S,
  },
  OrderedListRow: {
    flexDirection: 'row',
    // backgroundColor: '#fff',
    backgroundColor: '#0000000a',
    padding: 12,
    borderRadius: BorderRadius.M,
  },
  OrderedListNumber: {
    fontFamily: FontFamily.DefaultBold,
    fontSize: FontSize.Content,
    // marginTop: 4,
    marginRight: 12,
    backgroundColor: '#4FAFA1',
    color: '#fff',
    height: 32,
    width: 32,
    textAlign: 'center',
    borderRadius: BorderRadius.L,
  },

  Subtitle: {
    marginBottom: 12,

    fontFamily: FontFamily.DefaultBold,
    fontSize: FontSize.Subtitle,
  },
  InfoCard: {
    borderRadius: BorderRadius.XL,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',

    paddingVertical: 20,
    paddingHorizontal: 20,

    // margin: 16,
    // shadowColor: 'rgba(0, 0, 0, 0.25)',
    // borderColor: 'rgba(100, 100, 100, 0.1)',
    // borderWidth: 1,
  },
  SubSection: {
    // marginTop: 16,
    // marginBottom: 16,
    marginVertical: 8,
  },
  SubSectionTitle: {
    marginBottom: 4,
    // fontSize: 15,
    // fontWeight: 'bold',
    fontFamily: FontFamily.DefaultBold,
    fontSize: FontSize.SubSectionTitle,
  },

  CarouselItemsContainer: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'visible',

    columnGap: 12,
    width: '100%',
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
    marginTop: 20,
    textAlign: 'center',

    fontFamily: FontFamily.DefaultBold,
    fontSize: FontSize.Title,

    // flexWrap: 'wrap',
  },

  Tile: {
    padding: Spacing.L,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: BorderRadius.XL,
  },
  CarouselTile: {
    height: '100%',
    width: (width * 0.3) + (Spacing.L * 2),
  },
  GridTile: {
    width: (width - (Spacing.L * 3)) * 0.5,
    flexGrow: 1,
  },

  HeaderTitle: {
    fontSize: FontSize.Title, 
    // fontWeight: 'bold', 
    fontFamily: FontFamily.DefaultBold,
  },
  
  ButtonText: {
    // fontSize: 17,
    fontSize: FontSize.Button,
    fontFamily: FontFamily.DefaultBold,
  },
  ButtonOrange: {
    backgroundColor: '#EC8C50',
  },

  ModalFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  ModalActionButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    // fontSize: 36,
    backgroundColor: '#EBEBEB',
    borderRadius: BorderRadius.L,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    minWidth: 120,
  },
  ModalActionButtonText: {
    // fontSize: 17,
    fontSize: FontSize.Button,
    fontFamily: FontFamily.DefaultBold,
    textAlign: 'center',
    alignSelf: 'center',
  },

  Modal: { 
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    padding: 0,
    backgroundColor: '#fff',
    height: '100%',
    maxHeight: '75%',
    width: '100%',
    alignItems: 'center',
    marginTop: 'auto',

    shadowColor: '#000',
    shadowOpacity: 1,
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 10,

    elevation: 10,
  },
  ModalHeader: {
    width: '100%',
    padding: 16,
    textAlign: 'center',
    // backgroundColor: 'red',

    fontFamily: FontFamily.DefaultBold,
    fontSize: FontSize.Title,
  },
  ModalBackdrop: {
    // paddingHorizontal: 12,
    // paddingVertical: 8,
    backgroundColor: '#00000080',
    height: '100%',
    width: '100%',
  },
  TuLogo: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    margin: 16,
  },
});

export {
  SharedStyle
}