import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import SettingScreen from '../screens/SettingScreen';

type HomeScreenProps = {
  navigation: any;
};

const Tab = createBottomTabNavigator();

export default function HomeTabScreen({ navigation }: HomeScreenProps) {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';

          if (route.name === 'PortfolioTab') {
            iconName = 'account-balance-wallet';
          } else if (route.name === 'SettingTab') {
            iconName = 'settings';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8e8e93',
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="PortfolioTab" component={PortfolioScreen} options={{ title: 'Portofolio' }} />
      <Tab.Screen name="SettingTab" component={SettingScreen} options={{ title: 'Setting' }} />
    </Tab.Navigator>
  );
}
