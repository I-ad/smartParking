import { StyleSheet } from 'react-native';
import { borderColor, primaryColor } from '../../../../common/styles/commonStyles';

export default StyleSheet.create({
  container:             {
    alignItems: 'center',
  },
  contentHolder:         {
    padding:         6,
    backgroundColor: primaryColor,
    borderRadius:    2,
  },
  contentHolderSelected: {
    backgroundColor: '#FFF',
    shadowColor:     '#000',
    shadowOffset:    { width: 0, height: 4 },
    shadowOpacity:   0.2,
    shadowRadius:    5,
    elevation:       1,
  },
  cost:                  {
    color:      '#FFF',
    fontSize:   10,
    fontWeight: '800',
  },
  costSelected:          {
    color: primaryColor,
  },
  pointer:               {
    width:             0,
    height:            0,
    backgroundColor:   'transparent',
    borderStyle:       'solid',
    borderTopWidth:    4,
    borderRightWidth:  3,
    borderBottomWidth: 0,
    borderLeftWidth:   3,
    borderTopColor:    primaryColor,
    borderRightColor:  'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor:   'transparent',
  },
  pointerSelected:       {
    borderTopColor: '#FFF',
  },
});
