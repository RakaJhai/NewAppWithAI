import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

export default function SettingScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.title}>Setting</Text>
      <Text style={styles.subtitle}>Atur preferensi dan pengaturan aplikasi.</Text>
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
