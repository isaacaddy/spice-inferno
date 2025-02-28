import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Vibration } from 'react-native';
import * as Speech from 'expo-speech';

const tips = [
  "Start on top, sucking him deep while he licks your clit—sync your rhythm.",
  "Lie side by side, take turns focusing on each other’s sensitive spots.",
  "Use hands to stroke while licking—build intensity until you both moan.",
  "Position him below, grind your pussy on his face while you swallow him.",
  "Alternate deep sucks with light flicks—keep it slow, then speed up.",
  "Whisper dirty encouragements—e.g., 'Taste me while I take you deep.'",
];

export default function SixtyNineScreen() {
  const [tip, setTip] = useState('');
  const [customTips, setCustomTips] = useState([]);
  const [customInput, setCustomInput] = useState('');

  const showRandomTip = () => {
    const availableTips = [...tips, ...customTips];
    const randomTip = availableTips[Math.floor(Math.random() * availableTips.length)];
    setTip(randomTip);
    Speech.speak(`69 Tip: ${randomTip}`, { pitch: 0.9, rate: 0.8 });
    Vibration.vibrate(300);
  };

  const addCustomTip = () => {
    if (customInput.trim()) {
      setCustomTips([...customTips, customInput.trim()]);
      setCustomInput('');
      Speech.speak("Your 69 move’s added—get oral!", { pitch: 0.9, rate: 0.8 });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>69-ing</Text>
      <Text style={styles.subtitle}>Master the mutual oral thrill</Text>
      <View style={styles.tipBox}>
        <Text style={styles.tipText}>{tip || 'Tap for a steamy 69 tip...'}</Text>
      </View>
      <View style={styles.customInputContainer}>
        <TextInput
          style={styles.customInput}
          placeholder="Add your own 69 technique..."
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
    backgroundColor: '#ff4d4d',
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
    borderColor: '#ff4d4d',
  },
  addButton: {
    backgroundColor: '#ff4d4d',
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
    backgroundColor: '#ff4d4d',
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