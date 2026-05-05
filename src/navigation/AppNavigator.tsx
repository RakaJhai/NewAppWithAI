import React from 'react';
import { useColorScheme, View, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabScreen from './HomeTabScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <View style={styles.container}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: isDarkMode ? '#1f1f1f' : '#f8f8f8',
            },
            headerTintColor: isDarkMode ? '#fff' : '#000',
          }}
        >
          <Stack.Screen name="Home" component={HomeTabScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
