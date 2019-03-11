import { MapView } from 'expo';
import React from 'react';
import { FlatList, View } from 'react-native';
import CustomPinComponent from './components/CustomPinComponent';
import RenderListComponent, { IProps as IDataType } from './components/RenderListComponent';
import { CARD_PREVIEW, CARD_SPACE, CARD_WIDTH } from './components/RenderListComponent/styles';
import faceData from './faceData';
import styles from './styles';

const { Marker }: any = MapView;

interface IState {
  selectedID: string;
}

class MapComponent extends React.Component<{}, IState> {
  private _mapRef: any = null;
  private _scrollRef: any;
  private sub: any;

  constructor(props: {}) {
    super(props);
    this.state = {
      selectedID: '1',
    };
  }

  public componentDidMount() {
    this._mapRef.fitToCoordinates(
      faceData.map(x => ({ latitude: x.location.lat, longitude: x.location.lng })),
    );
  }

  private _renderItem: ({ item }: { item: IDataType }) => JSX.Element = ({ item }) => {
    return (
      <RenderListComponent
        id={item.id}
        location={item.location}
        distance={item.distance}
        address={item.address}
        spotNumber={item.spotNumber}
        cost={item.cost}
      />
    );
  };

  private _itemSeparator: () => JSX.Element = () => <View style={{ width: CARD_SPACE }} />;

  private _keyExtractor: (item: IDataType) => string = (item) => item.id;

  private _onScrollEnd = ({ nativeEvent: { contentOffset: { x } } }: any) => {
    const currentIndex: number = Number((x / (CARD_WIDTH + CARD_SPACE + CARD_PREVIEW)).toFixed(0));
    if (faceData[currentIndex]) {
      this.setState({ selectedID: faceData[currentIndex].id });
      const location = {
        latitude:  faceData[currentIndex].location.lat,
        longitude: faceData[currentIndex].location.lng,
      };
      this._mapRef.animateToRegion(location, 200);
    }
  };

  private _onPinPress = (id: string, index: number) => {
    const offset = index * CARD_WIDTH;
    console.log(offset);
    this.sub = setTimeout(() => {
      this._scrollRef.scrollToOffset({ offset, animated: true });
    }, 0);
    this.setState({ selectedID: id });
  };

  private _initialMapRef = (R: any) => this._mapRef = R;
  private _initialScrollRef = (R: any) => this._scrollRef = R;

  public render(): JSX.Element {
    const { selectedID } = this.state;
    return (
      <React.Fragment>
        <MapView
          ref={this._initialMapRef}
          style={{ flex: 1 }}
        >
          {faceData.map((item: IDataType, index) => {
            const onPinPress = () => {
              this._onPinPress(item.id, index);
            };
            return (
              <Marker
                onPress={onPinPress}
                key={item.id}
                coordinate={{ latitude: item.location.lat, longitude: item.location.lng }}
              >
                <CustomPinComponent
                  cost={item.cost}
                  isSelected={selectedID === item.id}
                />
              </Marker>
            );
          })}
        </MapView>
        <FlatList
          ref={this._initialScrollRef}
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
          onMomentumScrollEnd={this._onScrollEnd}
        />
      </React.Fragment>
    );
  }
}

export default MapComponent;
