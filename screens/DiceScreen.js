import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Vibration, Animated, Easing } from 'react-native';
import * as Speech from 'expo-speech';

// Default actions and body parts (romantic to spicy)
const defaultActions = [
  "Kiss", "Lick", "Touch", "Massage", "Tease", "Bite", "Suck", "Caress", "Grind", "Spank"
];
const defaultBodyParts = [
  "Lips", "Neck", "Chest", "Back", "Thighs", "Butt", "Ears", "Hands", "Inner Thighs", "Nipples"
];
const timerOptions = [15, 30, 45, 60, 90]; // Seconds

export default function DiceScreen() {
  const [action, setAction] = useState('');
  const [bodyPart, setBodyPart] = useState('');
  const [timer, setTimer] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [customActions, setCustomActions] = useState([]);
  const [customBodyParts, setCustomBodyParts] = useState([]);
  const [customActionInput, setCustomActionInput] = useState('');
  const [customBodyPartInput, setCustomBodyPartInput] = useState('');

  // Animation refs
  const actionSpin = useRef(new Animated.Value(0)).current;
  const bodyPartSpin = useRef(new Animated.Value(0)).current;
  const timerSpin = useRef(new Animated.Value(0)).current;

  // Timer logic
  useEffect(() => {
    let interval;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0 && isTimerActive) {
      setIsTimerActive(false);
      Speech.speak("Time’s up, lover—keep the heat going!", { pitch: 0.9, rate: 0.8 });
      Vibration.vibrate([200, 200]);
    }
    return () => clearInterval(interval);
  }, [timer, isTimerActive]);

  const rollDice = () => {
    if (isRolling) return;
    setIsRolling(true);
    setAction('');
    setBodyPart('');
    setTimer(0);

    // Spin animations
    Animated.parallel([
      Animated.timing(actionSpin, {
        toValue: 1,
        duration: 1500,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(bodyPartSpin, {
        toValue: 1,
        duration: 1500,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(timerSpin, {
        toValue: 1,
        duration: 1500,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Set results after spin
      const actionPool = [...defaultActions, ...customActions];
      const bodyPartPool = [...defaultBodyParts, ...customBodyParts];
      const newAction = actionPool[Math.floor(Math.random() * actionPool.length)];
      const newBodyPart = bodyPartPool[Math.floor(Math.random() * bodyPartPool.length)];
      const newTimer = timerOptions[Math.floor(Math.random() * timerOptions.length)];

      setAction(newAction);
      setBodyPart(newBodyPart);
      setTimer(newTimer);
      setIsTimerActive(true);
      Speech.speak(`${newAction} their ${newBodyPart} for ${newTimer} seconds`, { pitch: 0.9, rate: 0.8 });
      Vibration.vibrate(500);
      setIsRolling(false);

      // Reset spins
      actionSpin.setValue(0);
      bodyPartSpin.setValue(0);
      timerSpin.setValue(0);
    });
  };

  const addCustomAction = () => {
    if (customActionInput.trim()) {
      setCustomActions([...customActions, customActionInput.trim()]);
      setCustomActionInput('');
      Speech.speak("Your naughty action’s in—roll it!", { pitch: 0.9, rate: 0.8 });
    }
  };

  const addCustomBodyPart = () => {
    if (customBodyPartInput.trim()) {
      setCustomBodyParts([...customBodyParts, customBodyPartInput.trim()]);
      setCustomBodyPartInput('');
      Speech.speak("Your spicy spot’s added—let’s play!", { pitch: 0.9, rate: 0.8 });
    }
  };

  // Spin interpolations
  const actionRotate = actionSpin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg'], // 2 spins
  });
  const bodyPartRotate = bodyPartSpin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg'],
  });
  const timerRotate = timerSpin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg'],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Intimacy Dice</Text>
      <Text style={styles.subtitle}>Roll for romance and spice...</Text>

      {/* Result Display */}
      <View style={styles.resultBox}>
        <Text style={styles.resultText}>
          {isRolling
            ? 'Rolling the dice...'
            : action && bodyPart
            ? `${action} their ${bodyPart}`
            : 'Tap to roll your fate...'}
        </Text>
        {isTimerActive && <Text style={styles.timer}>{timer}s</Text>}
      </View>

      {/* Dice Rollers */}
      <View style={styles.diceContainer}>
        <Animated.View style={[styles.die, { transform: [{ rotate: actionRotate }] }]}>
          <Text style={styles.dieText}>Action</Text>
        </Animated.View>
        <Animated.View style={[styles.die, { transform: [{ rotate: bodyPartRotate }] }]}>
          <Text style={styles.dieText}>Body</Text>
        </Animated.View>
        <Animated.View style={[styles.die, { transform: [{ rotate: timerRotate }] }]}>
          <Text style={styles.dieText}>Time</Text>
        </Animated.View>
      </View>

      {/* Roll Button */}
      <TouchableOpacity style={styles.rollButton} onPress={rollDice} disabled={isRolling}>
        <Text style={styles.rollButtonText}>Roll Dice</Text>
      </TouchableOpacity>

      {/* Custom Inputs */}
      <View style={styles.customContainer}>
        <TextInput
          style={styles.customInput}
          placeholder="Add a spicy action..."
          placeholderTextColor="#999"
          value={customActionInput}
          onChangeText={setCustomActionInput}
        />
        <TouchableOpacity style={styles.addButton} onPress={addCustomAction}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.customContainer}>
        <TextInput
          style={styles.customInput}
          placeholder="Add a hot body part..."
          placeholderTextColor="#999"
          value={customBodyPartInput}
          onChangeText={setCustomBodyPartInput}
        />
        <TouchableOpacity style={styles.addButton} onPress={addCustomBodyPart}>
          <Text style={styles.addButtonText}>+</Text>
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
  resultBox: {
    backgroundColor: '#330000',
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ff1a1a',
    marginBottom: 30,
    minHeight: 100,
    justifyContent: 'center',
    width: '100%',
  },
  resultText: {
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
  diceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
  },
  die: {
    width: 80,
    height: 80,
    backgroundColor: '#ff4d4d',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  dieText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  rollButton: {
    backgroundColor: '#ff1a1a',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 20,
  },
  rollButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  customContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
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
    paddingHorizontal: 15,
    borderRadius: 10,
    marginLeft: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});