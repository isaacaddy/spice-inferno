import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

const menuItems = [
  {
    title: 'Lustful Games',
    subtitle: 'Explore passion',
    route: 'Lust',
    color: '#ff1a1a'
  },
  {
    title: 'Intimacy Dice',
    subtitle: 'Roll for pleasure',
    route: 'Dice',
    color: '#ff4d4d'
  },
  {
    title: 'Squeeze Lick Suck',
    subtitle: 'Spice up foreplay',
    route: 'SqueezeLickSuck',
    color: '#ff1a75'
  },
  {
    title: 'Passion Masterclass',
    subtitle: 'Advanced techniques',
    route: 'PassionMasterclass',
    color: '#800080'
  },
  {
    title: 'Date Night Questions',
    subtitle: 'Deep connection',
    route: 'DateNightQuestion',
    color: '#ff66b3'
  },
  {
    title: 'Long Distance Love',
    subtitle: 'Keep passion alive',
    route: 'LongDistance',
    color: '#ff9966'
  }
];

// Component implementation with navigation and styling
export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Spicy Couple Challenge</Text>
        <Text style={styles.subtitle}>
          Dare to unleash your filthiest desires? Step into the inferno...
        </Text>
        {/* Regular buttons */}
        <TouchableOpacity
          style={[styles.button, styles.button1]}
          onPress={() => navigation.navigate('Challenge')}
        >
          <Text style={styles.buttonText}>X-Rated Challenges</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.button1]}
          onPress={() => navigation.navigate('Lust')}
        >
          <Text style={styles.buttonText}>Drown in Lust</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.button3]}
          onPress={() => navigation.navigate('Dice')}
        >
          <Text style={styles.buttonText}>Roll the Dice</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.button4]}
          onPress={() => navigation.navigate('ScratchOff')}
        >
          <Text style={styles.buttonText}>Scratch Off</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.button5]}
          onPress={() => navigation.navigate('SqueezeLickSuck')}
        >
          <Text style={styles.buttonText}>Squeeze | Lick | Suck</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.button6]}
          onPress={() => navigation.navigate('SpotifyPlaylist')}
        >
          <Text style={styles.buttonText}>Spotify Sex-Songs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.button7]}
          onPress={() => navigation.navigate('DateNightQuestion')}
        >
          <Text style={styles.buttonText}>Date Night Qs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.button8]}
          onPress={() => navigation.navigate('LongDistance')}
        >
          <Text style={styles.buttonText}>Long Distance</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={[styles.button, styles.button9]}
        onPress={() => navigation.navigate('Roleplay')}
      >
        <Text style={styles.buttonText}>Roleplay Games</Text>
      </TouchableOpacity>
    {/* Floating Passion Masterclass Button */}
    <TouchableOpacity 
      style={styles.floatingButton}
      onPress={() => navigation.navigate('PassionMasterclass')}
    >
      <Text style={styles.floatingButtonText}>🎓</Text>
    </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a0000',
  },
  contentContainer: {
    alignItems: 'center',
    padding: 20,
    paddingTop: 100, // Added top padding to move content down
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ff1a1a',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#ff9999',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 8,
    width: '75%',
    alignItems: 'center',
    elevation: 5, // Shadow for depth
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button1: {
    backgroundColor: '#ff4d4d', // Red for Challenge
  },
  button2: {
    backgroundColor: '#ff6666', // Pink for Lust
  },
  button3: {
    backgroundColor: '#ff8080', // Light red for Dice
  },
  button4: {
    backgroundColor: '#b30000', // Dark red for Scratch Off
  },
  button5: {
    backgroundColor: '#ff4040', // Bright pink for Squeeze | Lick | Suck
  },
  button6: {
    backgroundColor: '#ff6666', // Pink for Spotify
  },
  button7: {
    backgroundColor: '#ff8080', // Light red for Date Night
  },
  button8: {
    backgroundColor: '#ff9999', // Soft red for Long Distance
  },
  button9: {
    backgroundColor: '#800080', // Purple for Passion Masterclass (inspired by screenshot)
  },
  floatingButton: {
    position: 'absolute',
    left: 20,
    bottom: -30, // Changed from 20 to 40 to push it down
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#800080', // Purple color from button9
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  floatingButtonText: {
    fontSize: 24,
  },
  buttonChallenge: {
    backgroundColor: '#ff3333', // Bright red for Challenge
    marginBottom: 15,
  },
  floatingButtonText: {
    fontSize: 24,
  },
});