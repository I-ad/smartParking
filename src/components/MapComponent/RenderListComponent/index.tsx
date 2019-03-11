import React from 'react';
import { Text, View } from 'react-native';
import { AvailablityPinIcon, PriceTagIcon, DistanceIcon } from './icons';
import styles from './styles';

class RenderListComponent extends React.Component {
  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <Text style={styles.spotNumber}>Spot #1234</Text>
        <Text style={styles.address}>694 Fay Common Suite 061</Text>
        <View>
          <View>
            <AvailablityPinIcon />
            <Text style={styles.goodStatusText}>Available</Text>
          </View>
          <View>
            <PriceTagIcon />
            <Text style={styles.goodStatusText}>$3.40/hr</Text>
          </View>
          <View>
            <DistanceIcon />
            <Text style={styles.distance}>1.5m</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default RenderListComponent;
