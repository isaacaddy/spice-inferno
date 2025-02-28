import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Vibration } from 'react-native';
import * as Speech from 'expo-speech';

const tips = [
  "Use soft cuffs on wrists—tie to bedposts, then tease with a flogger.",
  "Blindfold and whisper commands—spank lightly until they beg.",
  "Introduce a paddle—alternate spanks with gentle kisses on their ass.",
  "Use a gag, then control their breathing with slow, firm touches.",
  "Tie their ankles, spread them, and edge them with a vibrator.",
  "Whip their thighs, then soothe with oil—build trust and heat.",
];
const activities = [
  // General Safety Tips
  "Establish safe words before starting",
  "Discuss boundaries and limits openly",
  "Start gentle and build intensity slowly",
  "Check in frequently with each other",
  "Keep safety scissors nearby for restraints",
  
  // For Dominants
  "Use silk scarves for gentle restraint",
  "Practice light spanking with hands only",
  "Give firm but caring commands",
  "Control pleasure with edging techniques",
  "Lead with confidence and care",
  "Write commands on partner's body",
  
  // For Submissives
  "Follow commands with enthusiasm",
  "Communicate limits clearly",
  "Express pleasure vocally",
  "Stay in character during roleplay",
  "Practice surrender with trust",
  
  // Advanced Play
  "Use ice cubes for temperature play",
  "Try sensory deprivation with blindfolds",
  "Experiment with gentle hair pulling",
  "Use feathers for sensory play",
  "Mix pleasure with light pain",
  "Practice rope art safely",
  "Create anticipation with teasing"
];
export default function BDSMScreen() {
  const [tip, setTip] = useState('');
  const [customTips, setCustomTips] = useState([]);
  const [customInput, setCustomInput] = useState('');

  const showRandomTip = () => {
    const availableTips = [...tips, ...customTips];
    const randomTip = availableTips[Math.floor(Math.random() * availableTips.length)];
    setTip(randomTip);
    Speech.speak(`BDSM Tip: ${randomTip}`, { pitch: 0.9, rate: 0.8 });
    Vibration.vibrate(300);
  };

  const addCustomTip = () => {
    if (customInput.trim()) {
      setCustomTips([...customTips, customInput.trim()]);
      setCustomInput('');
      Speech.speak("Your BDSM idea’s added—play safe and wild!", { pitch: 0.9, rate: 0.8 });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>BDSM</Text>
      <Text style={styles.subtitle}>Explore bondage, dominance, and more</Text>
      <View style={styles.tipBox}>
        <Text style={styles.tipText}>{tip || 'Tap for a kinky BDSM tip...'}</Text>
      </View>
      <View style={styles.customInputContainer}>
        <TextInput
          style={styles.customInput}
          placeholder="Add your own BDSM move..."
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
    backgroundColor: '#800080',
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
    borderColor: '#800080',
  },
  addButton: {
    backgroundColor: '#800080',
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
    backgroundColor: '#800080',
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