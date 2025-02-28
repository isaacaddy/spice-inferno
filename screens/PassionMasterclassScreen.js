import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Animated } from 'react-native';
import * as Speech from 'expo-speech';
import * as Vibration from 'expo-haptics';

// Icons are simulated with text for simplicity; use actual icons (e.g., from 'react-native-vector-icons') in production
const categories = [
  { title: 'Cumming faster', color: '#ff4040', icon: '❤️', screen: 'CummingFaster' },
  { title: 'Threesomes', color: '#ff66b3', icon: '👫', screen: 'Threesomes' },
  { title: 'BDSM', color: '#800080', icon: '🔒', screen: 'BDSM' },
  { title: 'New Locations', color: '#ff9966', icon: '📍', screen: 'NewLocations' },
  { title: '69-ing', color: '#ff4d4d', icon: '🔥', screen: 'SixtyNine' },
  { title: 'Swinging & Swapping', color: '#ff80bf', icon: '👯', screen: 'SwingingSwapping' },
];

export default function PassionMasterclassScreen({ navigation }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const scaleValue = useRef(new Animated.Value(1)).current;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Passion Masterclass</Text>
        <Text style={styles.subtitle}>Master the art of pleasure</Text>

        <TouchableOpacity
          style={[styles.button, styles.button1]}
          onPress={() => navigation.navigate('CummingFaster')}
        >
          <Text style={styles.buttonText}>Cumming Faster</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.button2]}
          onPress={() => navigation.navigate('Threesomes')}
        >
          <Text style={styles.buttonText}>Threesomes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.button3]}
          onPress={() => navigation.navigate('BDSM')}
        >
          <Text style={styles.buttonText}>BDSM</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.button4]}
          onPress={() => navigation.navigate('NewLocations')}
        >
          <Text style={styles.buttonText}>New Locations</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.button5]}
          onPress={() => navigation.navigate('SixtyNine')}
        >
          <Text style={styles.buttonText}>69-ing</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.button6]}
          onPress={() => navigation.navigate('SwingingSwapping')}
        >
          <Text style={styles.buttonText}>Swinging & Swapping</Text>
        </TouchableOpacity>
      </View>
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
    paddingTop: 60,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#ff1a1a',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 18,
    color: '#ff9999',
    marginBottom: 30,
    fontStyle: 'italic',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button1: {
    backgroundColor: '#ff1a75', // Pink
  },
  button2: {
    backgroundColor: '#ff4d94', // Light pink
  },
  button3: {
    backgroundColor: '#800080', // Purple
  },
  button4: {
    backgroundColor: '#ff4d4d', // Red
  },
  button5: {
    backgroundColor: '#ff6666', // Light red
  },
  button6: {
    backgroundColor: '#9932cc', // Dark orchid
  },
});