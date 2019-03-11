import React from 'react';
import { Text, View } from 'react-native';
import { AvailablityPinIcon, PriceTagIcon, DistanceIcon } from './icons';
import styles from './styles';

export interface IProps {
  id: string;
  location: {
    lat: number;
    lng: number;
  };
  distance: number;
  address: string;
  spotNumber: number;
  cost: number;
}

class RenderListComponent extends React.Component<IProps, {}> {
  public render(): JSX.Element {
    const { spotNumber, distance, address, cost } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.spotNumber}>{`Spot #${spotNumber}`}</Text>
        <Text style={styles.address}>{address}</Text>
        <View style={[styles.rowStyle, styles.spaceBetween]}>
          <View style={styles.rowStyle}>
            <AvailablityPinIcon />
            <Text style={styles.goodStatusText}>Available</Text>
          </View>
          <View style={styles.rowStyle}>
            <PriceTagIcon />
            <Text style={styles.goodStatusText}>{`${cost > 0 ? `$${cost}/hr` : 'Free'}`}</Text>
          </View>
          <View style={styles.rowStyle}>
            <DistanceIcon />
            <Text style={styles.distance}>{`${distance}m`}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default RenderListComponent;
