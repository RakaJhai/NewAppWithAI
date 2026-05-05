import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function PortfolioScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Portofolio</Text>
      <Text style={styles.subtitle}>Lihat ringkasan investasi Anda di sini.</Text>
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
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});
