import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreenComponent from '../../components/SplashScreen';
import InfoScreen from '../../components/InfoScreen';
import DonationScreen from '../../components/DonationScreen';
import TaskList from '../../components/TaskList';

const Stack = createStackNavigator();

const App = () => {
  return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreenComponent} options={{ headerShown: false }} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Donation" component={DonationScreen} />
        <Stack.Screen name="Tasks" component={TaskList} />
      </Stack.Navigator>
  );
};

export default App;
