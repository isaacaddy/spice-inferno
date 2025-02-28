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
import PassionMasterclassScreen from './screens/PassionMasterclassScreen';
import CummingFasterScreen from './screens/CummingFasterScreen';
import ThreesomesScreen from './screens/ThreesomesScreen';
import BDSMScreen from './screens/BDSMScreen';
import NewLocationsScreen from './screens/NewLocationsScreen';
import SixtyNineScreen from './screens/SixtyNineScreen';
import SwingingSwappingScreen from './screens/SwingingSwappingScreen';
import RoleplayScreen from './screens/RoleplayScreen';
import ChallengeScreen from './screens/ChallengeScreen';

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
            title: 'X-Rated Challenges', 
            headerStyle: { backgroundColor: '#ff4d4d' }, 
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
        <Stack.Screen 
          name="PassionMasterclass" 
          component={PassionMasterclassScreen}
          options={{ 
            title: 'Passion Masterclass',
            headerStyle: { backgroundColor: '#800080' },
            headerTintColor: '#fff'
          }} 
        />
        <Stack.Screen 
          name="CummingFaster" 
          component={CummingFasterScreen} 
          options={{ 
            title: 'Cumming Faster', 
            headerStyle: { backgroundColor: '#ff4040' }, 
            headerTintColor: '#fff' 
          }} 
        />
        <Stack.Screen 
          name="Threesomes" 
          component={ThreesomesScreen} 
          options={{ 
            title: 'Threesomes', 
            headerStyle: { backgroundColor: '#ff66b3' }, 
            headerTintColor: '#fff' 
          }} 
        />
        <Stack.Screen 
          name="BDSM" 
          component={BDSMScreen} 
          options={{ 
            title: 'BDSM', 
            headerStyle: { backgroundColor: '#800080' }, 
            headerTintColor: '#fff' 
          }} 
        />
        <Stack.Screen 
          name="NewLocations" 
          component={NewLocationsScreen} 
          options={{ 
            title: 'New Locations', 
            headerStyle: { backgroundColor: '#ff9966' }, 
            headerTintColor: '#fff' 
          }} 
        />
        <Stack.Screen 
          name="SixtyNine" 
          component={SixtyNineScreen} 
          options={{ 
            title: '69-ing', 
            headerStyle: { backgroundColor: '#ff4d4d' }, 
            headerTintColor: '#fff' 
          }} 
        />
        <Stack.Screen 
          name="SwingingSwapping" 
          component={SwingingSwappingScreen} 
          options={{ 
            title: 'Swinging & Swapping', 
            headerStyle: { backgroundColor: '#ff80bf' }, 
            headerTintColor: '#fff' 
          }} 
        />
        <Stack.Screen 
          name="Roleplay" 
          component={RoleplayScreen} 
          options={{ 
            title: 'Roleplay Games', 
            headerStyle: { backgroundColor: '#ff8080' }, 
            headerTintColor: '#fff' 
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}