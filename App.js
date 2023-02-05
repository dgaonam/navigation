import 'react-native-gesture-handler';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import styles from "./components/Styles/Styles"

import Home from './components/Home/Home';
import AbountUs from './components/AbountUs/AbountUs';
import Contact from './components/Contact/Contact';
import Cam from './components/Cam/Cam';


const Stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer styles={styles.container}>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen
          name="Home"
          options={{ title: 'Inicio' }}
          component={Home}
        />
        <Stack.Screen
          name="Contact"
          options={{ title: 'Contactactanos' }}

          component={Contact}
        />
        <Stack.Screen
          name="AbountUs"
          options={{ title: 'Sobre nosotros' }}
          component={AbountUs}
        />

        <Stack.Screen
          name="Cam"
          options={{ title: 'Camara' }}
          component={Cam}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};