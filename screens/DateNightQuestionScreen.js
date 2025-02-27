import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Speech from 'expo-speech';

const questions = [
  "What's your favorite memory of us together?",
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