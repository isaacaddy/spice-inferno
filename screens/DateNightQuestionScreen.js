import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';

const questions = [
  // Romantic Questions
  "What's your favorite memory of us together?",
  "When did you first know you wanted me?",
  "What makes you feel most loved?",
  "What's your ultimate fantasy with me?",
  
  // Intimate Questions
  "Where do you love being touched the most?",
  "What's your favorite position and why?",
  "What drives you wild in bed?",
  "What's something new you'd like to try?",
  
  // Future Dreams
  "What's your perfect romantic getaway?",
  "How can we spice up our routine?",
  "What's your biggest turn-on?",
  "Where's the wildest place you want to do it?",
  
  // Deep Connection
  "What makes you feel most desired?",
  "How can I make you feel more pleasure?",
  "What's your favorite way to be seduced?",
  "What's your secret fantasy you haven't shared?",
  
  // Playful Questions
  "What outfit drives you crazy?",
  "Where should we have our next adventure?",
  "What's the hottest thing I do?",
  "What would you do if we had 24 hours alone?",
  
  "What's one thing you'd like to try in bed that we haven't yet?",
  "Where would you take me on your dream date?",
  "What's the sexiest thing about me?",
  "What's your favorite physical feature of mine?",
  "What's one fantasy you have about us?",
  "What's the most romantic thing I've done for you?",
  "Where's the craziest place you'd want to make love?",
  "What's one thing you want me to do more often?",
  "What outfit of mine drives you the most wild?",
  "What's your hottest memory of us together?",
  "If you could tie me up anywhere, where would it be?",
  "What's your favorite way I touch you?",
  "Which of my body parts turns you on the most?",
  "What's the naughtiest thing you want to try with me?",
  "What's your favorite position with me and why?",
  "Where's the riskiest place you'd want to get intimate?",
  "What do I do that makes you instantly aroused?",
  "What's your favorite foreplay move I do?",
  "If you could have me right now, how would you take me?",
];

export default function DateNightQuestionScreen() {
  const [currentQuestion, setCurrentQuestion] = useState('');

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const newQuestion = questions[randomIndex];
    setCurrentQuestion(newQuestion);
    Speech.speak(newQuestion, { pitch: 0.9, rate: 0.8 });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Date Night Questions</Text>
      <Text style={styles.subtitle}>Spark intimate conversations...</Text>
      
      <View style={styles.questionBox}>
        <Text style={styles.questionText}>
          {currentQuestion || "Tap below to get your question..."}
        </Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={getRandomQuestion}>
        <Text style={styles.buttonText}>Next Question</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a0000',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#ff1a1a',
    marginTop: 40,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#ff9999',
    marginBottom: 40,
    fontStyle: 'italic',
  },
  questionBox: {
    backgroundColor: '#330000',
    padding: 25,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#ff1a1a',
    marginBottom: 40,
    minHeight: 200,
    width: '100%',
    justifyContent: 'center',
  },
  questionText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
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