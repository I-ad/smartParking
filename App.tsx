import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapComponent from './src/components/MapComponent';

export default class App extends React.Component<{}> {
  public render() {
    return (
      <MapComponent />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:            1,
    backgroundColor: '#fff',
    alignItems:      'center',
    justifyContent:  'center',
  },
});
