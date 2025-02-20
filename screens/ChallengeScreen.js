import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Vibration } from 'react-native';
import * as Speech from 'expo-speech';
import { Picker } from '@react-native-picker/picker';

// Predefined challenge tiers (explicit and location-enhanced)
const teaseChallenges = {
  bedroom: ["Lick their nipples until they're rock hard, right on the bed.", "Grind your naked crotch against theirs under the sheets.", "Tease their ass with a feather from the pillow."],
  kitchen: ["Drip honey on their chest and lick it off the counter.", "Spank their bare ass with a spatula.", "Press your naked body against theirs by the fridge."],
  car: ["Finger them slow in the backseat until they moan.", "Rub their crotch through their pants in the driver's seat.", "Kiss their neck hard while parked."],
};
const hotChallenges = {
  bedroom: ["Rip their clothes off and fuck them against the headboard.", "Suck their clit/dick until they're dripping on the mattress.", "Pin them face-down and grind until they beg."],
  kitchen: ["Bend them over the table and eat their ass.", "Smear whipped cream on their genitals and devour it.", "Fuck them against the sink—hard and fast."],
  car: ["Pull their pants down and ride them in the backseat.", "Suck them off while they grip the wheel.", "Finger them deep under a blanket in the car."],
};
const infernoChallenges = {
  bedroom: ["Tie them to the bedposts and fuck them until they scream your name.", "Shove their face in the pillow and pound them from behind.", "Blindfold them and make them cum twice before you stop."],
  kitchen: ["Fuck them on the counter with their legs spread wide.", "Pour ice water on their naked body and lick it off.", "Spank their wet ass with a wooden spoon until they're red."],
  car: ["Fuck them raw in the trunk with the hatch up.", "Make them cum with your mouth while parked somewhere risky.", "Choke them lightly while you ride them in the front seat."],
};
const extremeChallenges = {
  bedroom: ["Gag them with your soaked panties, tie them up, and fuck them until they're a drooling wreck.", "Drench them in lube and pound them into the mattress until the bed breaks.", "Blindfold them, clamp their nipples, and edge them for 10 minutes straight."],
  kitchen: ["Fuck them against the stove with hot oil popping nearby—don't stop.", "Shove a cold cucumber inside them, then eat it off their body.", "Tie their hands with a dish towel and rail them on the floor."],
  car: ["Fuck them in the driver's seat with the windows down—let the world hear.", "Strap them with a seatbelt and finger-fuck them until they squirt.", "Choke them while you pound them in the backseat—doors open."],
};

// Filthy truths (nastier and more explicit)
const truths = [
  "What's the most depraved way you've pictured me fucking you senseless?",
  "Where's the public spot you'd let me rip your clothes off and take you raw?",
  "What's the sluttiest thing you've done that makes your pussy/dick throb thinking about it?",
  "What's the most fucked-up fetish you'd kill to try with me?",
  "Tell me, step-by-step, how you'd let me degrade and fuck you if I owned you.",
];

// Dirty Dice (hardcore edition)
const actions = ["Lick", "Bite", "Suck", "Spank", "Choke", "Penetrate"];
const bodyParts = ["Mouth", "Nipples", "Asshole", "Thighs", "Cock/Pussy", "Neck"];

// Penalties (brutal and explicit)
const penalties = [
  "Get on your knees and lick their feet clean—now.", 
  "Let them fuck your face until you gag.", 
  "Stay naked and let them whip your ass with a belt—15 strikes.", 
  "Finger yourself while they watch, no cumming allowed.",
];

// Roleplay scenarios (kinkier and more explicit)
const roleplays = {
  bedroom: ["You're the sadistic dom, they're your whimpering sub—whip them into submission.", "You're the horny stranger breaking in—they're tied up and helpless."],
  kitchen: ["You're the chef, they're the dish—fuck them like a recipe gone wild.", "You're the master, they're the maid—punish them for spilling."],
  car: ["You're the hitchhiker, they're the driver—fuck them to pay your fare.", "You're the cop, they're the speeder—frisk and fuck them hard."],
};

export default function ChallengeScreen() {
  const [mode, setMode] = useState('challenge'); // challenge, dice, truth, roleplay
  const [intensity, setIntensity] = useState('tease');
  const [location, setLocation] = useState('bedroom'); // Default location
  const [content, setContent] = useState('');
  const [timer, setTimer] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [customDares, setCustomDares] = useState([]);
  const [customInput, setCustomInput] = useState('');
  const [penalty, setPenalty] = useState('');

  // Timer logic with penalty
  useEffect(() => {
    let interval;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0 && isTimerActive) {
      setIsTimerActive(false);
      const randomPenalty = penalties[Math.floor(Math.random() * penalties.length)];
      setPenalty(randomPenalty);
      Speech.speak(`You fucked up. Penalty: ${randomPenalty}`, { pitch: 0.9, rate: 0.8 });
      Vibration.vibrate([200, 200, 200]);
    }
    return () => clearInterval(interval);
  }, [timer, isTimerActive]);

  const getRandomChallenge = () => {
    let challengePool;
    switch (intensity) {
      case 'tease': challengePool = teaseChallenges[location]; break;
      case 'hot': challengePool = hotChallenges[location]; break;
      case 'inferno': challengePool = infernoChallenges[location]; break;
      case 'extreme': challengePool = extremeChallenges[location]; break;
    }
    if (customDares.length > 0) challengePool = [...challengePool, ...customDares];
    const randomIndex = Math.floor(Math.random() * challengePool.length);
    const newChallenge = challengePool[randomIndex];
    setContent(newChallenge);
    setTimer(intensity === 'tease' ? 30 : intensity === 'hot' ? 45 : intensity === 'inferno' ? 60 : 90);
    setIsTimerActive(true);
    setPenalty('');
    Speech.speak(newChallenge, { pitch: 0.9, rate: 0.8 });
    Vibration.vibrate(500);
  };

  const getRandomTruth = () => {
    const randomIndex = Math.floor(Math.random() * truths.length);
    const newTruth = truths[randomIndex];
    setContent(newTruth);
    setTimer(30);
    setIsTimerActive(true);
    setPenalty('');
    Speech.speak(newTruth, { pitch: 0.9, rate: 0.8 });
    Vibration.vibrate([200, 200]);
  };

  const rollDice = () => {
    const action = actions[Math.floor(Math.random() * actions.length)];
    const bodyPart = bodyParts[Math.floor(Math.random() * bodyParts.length)];
    const result = `${action} their ${bodyPart}`;
    setContent(result);
    setTimer(45);
    setIsTimerActive(true);
    setPenalty('');
    Speech.speak(result, { pitch: 0.9, rate: 0.8 });
    Vibration.vibrate([100, 200, 100]);
  };

  const getRandomRoleplay = () => {
    const roleplayPool = roleplays[location];
    const randomIndex = Math.floor(Math.random() * roleplayPool.length);
    const newRoleplay = roleplayPool[randomIndex];
    setContent(newRoleplay);
    setTimer(120);
    setIsTimerActive(true);
    setPenalty('');
    Speech.speak(newRoleplay, { pitch: 0.9, rate: 0.8 });
    Vibration.vibrate([300, 300]);
  };

  const addCustomDare = () => {
    if (customInput.trim()) {
      setCustomDares([...customDares, customInput.trim()]);
      setCustomInput('');
      Speech.speak("Your sick dare's in. Let's ruin them.", { pitch: 0.9, rate: 0.8 });
    }
  };

  const handleAction = () => {
    if (mode === 'challenge') getRandomChallenge();
    else if (mode === 'truth') getRandomTruth();
    else if (mode === 'dice') rollDice();
    else getRandomRoleplay();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {mode === 'challenge' ? 'X-Rated Dare' : mode === 'truth' ? 'Filthy Truth' : mode === 'dice' ? 'Dirty Dice' : 'Roleplay Roulette'}
      </Text>

      {/* Mode Toggle */}
      <View style={styles.modeToggle}>
        {['challenge', 'truth', 'dice', 'roleplay'].map((m) => (
          <TouchableOpacity
            key={m}
            style={[styles.modeButton, mode === m && styles.activeMode]}
            onPress={() => {
              setMode(m);
              setContent('');
              setIsTimerActive(false);
              setPenalty('');
            }}
          >
            <Text style={styles.modeText}>{m === 'challenge' ? 'Dare' : m === 'truth' ? 'Truth' : m === 'dice' ? 'Dice' : 'Roleplay'}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Location Picker */}
      {(mode === 'challenge' || mode === 'roleplay') && (
        <Picker
          selectedValue={location}
          style={styles.locationPicker}
          onValueChange={(itemValue) => setLocation(itemValue)}
        >
          <Picker.Item label="Bedroom" value="bedroom" />
          <Picker.Item label="Kitchen" value="kitchen" />
          <Picker.Item label="Car" value="car" />
        </Picker>
      )}

      {/* Intensity for Challenge Mode */}
      {mode === 'challenge' && (
        <View style={styles.intensityButtons}>
          {['tease', 'hot', 'inferno', 'extreme'].map((level) => (
            <TouchableOpacity
              key={level}
              style={[styles.levelButton, intensity === level && styles.activeLevel]}
              onPress={() => setIntensity(level)}
            >
              <Text style={styles.levelText}>{level.charAt(0).toUpperCase() + level.slice(1)}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Custom Dare Input */}
      {mode === 'challenge' && (
        <View style={styles.customInputContainer}>
          <TextInput
            style={styles.customInput}
            placeholder="Add your nastiest dare..."
            placeholderTextColor="#999"
            value={customInput}
            onChangeText={setCustomInput}
          />
          <TouchableOpacity style={styles.addButton} onPress={addCustomDare}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Content Display */}
      <View style={styles.challengeBox}>
        <Text style={styles.challengeText}>
          {content || (mode === 'challenge' ? 'Pick a spot and burn...' : mode === 'truth' ? 'Spill your sluttiest secret...' : mode === 'dice' ? 'Roll for a filthy fate...' : 'Spin for a fucked-up twist...')}
        </Text>
        {isTimerActive && <Text style={styles.timer}>{timer}s</Text>}
        {penalty && <Text style={styles.penaltyText}>Penalty: {penalty}</Text>}
      </View>

      {/* Action Button */}
      <TouchableOpacity style={styles.button} onPress={handleAction}>
        <Text style={styles.buttonText}>
          {mode === 'challenge' ? 'Next Dare' : mode === 'truth' ? 'Reveal Truth' : mode === 'dice' ? 'Roll Dice' : 'Spin Roleplay'}
        </Text>
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
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  modeToggle: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  modeButton: {
    padding: 12,
    marginHorizontal: 8,
    borderRadius: 10,
    backgroundColor: '#330000',
  },
  activeMode: {
    backgroundColor: '#ff1a1a',
  },
  modeText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  locationPicker: {
    width: '80%',
    height: 40,
    backgroundColor: '#330000',
    color: '#fff',
    borderRadius: 10,
    marginBottom: 20,
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
  challengeBox: {
    backgroundColor: '#330000',
    padding: 25,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ff1a1a',
    marginBottom: 40,
    minHeight: 220,
    justifyContent: 'center',
    width: '100%',
  },
  challengeText: {
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
  penaltyText: {
    fontSize: 18,
    color: '#ff9999',
    textAlign: 'center',
    marginTop: 10,
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#ff1a1a',
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