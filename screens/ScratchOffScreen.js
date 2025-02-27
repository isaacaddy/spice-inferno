import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Vibration, Animated } from 'react-native';
import * as Speech from 'expo-speech';

// Scratch-off options (expanded for variety)
const scratchOptions = [
  "69 Position - Bedroom",
  "Doggy Style - Kitchen Counter",
  "Cowgirl - Living Room Floor",
  "Standing - Shower",
  "Missionary - Bed",
  "Reverse Cowgirl - Car Backseat",
  "Oral - Couch",
  "Spanking - Dining Table",
  "Blindfold - Balcony",
  "Massage - Bath",
  "Roleplay - Hotel Room",
  "Toy Play - Bedroom Closet",
  "Edging - Kitchen Floor",
  "Tease - Car Trunk",
  "Extra: Candle Wax - Any Surface",
  "Extra: Ice Play - Bed",
  "Extra: Blind Trust - Anywhere",
  "Extra: Dirty Talk - Whisper Only",
  "Extra: Strip Tease - Dance Floor",
  "Extra: Bondage - Bedpost",
];

export default function ScratchOffScreen() {
  const [revealed, setRevealed] = useState([]);
  const [currentAction, setCurrentAction] = useState('');
  const [scratchProgress, setScratchProgress] = useState(0);
  const opacity = useRef(new Animated.Value(1)).current;
  const scale = useRef(new Animated.Value(1)).current;

  const handleScratch = () => {
    if (scratchProgress >= 100 || scratchOptions.length === revealed.length) return;
    
    setScratchProgress(prev => Math.min(prev + 20, 100));
    
    // Enhanced scratch animation
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 0.9,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        })
      ])
    ]).start(() => {
      if (scratchProgress >= 80) {
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    });
    
    Vibration.vibrate(50); // Quick vibration feedback
  };

  // Update the scratchOverlay style in your return JSX
  <Animated.View 
    style={[
      styles.scratchOverlay, 
      { 
        opacity,
        transform: [{ scale }],
        backgroundColor: `rgba(51, 0, 0, ${opacity.__getValue()})`,
      }
    ]}
  >
    <Text style={styles.overlayText}>
      {scratchProgress < 100 ? `Scratch ${scratchProgress}%` : 'Revealed!'}
    </Text>
  </Animated.View>
  useEffect(() => {
    if (scratchProgress >= 100) {
      const available = scratchOptions.filter(option => !revealed.includes(option));
      if (available.length > 0) {
        const randomOption = available[Math.floor(Math.random() * available.length)];
        setCurrentAction(randomOption);
        setRevealed([...revealed, randomOption]);
        Speech.speak(`Reveal: ${randomOption}`, { pitch: 0.9, rate: 0.8 });
        Vibration.vibrate(300);
        setScratchProgress(0);
      } else {
        Speech.speak("No more secrets to reveal—start playing!", { pitch: 0.9, rate: 0.8 });
      }
    }
  }, [scratchProgress, revealed]);

  const resetScratch = () => {
    setCurrentAction('');
    setScratchProgress(0);
    opacity.setValue(1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Scratch Off Game</Text>
      <Text style={styles.subtitle}>Unleash 368 Positions, 105 Locations & 20 Extras!</Text>

      {/* Scratch Circle */}
      <TouchableOpacity
        style={styles.scratchCircle}
        onPress={handleScratch}
        disabled={scratchProgress >= 100 || scratchOptions.length === revealed.length}
      >
        <Animated.View style={[styles.scratchOverlay, { opacity }]}>
          <Text style={styles.overlayText}>Scratch Here</Text>
        </Animated.View>
        <Text style={styles.actionText}>
          {currentAction || 'Tap to Reveal a Spicy Secret...'}
        </Text>
      </TouchableOpacity>

      {/* Revealed Actions List */}
      {revealed.length > 0 && (
        <View style={styles.revealedBox}>
          {revealed.map((option, index) => (
            <Text key={index} style={styles.revealedText}>{option}</Text>
          ))}
        </View>
      )}

      {/* Reset Button (Optional, for testing) */}
      {revealed.length > 0 && (
        <TouchableOpacity style={styles.resetButton} onPress={resetScratch}>
          <Text style={styles.resetButtonText}>Reset Scratches</Text>
        </TouchableOpacity>
      )}
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
  scratchCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#330000',
    borderWidth: 2,
    borderColor: '#b30000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    overflow: 'hidden',
  },
  // Add to your styles
  scratchOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(51, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  overlayText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  actionText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
  },
  revealedBox: {
    backgroundColor: '#330000',
    padding: 15,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#b30000',
    marginBottom: 20,
    maxHeight: 200,
    width: '100%',
  },
  revealedText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 5,
    fontWeight: '400',
  },
  resetButton: {
    backgroundColor: '#4d0000',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});