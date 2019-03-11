import { StyleSheet, Dimensions } from 'react-native';
import { darkColor, goodStatusColor, shadeColor3 } from '../../../../common/styles/commonStyles';

export const SCREEN_WIDTH: number = Dimensions.get('window').width;
export const CARD_PREVIEW: number = 12;
export const CARD_SPACE: number = 6;
export const CARD_WIDTH: number = SCREEN_WIDTH - (CARD_PREVIEW * 2) - (CARD_SPACE * 2);
export default StyleSheet.create({
  container:      {
    width:           CARD_WIDTH,
    right:           0,
    left:            0,
    backgroundColor: '#FFF',
    padding:         24,
    borderRadius:    8,
  },
  spotNumber:     {
    flex:         1,
    fontSize:     14,
    color:        shadeColor3,
    marginBottom: 6,
  },
  address:        {
    flex:         1,
    fontSize:     18,
    fontWeight:   '800',
    color:        darkColor,
    marginBottom: 6,
  },
  goodStatusText: {
    fontSize:   14,
    fontWeight: '700',
    color:      goodStatusColor,
    marginLeft: 4,
  },
  distance:       {
    fontSize:   14,
    fontWeight: '600',
    color:      shadeColor3,
    marginLeft: 4,
  },
  rowStyle:       {
    flexDirection: 'row',
  },
  spaceBetween:   {
    justifyContent: 'space-between',
  },
});
