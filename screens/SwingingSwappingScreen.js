import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Vibration } from 'react-native';
import * as Speech from 'expo-speech';

const tips = [
  "Set clear boundaries—discuss limits before swapping partners.",
  "Start with soft touches—let everyone explore slowly.",
  "Use blindfolds to heighten mystery and anticipation.",
  "Take turns directing the action—guide partners gently.",
  "Explore simultaneous play with clear consent.",
  "Share fantasies to build excitement beforehand.",
  "Establish safe words for all participants.",
  "Practice open communication throughout.",
  "Focus on comfort and trust building.",
  "Keep checking in with all partners.",
  "Start with light touching—let everyone explore slowly with kisses.",
  "Use a blindfold for a third—heighten the mystery of swapping.",
  "Take turns directing the action—e.g., guide a swap in a circle.",
  "Explore simultaneous play—hands and mouths on multiple partners.",
  "Whisper fantasies about others—build arousal for the swap.",
];

export default function SwingingSwappingScreen() {
  const [tip, setTip] = useState('');
  const [customTips, setCustomTips] = useState([]);
  const [customInput, setCustomInput] = useState('');

  const showRandomTip = () => {
    const availableTips = [...tips, ...customTips];
    const randomTip = availableTips[Math.floor(Math.random() * availableTips.length)];
    setTip(randomTip);
    Speech.speak(`Tip: ${randomTip}`, { pitch: 0.9, rate: 0.8 });
    Vibration.vibrate(300);
  };

  const addCustomTip = () => {
    if (customInput.trim()) {
      setCustomTips([...customTips, customInput.trim()]);
      setCustomInput('');
      Speech.speak("Your tip has been added!", { pitch: 0.9, rate: 0.8 });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Swinging & Swapping</Text>
      <Text style={styles.subtitle}>Explore consensual adventures</Text>
      <View style={styles.tipBox}>
        <Text style={styles.tipText}>{tip || 'Tap for a swinging tip...'}</Text>
      </View>
      <View style={styles.customInputContainer}>
        <TextInput
          style={styles.customInput}
          placeholder="Add your own tip..."
          placeholderTextColor="#999"
          value={customInput}
          onChangeText={setCustomInput}
        />
        <TouchableOpacity style={styles.addButton} onPress={addCustomTip}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={showRandomTip}>
        <Text style={styles.buttonText}>Get Tip</Text>
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
  tipBox: {
    backgroundColor: '#ff80bf',
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 30,
    width: '100%',
  },
  tipText: {
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
    borderColor: '#ff80bf',
  },
  addButton: {
    backgroundColor: '#ff80bf',
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
    backgroundColor: '#ff80bf',
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