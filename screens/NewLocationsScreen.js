import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Vibration } from 'react-native';
import * as Speech from 'expo-speech';

const locations = [
  "Hotel Balcony - Midnight Quickie",
  "Public Park Bench - Hidden Touch",
  "Beach Under Stars - Sandy Passion",
  "Movie Theater - Silent Grind",
  "Office Desk - After Hours",
  "Car Roof - Nighttime Risk",
  "Elevator - Quick Stop",
  "Poolside - Wet and Wild",
  "Library Stacks - Quiet Heat",
  "Rooftop - Skyline Seduction",
  // New 20 Location Tips (Explicit, Romantic, and Adventurous)
  "Backseat of a Taxi - Stealthy Thrusts",
  "Sauna - Steamy Oral",
  "Campfire - Blanket Passion",
  "Hot Tub - Bubbling Heat",
  "Alleyway - Risky Quickie",
  "Concert Crowd - Hidden Grind",
  "Private Jet - Mile-High Ecstasy",
  "Cruise Deck - Moonlit Romance",
  "Art Gallery - Quiet Fondling",
  "Wine Cellar - Cork-Popping Seduction",
  "Amusement Park Ride - Thrilling Touch",
  "Forest Clearing - Nature’s Embrace",
  "Boat Deck - Rocking Passion",
  "Penthouse Window - Skyline Fuck",
  "Club Bathroom - Pulsing Heat",
  "Garden Shed - Hidden Lust",
  "Mountain Cabin - Fireplace Fire",
  "Beach Hut - Sandy Quickie",
  "Train Compartment - Rhythmic Thrusts",
  "Casino VIP Room - High-Stakes Pleasure",
  // Indoor Locations
  "Against the kitchen counter — bend over while they take you from behind",
  "In the shower — use waterproof toys for extra fun",
  "On the washing machine — let the vibrations add intensity",
  "Home office desk — roleplay boss and employee",
  "Walk-in closet — quick, passionate encounter",
  "Staircase—experiment with different heights",
  
  // Outdoor Adventures
  "Private beach at sunset — bring a blanket",
  "Secluded hiking trail — find a hidden spot",
  "Private pool after dark — underwater play",
  "Tent while camping — muffle your moans",
  "Private balcony at night — thrill of outdoors",
  
  // Car Play
  "Backseat parked somewhere private",
  "Remote parking garage — tinted windows help",
  "Drive-in movie—stay quiet and discrete",
  
  // Hotel Fun
  "Hotel balcony at night — thrill of being seen",
  "Luxury suite jacuzzi — water jets for pleasure",
  "Room with a view — against the window",
];

export default function NewLocationsScreen() {
  const [location, setLocation] = useState('');
  const [customLocations, setCustomLocations] = useState([]);
  const [customInput, setCustomInput] = useState('');

  const showRandomLocation = () => {
    const availableLocations = [...locations, ...customLocations];
    const randomLocation = availableLocations[Math.floor(Math.random() * availableLocations.length)];
    setLocation(randomLocation);
    Speech.speak(`New Spot: ${randomLocation}`, { pitch: 0.9, rate: 0.8 });
    Vibration.vibrate(300);
  };

  const addCustomLocation = () => {
    if (customInput.trim()) {
      setCustomLocations([...customLocations, customInput.trim()]);
      setCustomInput('');
      Speech.speak("Your hot spot’s added—try it out!", { pitch: 0.9, rate: 0.8 });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>New Locations</Text>
      <Text style={styles.subtitle}>Explore spicy new spots</Text>
      <View style={styles.locationBox}>
        <Text style={styles.locationText}>
          {location || 'Tap for a new passionate place...'}
        </Text>
      </View>
      <View style={styles.customInputContainer}>
        <TextInput
          style={styles.customInput}
          placeholder="Add your own sexy location..."
          placeholderTextColor="#999"
          value={customInput}
          onChangeText={setCustomInput}
        />
        <TouchableOpacity style={styles.addButton} onPress={addCustomLocation}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={showRandomLocation}>
        <Text style={styles.buttonText}>Get Location</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d002d',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 18,
    color: '#ff9999',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  locationBox: {
    backgroundColor: '#ff9966',
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 30,
    width: '100%',
  },
  locationText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
  },
  customInputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  customInput: {
    flex: 1,
    backgroundColor: '#330000',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ff9966',
  },
  addButton: {
    backgroundColor: '#ff9966',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginLeft: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ff9966',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});