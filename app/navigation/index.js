import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import NavHeader from '../components/Header/NavHeader';



const MainNavigation = () => {

  const routeNames = ['Home', 'Favorites'];

  const animationConfig = {
    animation: 'timing',
    config: {
      stiffness: 3000,
      damping: 3000,
    },
  };

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routeNames[0]} headerMode='float'>
        <Stack.Screen
          name={routeNames[0]}
          component={HomeScreen}
          options={{
            header: () => <NavHeader currentRoute={routeNames[0]} routeNames={routeNames} />,
            transitionSpec: {
              open: animationConfig,
              close: animationConfig,
            },
          }}
        />
        <Stack.Screen
          name={routeNames[1]}
          component={FavoritesScreen}
          options={{
            header: () => <NavHeader currentRoute={routeNames[1]} routeNames={routeNames} />,
            transitionSpec: {
              open: animationConfig,
              close: animationConfig,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation