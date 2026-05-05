import React from 'react';
import { SafeAreaView, StyleSheet, Text, useColorScheme } from 'react-native';

type DetailsScreenProps = {
  route: any;
};

export default function DetailsScreen({ route }: DetailsScreenProps) {
  const { animal } = route.params || {};
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const textColor = isDarkMode ? '#FFFFFF' : '#000000';
  const backgroundColor = isDarkMode ? '#1f1f1f' : '#f8f8f8';

  return (
    <SafeAreaView style={[styles.screen, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Details Screen</Text>
      {animal ? (
        <Text style={[styles.text, { color: textColor }]}>Binatang yang dipilih: {animal}</Text>
      ) : (
        <Text style={[styles.text, { color: textColor }]}>React Navigation is working!</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  },
});
