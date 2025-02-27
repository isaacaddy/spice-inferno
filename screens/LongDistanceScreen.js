import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';

const activities = [
  "Send a steamy voice message describing what you'd do to them",
  "Take a sexy selfie (keep it classy) and send it",
  "Write them an erotic story about your next meetup",
  "Have a video call date - dress up nice for each other",
  "Play truth or dare over text for 10 minutes",
  "Send them a voice recording of your pleasure sounds",
  "Share your favorite fantasy about them in detail",
  "Do a virtual workout together - show off those moves",
  "Have a virtual dinner date - same meal, different places",
  "Send them a list of 5 things you'll do when reunited",
];

export default function LongDistanceScreen() {
  const [currentActivity, setCurrentActivity] = useState('');

  const getRandomActivity = () => {
    const randomIndex = Math.floor(Math.random() * activities.length);
    const newActivity = activities[randomIndex];
    setCurrentActivity(newActivity);
    Speech.speak(newActivity, { pitch: 0.9, rate: 0.8 });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Long Distance Love</Text>
      <Text style={styles.subtitle}>Keep the flame burning across miles...</Text>
      
      <View style={styles.activityBox}>
        <Text style={styles.activityText}>
          {currentActivity || "Tap below for your long-distance activity..."}
        </Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={getRandomActivity}>
        <Text style={styles.buttonText}>Next Activity</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a0000',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#ff1a1a',
    marginTop: 40,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#ff9999',
    marginBottom: 40,
    fontStyle: 'italic',
  },
  activityBox: {
    backgroundColor: '#330000',
    padding: 25,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ff1a1a',
    marginBottom: 40,
    minHeight: 200,
    width: '100%',
    justifyContent: 'center',
  },
  activityText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#ff1a1a',
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