import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Vehicles extends React.Component {

  public componentDidMount(): void {
    // call api getVehicles
  }

    render() {
    return (
        <View>
            <Text style={styles.container}>List Of Vehicles</Text>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    fontSize: 26,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Vehicles;
