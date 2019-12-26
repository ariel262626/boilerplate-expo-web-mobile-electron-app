import React from 'react';
import { StyleSheet, Text, FlatList } from 'react-native';

class Vehicles extends React.Component {

    public componentDidMount(): void {
        // call api getVehicles
    }

    public render() {
        const vehicles = [
            {name: 'vehicle #1'},
            {name: 'vehicle #2'},
            {name: 'vehicle #3'},
            {name: 'vehicle #4'},
            {name: 'vehicle #5'},
            {name: 'vehicle #6'},
            {name: 'vehicle #7'},
            {name: 'vehicle #8'},
            {name: 'vehicle #9'},
            {name: 'vehicle #10'},
            {name: 'vehicle #11'},
            {name: 'vehicle #12'},
            {name: 'vehicle #13'}
        ];
        return (
            <FlatList
                keyExtractor={(item) => item.name}
                data={vehicles}
                renderItem={(({item}) => {
                    return <Text style={styles.textStyle}>{item.name}</Text>
                })
                }/>
        );
    }
}
const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 10,
        height: 60,
        borderRadius: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#b1caf2',
    }
});

export default Vehicles;
