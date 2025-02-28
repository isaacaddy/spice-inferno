import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Vibration, Animated, Easing } from 'react-native';
import * as Speech from 'expo-speech';

const defaultScenarios = [
  "You’re a seductive spy, I’m your captured target—interrogate me with kisses.",
  "I’m your dominant boss, you’re my naughty intern—earn your raise with oral.",
  "You’re a horny nurse, I’m your patient—heal me with your touch.",
  "I’m a rugged pirate, you’re my captive—ravage me on deck.",
  "You’re a mysterious stranger, I’m your lover—seduce me in a dark alley.",
  "I’m your kinky teacher, you’re my student—stay after class for punishment.",
  "You’re a sultry vampire, I’m your human prey—bite and claim me.",
  "I’m a cop, you’re a thief—cuff and frisk me roughly.",
  "You’re a sexy maid, I’m your master—clean me with your lips.",
  "I’m a rockstar, you’re my groupie—worship me backstage.",
  // New 20 Roleplay Scenarios (Explicit, Romantic, and Playful)
  "You’re a fierce warrior, I’m your conquered queen—claim me on the battlefield.",
  "I’m your billionaire lover, you’re my escort—seduce me for a million-dollar night.",
  "You’re a naughty astronaut, I’m your mission control—guide me with your body.",
  "I’m a rugged cowboy, you’re my saloon girl—ride me in the barn.",
  "You’re a seductive witch, I’m your enchanted victim—cast a spell with your lips.",
  "I’m your mafia boss, you’re my undercover agent—interrogate me with a grind.",
  "You’re a sultry librarian, I’m your forbidden patron—fuck me in the stacks.",
  "I’m a knight, you’re my damsel—rescue me with passionate thrusts.",
  "You’re a wild animal trainer, I’m your tamed beast—dominate me with a whip.",
  "I’m a chef, you’re my sous-chef—taste me on the kitchen counter.",
  "You’re a daring acrobat, I’m your partner—swing me into ecstasy.",
  "I’m your personal trainer, you’re my client—work out my cock with your mouth.",
  "You’re a seductive mermaid, I’m your sailor—drown me in your ocean of lust.",
  "I’m a prince, you’re my princess—fuck me in the royal bedchamber.",
  "You’re a rebellious artist, I’m your muse—paint my body with your tongue.",
  "I’m a detective, you’re my suspect—cuff me and extract confessions with kisses.",
  "You’re a fiery dancer, I’m your audience—perform a striptease, then ride me.",
  "I’m a werewolf, you’re my moonlit lover—hunt and devour me under the stars.",
  "You’re a naughty flight attendant, I’m your passenger—join me in the lavatory.",
  "I’m a king, you’re my concubine—worship my throne with your body.",
];

export default function RoleplayScreen() {
  const [scenario, setScenario] = useState('');
  const [timer, setTimer] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [customScenarios, setCustomScenarios] = useState([]);
  const [customInput, setCustomInput] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const spinValue = useRef(new Animated.Value(0)).current;

  // Timer logic
  useEffect(() => {
    let interval;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0 && isTimerActive) {
      setIsTimerActive(false);
      Speech.speak("Time’s up, lover—keep the roleplay hot!", { pitch: 0.9, rate: 0.8 });
      Vibration.vibrate([200, 200]);
    }
    return () => clearInterval(interval);
  }, [timer, isTimerActive]);

  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setScenario('');
    setTimer(0);

    // Spin animation
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      const scenarioPool = [...defaultScenarios, ...customScenarios];
      const randomScenario = scenarioPool[Math.floor(Math.random() * scenarioPool.length)];
      setScenario(randomScenario);
      setTimer(120); // 2 minutes for roleplay
      setIsTimerActive(true);
      Speech.speak(`Roleplay: ${randomScenario}`, { pitch: 0.9, rate: 0.8 });
      Vibration.vibrate(500);
      setIsSpinning(false);
      spinValue.setValue(0); // Reset spin
    });
  };

  const addCustomScenario = () => {
    if (customInput.trim()) {
      setCustomScenarios([...customScenarios, customInput.trim()]);
      setCustomInput('');
      Speech.speak("Your kinky roleplay’s added—play it out!", { pitch: 0.9, rate: 0.8 });
    }
  };

  // Spin interpolation
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '1080deg'], // 3 full spins
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Roleplay Games</Text>
      <Text style={styles.subtitle}>Spice up your connection with roles</Text>

      {/* Scenario Display */}
      <View style={styles.scenarioBox}>
        <Text style={styles.scenarioText}>
          {isSpinning
            ? 'Spinning your roleplay...'
            : scenario || 'Tap the wheel to spin a spicy role...'}
        </Text>
        {isTimerActive && <Text style={styles.timer}>{timer}s</Text>}
      </View>

      {/* Spin Wheel */}
      <TouchableOpacity onPress={spinWheel} disabled={isSpinning}>
        <Animated.View style={[styles.wheel, { transform: [{ rotate: spin }] }]}>
          <Text style={styles.wheelText}>SPIN</Text>
        </Animated.View>
      </TouchableOpacity>

      {/* Custom Input */}
      <View style={styles.customInputContainer}>
        <TextInput
          style={styles.customInput}
          placeholder="Add your own roleplay scenario..."
          placeholderTextColor="#999"
          value={customInput}
          onChangeText={setCustomInput}
        />
        <TouchableOpacity style={styles.addButton} onPress={addCustomScenario}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
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
  scenarioBox: {
    backgroundColor: '#330000',
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ff8080',
    marginBottom: 30,
    minHeight: 150,
    justifyContent: 'center',
    width: '100%',
  },
  scenarioText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
  },
  timer: {
    fontSize: 18,
    color: '#ff4d4d',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  wheel: {
    width: 120,
    height: 120,
    backgroundColor: '#ff8080',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    marginBottom: 20,
  },
  wheelText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  customInputContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  customInput: {
    flex: 1,
    backgroundColor: '#330000',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ff8080',
  },
  addButton: {
    backgroundColor: '#ff8080',
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