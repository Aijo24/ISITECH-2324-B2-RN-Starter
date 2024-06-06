import React from 'react';
import { Tabs } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'index') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'tasksScreen') {
            iconName = focused ? 'create' : 'create-outline';
          } else if (route.name === 'donationScreen') {
            iconName = focused ? 'cash' : 'cash-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="donationScreen" options={{ title: 'Donation' }} />
      <Tabs.Screen name="tasksScreen" options={{ title: 'Tasks' }} />
    </Tabs>
  );
}