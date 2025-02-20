import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Vibration, Animated, Easing } from 'react-native';
import * as Speech from 'expo-speech';

// Lustful games by intensity (unchanged from previous)
const lustGames = {
  tease: [
    "Light a candle, hold his gaze, and whisper how you'll worship his cock tonight—then kiss him so deep he feels your heat.",
    "Run your nails down his chest, tell him he's your king, then lick his neck slow until he's hard as fuck.",
    "Press your body against his, sway to imaginary music, and murmur how wet you're getting just thinking of him inside you.",
    "Trace his jaw with your lips, call him your forever lover, and nibble his ear until he's pressing against you.",
    "Sit on his lap, stare into his soul, and purr how you'll melt when he finally fills you—then bite his lip soft.",
    "Dance your fingers over his abs, tell him he's your obsession, and kiss his collarbone until he groans.",
  ],
  heat: [
    "Straddle him, grind your soaking pussy against his thigh, and beg him to touch you—but he can only use his breath for now.",
    "Blindfold him, strip slow, and describe how your cunt's throbbing for his dick—then graze it with your lips.",
    "Kiss his inner thighs, inching closer to his cock, and moan how you'll soak him when he finally fucks you.",
    "Slide your wet panties down your legs, let him smell your arousal, and whisper how you're aching for his tongue.",
    "Press your tits against his chest, rock your hips slow, and tell him your pussy's crying for his thick shaft.",
    "Run your tongue up his spine, press your naked heat against his back, and whimper how you'll cum the second he's in you.",
  ],
  inferno: [
    "Get on your knees, suck his dick like it's your last meal, and tell him you're dripping for him to ram you senseless.",
    "Spread your legs wide, finger yourself while he watches, and scream how you need his thick cock to stretch you open.",
    "Ride his face until you're gushing, then demand he fucks you so hard you can't walk—make him feel your pussy clench.",
    "Bend over, spread your ass, and tell him to pound your wet cunt until you're screaming his name and begging for his cum.",
    "Shove him down, climb on top, and ride his cock until your juices drip down his balls—scream how you're his slut.",
    "Pin his wrists, rub your sopping pussy over his dick, and growl that you'll cum all over him if he doesn't fuck you now.",
    "Shove your soaked panties in his mouth, ride his thigh, and beg him to fuck your dripping hole until you squirt.",
    "Spread your pussy lips wide, let him see how wet you are, and demand he buries his cock in you until you're a shaking wreck.",
    "Finger your ass while he watches, moan how you need his dick in both holes, and plead for him to ruin you.",
    "Grind your clit on his tongue until you're dripping down his chin, then scream for him to slam his cock into your soaked cunt.",
  ],
};

export default function LustScreen() {
  const [game, setGame] = useState('');
  const [intensity, setIntensity] = useState('tease');
  const [timer, setTimer] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [customGames, setCustomGames] = useState([]);
  const [customInput, setCustomInput] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);

  // Animation refs
  const spinValue = useRef(new Animated.Value(0)).current; // Wheel spin
  const pulseValue = useRef(new Animated.Value(1)).current; // Pulsing glow
  const dripValue = useRef(new Animated.Value(0)).current; // Dripping text

  // Timer logic
  useEffect(() => {
    let interval;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0 && isTimerActive) {
      setIsTimerActive(false);
      Speech.speak("Time's up, you filthy wet queen—shove that cock in your pussy now.", { pitch: 0.9, rate: 0.8 });
      Vibration.vibrate([200, 200, 200]);
    }
    return () => clearInterval(interval);
  }, [timer, isTimerActive]);

  // Pulse animation loop
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseValue, {
          toValue: 1.2,
          duration: 500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseValue, {
          toValue: 1,
          duration: 500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [pulseValue]);

  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setGame('');
    dripValue.setValue(0); // Reset drip

    // Spin animation
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      // After spin, select game and trigger drip
      let gamePool = lustGames[intensity];
      if (intensity === 'inferno' && customGames.length > 0) gamePool = [...gamePool, ...customGames];
      const randomIndex = Math.floor(Math.random() * gamePool.length);
      const newGame = gamePool[randomIndex];
      setGame(newGame);
      setTimer(intensity === 'tease' ? 60 : intensity === 'heat' ? 90 : 120);
      setIsTimerActive(true);
      Speech.speak(newGame, { pitch: 0.9, rate: 0.8 });
      Vibration.vibrate(500);

      // Drip animation
      Animated.timing(dripValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }).start(() => setIsSpinning(false));
    });
  };

  const addCustomGame = () => {
    if (customInput.trim()) {
      setCustomGames([...customGames, customInput.trim()]);
      setCustomInput('');
      Speech.speak("Your dirty game's locked in. He won't survive you.", { pitch: 0.9, rate: 0.8 });
    }
  };

  // Animation interpolations
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '1080deg'], // 3 full spins
  });
  const pulse = pulseValue.interpolate({
    inputRange: [1, 1.2],
    outputRange: [1, 1.1], // Changed from strings to numbers
  });
  const drip = dripValue.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0], // Text "drips" down from above
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lustful Games</Text>
      <Text style={styles.subtitle}>For the ladies who crave it deep and dripping...</Text>

      {/* Intensity Buttons */}
      <View style={styles.intensityButtons}>
        {['tease', 'heat', 'inferno'].map((level) => (
          <TouchableOpacity
            key={level}
            style={[styles.levelButton, intensity === level && styles.activeLevel]}
            onPress={() => setIntensity(level)}
          >
            <Text style={styles.levelText}>{level.charAt(0).toUpperCase() + level.slice(1)}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Custom Game Input */}
      <View style={styles.customInputContainer}>
        <TextInput
          style={styles.customInput}
          placeholder="Add your wettest lust game..."
          placeholderTextColor="#999"
          value={customInput}
          onChangeText={setCustomInput}
        />
        <TouchableOpacity style={styles.addButton} onPress={addCustomGame}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* Game Display */}
      <View style={styles.gameBox}>
        <Animated.Text
          style={[
            styles.gameText,
            game && { transform: [{ translateY: drip }] }, // Dripping effect
          ]}
        >
          {game || (isSpinning ? 'Spinning your filthy fate...' : `Tap the wheel to spin your ${intensity} lust...`)}
        </Animated.Text>
        {isTimerActive && <Text style={styles.timer}>{timer}s</Text>}
      </View>

      {/* Spin Wheel with Pulse */}
      <TouchableOpacity onPress={spinWheel} disabled={isSpinning}>
        <Animated.View
          style={[
            styles.wheel,
            { transform: [{ rotate: spin }, { scale: pulse }] },
          ]}
        >
          <Text style={styles.wheelText}>SPIN</Text>
        </Animated.View>
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
  intensityButtons: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  levelButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#4d0000',
  },
  activeLevel: {
    backgroundColor: '#ff4d4d',
  },
  levelText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
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
  gameBox: {
    backgroundColor: '#330000',
    padding: 25,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ff1a1a',
    marginBottom: 40,
    minHeight: 250,
    justifyContent: 'center',
    width: '100%',
  },
  gameText: {
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
    backgroundColor: '#ff1a1a',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#ff9999', // Softer red for glow
    shadowColor: '#ff1a1a',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  wheelText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});