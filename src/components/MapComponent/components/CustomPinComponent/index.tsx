import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface IProps {
  cost: number;
  isSelected: boolean;
  isAvailable: boolean;
}

const CustomPinComponent: (props: IProps) => JSX.Element = ({ cost, isSelected, isAvailable }) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.contentHolder,
          !isAvailable && styles.notAvailable,
          isSelected && styles.contentHolderSelected,
        ]}
      >
        <Text
          style={[
            styles.cost,
            isSelected && styles.costSelected,
            !isAvailable && isSelected && styles.notAvailableCostSelected,
          ]}
        >
          {isAvailable ? cost !== 0 ? `$${cost}` : 'Free' : 'Not Available'}
        </Text>
      </View>
      <View
        style={[
          styles.pointer,
          !isAvailable && styles.pointerNotAvailable,
          isSelected && styles.pointerSelected,
        ]}
      />
    </View>
  );
};

export default CustomPinComponent;
