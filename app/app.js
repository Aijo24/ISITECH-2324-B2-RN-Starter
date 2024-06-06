import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreenComponent from './../components/SplashScreen';
import InfoScreen from './../components/InfoScreen';
import DonationScreen from './../components/DonationScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreenComponent} options={{ headerShown: false }} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Donation" component={DonationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
