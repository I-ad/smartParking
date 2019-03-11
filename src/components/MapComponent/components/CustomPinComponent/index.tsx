import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface IProps {
  cost: number;
  isSelected: boolean;
}

const CustomPinComponent: (props: IProps) => JSX.Element = ({ cost, isSelected }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.contentHolder, isSelected && styles.contentHolderSelected]}>
        <Text style={[styles.cost, isSelected && styles.costSelected]}>
          {cost !== 0 ? `$${cost}` : 'Free'}
        </Text>
      </View>
      <View style={[styles.pointer, isSelected && styles.pointerSelected]} />
    </View>
  );
};

export default CustomPinComponent;
