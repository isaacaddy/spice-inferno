import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Spicy Couple Challenge</Text>
      <Text style={styles.subtitle}>
        Dare to unleash your filthiest desires? Step into the inferno...
      </Text>
      {/* Debug Text to Confirm Rendering */}
      <Text style={styles.debugText}>Buttons Loading Below...</Text>
      <TouchableOpacity
        style={[styles.button, styles.button1]}
        onPress={() => navigation.navigate('Challenge')}
      >
        <Text style={styles.buttonText}>Ignite the Fire</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.button2]}
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
    </ScrollView>
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
    paddingTop: 100, // Add top padding
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
    width: '80%',
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
    backgroundColor: '#b30000', // Dark red for Scratch Off (inspired by banana icon)
  },
  button5: {
    backgroundColor: '#ff4040', // Bright pink for Squeeze | Lick | Suck (inspired by lips)
  },
  button6: {
    backgroundColor: '#ff6666', // Pink for Spotify (inspired by music icon)
  },
  button7: {
    backgroundColor: '#ff8080', // Light red for Date Night (inspired by heart)
  },
  button8: {
    backgroundColor: '#ff9999', // Soft red for Long Distance (inspired by heart)
  },
  debugText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 10,
    fontStyle: 'italic',
  },
});