import React, { useState, useMemo } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, FlatList, View, useColorScheme, TouchableOpacity } from 'react-native';

type HomeTabProps = {
  navigation: any;
};

const dummyAnimals = [
  'Anjing', 'Kucing', 'Gajah', 'Singa', 'Harimau', 'Beruang', 'Panda', 'Koala', 'Kanguru', 'Jerapah',
  'Zebra', 'Badak', 'Kuda', 'Sapi', 'Babi', 'Ayam', 'Bebek', 'Angsa', 'Burung', 'Ikan',
  'Hiu', 'Paus', 'Dolphin', 'Kura-kura', 'Ular', 'Katak', 'Kodok', 'Kupu-kupu', 'Lebah', 'Semut'
];

export default function HomeScreen({ navigation }: HomeTabProps) {
  const [searchText, setSearchText] = useState('');
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const textColor = isDarkMode ? '#FFFFFF' : '#000000';
  const backgroundColor = isDarkMode ? '#1f1f1f' : '#f8f8f8';
  const inputBackgroundColor = isDarkMode ? '#333333' : '#FFFFFF';
  const inputBorderColor = isDarkMode ? '#555555' : '#CCCCCC';

  const filteredAnimals = useMemo(() => {
    if (!searchText) return dummyAnimals;
    return dummyAnimals.filter(animal =>
      animal.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText]);

  const renderAnimal = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={[styles.animalItem, { borderBottomColor: isDarkMode ? '#333333' : '#EEEEEE' }]}
      onPress={() => navigation.navigate('Details', { animal: item })}
    >
      <Text style={[styles.animalText, { color: textColor }]}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.screen, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>Home</Text>
      <Text style={[styles.subtitle, { color: textColor }]}>Selamat datang di beranda aplikasi Anda.</Text>

      <TextInput
        style={[styles.searchInput, { backgroundColor: inputBackgroundColor, borderColor: inputBorderColor, color: textColor }]}
        placeholder="Cari nama binatang..."
        placeholderTextColor={isDarkMode ? '#CCCCCC' : '#666666'}
        value={searchText}
        onChangeText={setSearchText}
      />

      <FlatList
        data={filteredAnimals}
        renderItem={renderAnimal}
        keyExtractor={(item) => item}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  list: {
    flex: 1,
    marginBottom: 20,
  },
  animalItem: {
    padding: 10,
    borderBottomWidth: 1,
  },
  animalText: {
    fontSize: 16,
  },
});
