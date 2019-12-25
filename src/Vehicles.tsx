import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Upstream Telematics app jjjjjjjkkkj!</Text>
        <TouchableOpacity  style={{backgroundColor: 'red', padding: 10}}>
            <Text>ASDF!</Text>

        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
