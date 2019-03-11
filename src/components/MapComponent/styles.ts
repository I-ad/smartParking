import { StyleSheet } from 'react-native';
import { CARD_WIDTH, SCREEN_WIDTH } from './RenderListComponent/styles';

export default StyleSheet.create({
  container: {
    flex:     1,
    position: 'absolute',
    bottom:   60,
    left:     0,
  },
  listStyle: {
    paddingHorizontal: (SCREEN_WIDTH - CARD_WIDTH) / 2,
  },
});
