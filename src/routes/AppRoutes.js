import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CestaProdutos from '../screens/Cesta';
import ProdutorRoutes from './ProdutorRoutes';

import Coracao from '../assets/coracao.svg';
import Home from '../assets/home.svg';

const Tab = createBottomTabNavigator();

export default function AppRouter() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color}) => {
            let Icon = Home;

            if (route.name === 'Cesta') {
              Icon = Coracao;
            }
            return <Icon color={color} />;
          },
          tabBarActiveTintColor: '#2A9F85',
          tabBarInactiveTintColor: '#C7C7C7',
        })}>
        <Tab.Screen name="Home" component={ProdutorRoutes} />
        <Tab.Screen name="Cesta" component={CestaProdutos} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
