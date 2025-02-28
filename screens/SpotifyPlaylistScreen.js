import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
const songs = [
  // Slow and Sensual
  "Earned It - The Weeknd",
  "Wicked Games - The Weeknd",
  "Often - The Weeknd",
  "Skin - Rihanna",
  "Love to Love You Baby - Donna Summer",
  
  // Rhythm and Beat
  "Motivation - Normani",
  "Partition - Beyoncé",
  "Pony - Ginuwine",
  "Closer - Nine Inch Nails",
  "S&M - Rihanna",
  
  // Modern Hits
  "Streets - Doja Cat",
  "34+35 - Ariana Grande",
  "Watermelon Sugar - Harry Styles",
  "Die For You - The Weeknd",
  "Physical - Dua Lipa",
  
  // Classic Mood
  "Let's Get It On - Marvin Gaye",
  "Sexual Healing - Marvin Gaye",
  "Crazy Love - Van Morrison",
  "I'll Make Love to You - Boyz II Men",
  
  // Alternative Vibes
  "Glory Box - Portishead",
  "Wicked Game - Chris Isaak",
  "Fade Into You - Mazzy Star",
  "Do I Wanna Know? - Arctic Monkeys",
  
  // Dance & Energy
  "Love Sex Magic - Ciara ft. Justin Timberlake",
  "Buttons - The Pussycat Dolls",
  "Climax - Usher",
  "Body Party - Ciara"
];
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