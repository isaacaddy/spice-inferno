import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ChallengeScreen from './screens/ChallengeScreen';
import LustScreen from './screens/LustScreen';
import DiceScreen from './screens/DiceScreen';
import ScratchOffScreen from './screens/ScratchOffScreen';
import SqueezeLickSuckScreen from './screens/SqueezeLickSuckScreen';
import SpotifyPlaylistScreen from './screens/SpotifyPlaylistScreen';
import DateNightQuestionScreen from './screens/DateNightQuestionScreen';
import LongDistanceScreen from './screens/LongDistanceScreen';

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
        <Stack.Screen 
          name="ScratchOff" 
          component={ScratchOffScreen} 
          options={{ 
            title: 'Scratch Off Game', 
            headerStyle: { backgroundColor: '#ff1a1a' }, 
            headerTintColor: '#fff' 
          }} 
        />
        <Stack.Screen 
          name="SqueezeLickSuck" 
          component={SqueezeLickSuckScreen} 
          options={{ 
            title: 'Squeeze | Lick | Suck', 
            headerStyle: { backgroundColor: '#ff1a1a' }, 
            headerTintColor: '#fff' 
          }} 
        />
        <Stack.Screen 
          name="SpotifyPlaylist" 
          component={SpotifyPlaylistScreen} 
          options={{ 
            title: 'Spotify Sex-Songs', 
            headerStyle: { backgroundColor: '#ff1a1a' }, 
            headerTintColor: '#fff' 
          }} 
        />
        <Stack.Screen 
          name="DateNightQuestion" 
          component={DateNightQuestionScreen} 
          options={{ 
            title: 'Date Night Questions', 
            headerStyle: { backgroundColor: '#ff1a1a' }, 
            headerTintColor: '#fff' 
          }} 
        />
        <Stack.Screen 
          name="LongDistance" 
          component={LongDistanceScreen} 
          options={{ 
            title: 'Long Distance Game', 
            headerStyle: { backgroundColor: '#ff1a1a' }, 
            headerTintColor: '#fff' 
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}