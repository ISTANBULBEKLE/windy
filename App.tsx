/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Home from './src/frontend/screens/Home';
import Login from './src/frontend/screens/Login';
import WindFarm from './src/frontend/screens/WindFarm';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const NavigationStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="WindFarm" component={WindFarm} />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <NavigationStack.Navigator>
        <NavigationStack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <NavigationStack.Screen name="Home" component={Home} />
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
