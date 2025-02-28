import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Vibration } from 'react-native';
import * as Speech from 'expo-speech';

const tips = [
  // Existing tips
  "Focus on deep breathing to control arousal",
  "Practice edging to build stamina",
  "Try different positions to manage intensity",
  "Use stop-start technique during play",
  "Communicate openly about pace and rhythm",
  "Explore tantric breathing exercises",
  "Focus on clitoral stimulation with fast, circular motions.",
  "Use a vibrator on high speed while he thrusts shallowly.",
  "Whisper dirty commands to build urgency—e.g., 'Make me cum now!'",
  "Combine oral with rapid finger play for explosive results.",
  "Edge yourself, then let him finish you with deep, quick thrusts.",
  "Grind your clit against his pelvic bone during missionary—hard and fast.",
  
  // Added tips for using guys
  "Stroke his shaft while teasing the tip with your tongue",
  "Massage his balls gently while going down on him",
  "Use both hands in twisting motions while stroking",
  "Alternate between fast and slow movements to build tension",
  "Focus on the sensitive spot under the tip",
  "Combine oral with hand movements in rhythm",
  "Use ice cubes during oral for temperature play",
  "Gently squeeze and release while stroking",
  "Maintain eye contact while pleasuring him",
  "Use your tongue in circular motions around the tip",
  "Mix deep throat with hand twisting motions",
  "Hum softly while going down to add vibration"
];

export default function CummingFasterScreen() {
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
      <Text style={styles.header}>Cumming Faster</Text>
      <Text style={styles.subtitle}>Master your pleasure timing</Text>
      <View style={styles.tipBox}>
        <Text style={styles.tipText}>{tip || 'Tap for a timing tip...'}</Text>
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
    backgroundColor: '#ff4040',
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
    borderColor: '#ff4040',
  },
  addButton: {
    backgroundColor: '#ff4040',
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
    backgroundColor: '#ff4040',
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