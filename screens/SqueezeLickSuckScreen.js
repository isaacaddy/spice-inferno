import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SqueezeLickSuckScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Squeeze, Lick, Suck</Text>
      <Text style={styles.subtitle}>Coming soon...</Text>
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff1a1a',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#ff9999',
  },
});