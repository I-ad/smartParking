import React from 'react';
import { Text, View } from 'react-native';
import { badStatusColor } from '../../../../common/styles/commonStyles';
import { AvailablityPinIcon, PriceTagIcon, DistanceIcon, NotAvailablePinIcon } from './icons';
import styles from './styles';

export interface IProps {
  id: string;
  location: {
    lat: number;
    lng: number;
  };
  isAvailable: boolean;
  distance: number;
  address: string;
  spotNumber: number;
  cost: number;
}

class RenderListComponent extends React.Component<IProps, {}> {
  public render(): JSX.Element {
    const { spotNumber, distance, address, cost, isAvailable } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.spotNumber}>{`Spot #${spotNumber}`}</Text>
        <Text style={styles.address}>{address}</Text>
        <View style={[styles.rowStyle, styles.spaceBetween]}>
          <View style={styles.rowStyle}>
            {isAvailable ? <AvailablityPinIcon /> : <NotAvailablePinIcon />}
            <Text style={[styles.goodStatusText, !isAvailable && { color: badStatusColor }]}>
              {isAvailable ? 'Available' : 'Not Available'}
            </Text>
          </View>
          {isAvailable && (
            <View style={styles.rowStyle}>
              <PriceTagIcon />
              <Text style={styles.goodStatusText}>{`${cost > 0 ? `$${cost}/hr` : 'Free'}`}</Text>
            </View>
          )}
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
