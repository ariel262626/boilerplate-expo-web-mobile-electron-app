import React from 'react';
import { StyleSheet,  View } from 'react-native';

class Home extends React.Component {

  public componentDidMount(): void {
    // call api getVehicles
  }

    public render() {
        return (
            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                <View style={styles.textStyle} />
                <View style={styles.textStyle} />
                <View style={styles.textStyle} />
                <View style={styles.textStyle} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10,
        borderRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#f2739b',
        width: 120,
        height: 120,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Home;
