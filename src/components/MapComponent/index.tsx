import React from 'react';
import { FlatList, View } from 'react-native';
import { MapView } from 'expo';
import RenderListComponent from './RenderListComponent';
import { CARD_SPACE, CARD_WIDTH } from './RenderListComponent/styles';
import styles from './styles';
import faceData, { IDataType } from './faceData';

class MapComponent extends React.Component {
  private _renderItem: ({ item }: { item: IDataType }) => JSX.Element = ({ item }) => {
    return (
      <RenderListComponent />
    );
  };

  private _itemSeparator: () => JSX.Element = () => <View style={{ width: CARD_SPACE }} />;

  private _keyExtractor: (item: IDataType) => string = (item) => item.id;

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <MapView
          style={{ flex: 1 }}
        />
        <FlatList
          style={styles.container}
          contentContainerStyle={styles.listStyle}
          data={faceData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          alwaysBounceHorizontal={true}
          scrollEventThrottle={16}
          decelerationRate={0}
          snapToAlignment="start"
          snapToInterval={CARD_WIDTH + CARD_SPACE}
          renderItem={this._renderItem}
          ItemSeparatorComponent={this._itemSeparator}
          keyExtractor={this._keyExtractor}
        />
      </React.Fragment>
    );
  }
}

export default MapComponent;
