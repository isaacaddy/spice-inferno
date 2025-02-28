import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Vibration } from 'react-native';
import * as Speech from 'expo-speech';

const tips = [
  // For everyone
  "Set clear boundaries—discuss limits before starting",
  "Start with light touching—let everyone explore slowly",
  "Use blindfolds to heighten anticipation",
  "Take turns directing positions",
  "Explore simultaneous touch",
  "Whisper dirty fantasies to build arousal",
  
  // For women with couples
  "Guide her hands while pleasuring him together",
  "Take turns giving and receiving oral attention",
  "Form a triangle for mutual stimulation",
  "Use toys while others watch or join",
  "Practice synchronized movements together",
  "Share kisses while taking turns with him",
  
  // For men with couples
  "Focus on both partners equally",
  "Let them guide your movements and pace",
  "Alternate between both partners smoothly",
  "Use hands and mouth simultaneously",
  "Follow their lead and communication",
  "Create a rhythm between all three",

  // For men with friends
  "Focus on both partners equally",
  "Let them guide your movements and pace",
  "Alternate between both partners smoothly",
  "Use hands and mouth simultaneously",
  "Follow their lead and communication",
  "Create a rhythm between all three",

  // For women with friends
  "Focus on both partners equally",

  "Start with light touching—let a third join slowly with kisses.",
  "Focus on oral for one partner while the other watches, then switch.",
  "Use blindfolds to heighten anticipation—let the third guide the action.",
  "Take turns directing positions—e.g., DP with clear communication.",
  "Explore simultaneous touch—hands and mouths on all at once.",
  "Whisper dirty threesome fantasies to build arousal for all.",
];

export default function ThreesomesScreen() {
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
      Speech.speak("Your threesome tip’s added—get wild!", { pitch: 0.9, rate: 0.8 });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Threesomes</Text>
      <Text style={styles.subtitle}>Explore passion with a third</Text>
      <View style={styles.tipBox}>
        <Text style={styles.tipText}>{tip || 'Tap for a spicy threesome tip...'}</Text>
      </View>
      <View style={styles.customInputContainer}>
        <TextInput
          style={styles.customInput}
          placeholder="Add your own threesome idea..."
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
    backgroundColor: '#ff66b3',
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
    borderColor: '#ff66b3',
  },
  addButton: {
    backgroundColor: '#ff66b3',
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
    backgroundColor: '#ff66b3',
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