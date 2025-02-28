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
  "Sit on his face, take his cock deep in your throat, and moan to vibrate him while he licks.",
  "Lie back-to-back, reach between to lick and suck—focus on syncing your breaths.",
  "Use your fingers to spread his balls while you suck, as he teases your clit with his tongue.",
  "Position him on top, let him thrust into your mouth while you grind your clit on his chin.",
  "Alternate fast sucks on his tip with slow licks down his shaft—match his tongue’s rhythm on you.",
  "Whisper how much you love his taste while he flicks your clit—build heat with words.",
  "Kneel over him, take him deep, and rock your hips so he can lick deeper—moan loudly.",
  "Lie side by side, use a vibrator on yourself while sucking him—let him feel the buzz.",
  "Position him below, suck his balls while he tongues your pussy—switch focus every 30 seconds.",
  "Grind your pussy on his face, swallow his cock whole, and hum to intensify the pleasure.",
  "Sit on his chest, lean forward to suck, and let him lick your ass—alternate between holes.",
  "Lie on your sides, take turns edging each other with oral—stop just before climax, then resume.",
  "Use your hands to grip his hips, suck hard, while he laps at your clit—sync the pressure.",
  "Position him above, let him face-fuck you while you tease his balls with your tongue.",
  "Whisper filthy 69 fantasies—e.g., 'I’ll cum on your face while you fill my throat'—then act.",
  "Kneel over him, suck deeply while he uses a toy on your clit—match speeds for mutual climax.",
  "Lie back-to-back, reach around to lick and suck—focus on long, slow strokes together.",
  "Position him below, grind your clit on his nose while swallowing his cock—build desperate need.",
  "Alternate between sucking his tip and licking his shaft—let him match with clit flicks and sucks.",
  "Sit on his face, take him deep, and moan how you’ll both explode—push for simultaneous ecstasy.",
  "Practice edging techniques together",
  "Incorporate gentle fingering while using tongue"
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