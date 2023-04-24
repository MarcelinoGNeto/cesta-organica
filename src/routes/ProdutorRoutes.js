import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Produtor from '../screens/Produtor';
import Home from '../screens/Home';
import Cesta from '../screens/Cesta';

const Stack = createNativeStackNavigator();

export default function ProdutorRoutes() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Produtor" component={Produtor} />
      <Stack.Screen name="Cesta" component={Cesta} />
    </Stack.Navigator>
  );
}
