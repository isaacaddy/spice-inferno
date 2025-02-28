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

 // New 20 BDSM Tips (Explicit, Safe, and Seductive)
 "Bind their wrists behind their back, kneel them down, and tease their nipples with a feather until they squirm.",
 "Blindfold them, use a crop on their inner thighs, then reward with deep, slow kisses.",
 "Secure their ankles to a spreader bar, spank their ass with a belt, then massage with lotion.",
 "Gag them, tie their hands above their head, and edge their clit/dick with a buzzing toy.",
 "Wrap a silk rope around their chest, pull gently, and use a cane on their calves—softly.",
 "Blindfold and handcuff them, drip wax on their stomach, then lick it off slowly.",
 "Tie their wrists to the headboard, tease their ass with a plug, then spank with a paddle.",
 "Use a collar and leash, lead them to the bed, and whisper dirty orders while flogging lightly.",
 "Bind their ankles together, spread their thighs, and tease their entrance with a vibrator until they plead.",
 "Blindfold, gag, and tie them spread-eagle—alternate ice and warm oil on their skin.",
 "Secure their wrists with leather cuffs, spank their nipples lightly, then soothe with your tongue.",
 "Use a whip on their back, then kiss each mark, building trust and heat.",
 "Tie their hands behind, bend them over, and edge their ass with a finger—slow and firm.",
 "Blindfold and chain them to a chair, tease their thighs with a crop, then reward with oral.",
 "Wrap a rope harness around their torso, pull tight, and use a flogger on their thighs—build intensity.",
 "Gag and blindfold them, tie their ankles apart, and tease their clit/dick with a feather duster.",
 "Secure their wrists and ankles, drip hot wax on their chest, then cool with ice and kisses.",
 "Use a paddle on their ass, then massage deeply, whispering how much you crave their submission.",
 "Blindfold, cuff their wrists, and use a vibrator on their nipples—edge until they whimper.",
 "Tie their legs apart, spank with a crop, then soothe with slow, deep finger play.",
 "Bind their hands overhead, tease their ass with a plug, then flog their thighs until they moan.",
 "Gag them, tie to the bed, and alternate spanking with gentle caresses—build desperate need.",

 // New 20 BDSM Tips (Explicit, Safe, and Seductive)
 "Use a soft cuffs on wrists—tie to bedposts, then tease with a flogger.",
 "Blindfold and whisper commands—spank lightly until they beg.",
 "Introduce a paddle—alternate spanks with gentle kisses on their ass.",
 "Use a gag, then control their breathing with slow, firm touches.",
 "Tie their ankles, spread them, and edge them with a vibrator.",
 "Whip their thighs, then soothe with oil—build trust and heat.",

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