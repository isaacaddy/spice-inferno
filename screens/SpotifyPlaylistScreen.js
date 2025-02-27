import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

export default function SpotifyPlaylistScreen() {
  const openSpotify = () => {
    Linking.openURL('https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM'); // Example sensual playlist URL
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Spotify Sex-Songs</Text>
      <Text style={styles.subtitle}>200+ sensual songs to set the mood</Text>
      <TouchableOpacity style={styles.button} onPress={openSpotify}>
        <Text style={styles.buttonText}>Play Playlist</Text>
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
    marginBottom: 30,
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#ff6666',
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