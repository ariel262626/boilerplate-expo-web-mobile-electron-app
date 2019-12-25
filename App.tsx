import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Vehicles from './src/Vehicles';

const navigator = createStackNavigator(
    {
        Home: Vehicles
    },
    {
      initialRouteName: 'Home',
        defaultNavigationOptions: {
        title: 'App'
        }
    }

);
// {
//   return (
//     <View style={styles.container}>
//       <Text>Welcome to Upstream Telematics app jjjjjjjkkkj!</Text>
//         <TouchableOpacity  style={{backgroundColor: 'red', padding: 10}}>
//             <Text>ASDF!</Text>
//         </TouchableOpacity>
//         <Vehicles/>
//     </View>
//   );
// }

export default createAppContainer(navigator);
