import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ChallengeScreen from './screens/ChallengeScreen';
import LustScreen from './screens/LustScreen';
import DiceScreen from './screens/DiceScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Challenge" 
          component={ChallengeScreen} 
          options={{ 
            title: 'Spice Inferno', 
            headerStyle: { backgroundColor: '#ff1a1a' }, 
            headerTintColor: '#fff' 
          }} 
        />
        <Stack.Screen 
          name="Lust" 
          component={LustScreen} 
          options={{ 
            title: 'Lustful Games', 
            headerStyle: { backgroundColor: '#ff1a1a' }, 
            headerTintColor: '#fff' 
          }} 
        />
        <Stack.Screen 
          name="Dice" 
          component={DiceScreen} 
          options={{ 
            title: 'Intimacy Dice', 
            headerStyle: { backgroundColor: '#ff1a1a' }, 
            headerTintColor: '#fff' 
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}