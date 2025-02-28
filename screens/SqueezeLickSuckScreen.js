import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Vibration, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

const actions = [
  "Squeeze their ass gently, then harder.",
  "Lick their neck slowly, teasing their pulse.",
  "Suck their nipples until they moan.",
  "Squeeze their thighs, working up to their crotch.",
  "Lick their lips, then bite softly.",
  "Suck their fingers, imagining it’s something else.",
  "Squeeze their chest, whispering dirty promises.",
  "Lick their inner thighs, stopping just short.",
  "Suck their earlobe, moaning lightly.",
  "Squeeze their hips, pulling them close for a grind.",
  "Lick their collarbone while squeezing their waist.",
  "Suck gently on their shoulder while grinding.",
  "Squeeze their inner thighs while kissing their neck.",
  "Lick from their ear down to their chest.",
  "Suck on their bottom lip during a deep kiss.",
  "Squeeze their hips while kissing down their stomach.",
  "Lick circles around their nipples, teasing them.",
  "Suck their neck while your hands explore.",
  "Squeeze their ass while pulling them against you.",
  "Lick along their spine, moving downward slowly.",
  "Suck their fingers while maintaining eye contact.",
  "Squeeze their thighs while kissing their inner knee.",
  "Lick behind their ear while grabbing their hips.",
  "Suck their nipples while squeezing their ass.",
  "Squeeze their chest while biting their shoulder.",
  "Lick their abs while your hands wander up.",
  "Suck their earlobe while grinding against them.",
  "Squeeze their sides while kissing down their neck.",
  "Lick their palm while maintaining eye contact.",
  "Suck their neck until they beg for more.",
  // New 20 Crazy, Explicit Actions
  "Squeeze their ass brutally, then spank it raw while licking their crack.",
  "Lick their neck wildly, biting hard and sucking until they gasp.",
  "Suck their nipples savagely, twisting them while grinding your crotch.",
  "Squeeze their thighs ferociously, clawing up to their dripping pussy/cock.",
  "Lick their lips like a beast, then bite deep and suck their tongue.",
  "Suck their fingers like you’re devouring their dick/pussy, moaning loud.",
  "Squeeze their chest violently, whispering filthy threats of domination.",
  "Lick their inner thighs maniacally, stopping just to bite their flesh.",
  "Suck their earlobe like a vampire, growling as you grind against them.",
  "Squeeze their hips possessively, pulling them into a frenzied grind.",
  "Lick their collarbone like a predator, squeezing their waist until they whimper.",
  "Suck their shoulder ravenously, leaving marks while you thrust against them.",
  "Squeeze their inner thighs brutally, kissing their neck with animal hunger.",
  "Lick from their ear to their chest, biting down hard on their nipples.",
  "Suck their bottom lip like you’re starving, then bite until they bleed lightly.",
  "Squeeze their hips wildly, kissing down their stomach to their soaking crotch.",
  "Lick circles around their nipples like a fiend, then suck until they scream.",
  "Suck their neck like a beast, clawing their back as you grind harder.",
  "Squeeze their ass savagely, pulling them into a raw, desperate grind.",
  "Lick along their spine like a wild animal, biting their lower back hard.",
  "Squeeze thighs while licking slowly",
  "Suck nipples while squeezing gently",
   "Use ice cube while licking for temperature play"

];

export default function SqueezeLickSuckScreen() {
  const [action, setAction] = useState('');
  const [customActions, setCustomActions] = useState([]);
  const [customInput, setCustomInput] = useState('');

  const rollAction = () => {
    const allActions = [...actions, ...customActions];
    const randomAction = allActions[Math.floor(Math.random() * allActions.length)];
    setAction(randomAction);
    Speech.speak(`Do this: ${randomAction}`, { pitch: 0.9, rate: 0.8 });
    Vibration.vibrate(300);
  };

  const addCustomAction = () => {
    if (customInput.trim()) {
      setCustomActions([...customActions, customInput.trim()]);
      setCustomInput('');
      Speech.speak("New action added", { pitch: 0.9, rate: 0.8 });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Squeeze | Lick | Suck</Text>
      <Text style={styles.subtitle}>Spice up your foreplay by Dr. Tara</Text>
      
      <View style={styles.customInputContainer}>
        <TextInput
          style={styles.customInput}
          placeholder="Add your own spicy action..."
          placeholderTextColor="#999"
          value={customInput}
          onChangeText={setCustomInput}
        />
        <TouchableOpacity style={styles.addButton} onPress={addCustomAction}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionBox}>
        <Text style={styles.actionText}>
          {action || 'Tap to ignite your foreplay...'}
        </Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={rollAction}>
        <Text style={styles.buttonText}>Next Move</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a0000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
    marginBottom: 20,
    fontStyle: 'italic',
  },
  actionBox: {
    backgroundColor: '#330000',
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ff4040',
    marginBottom: 30,
    minHeight: 150,
    justifyContent: 'center',
    width: '100%',
  },
  actionText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
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
    borderColor: '#ff1a1a',
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
});