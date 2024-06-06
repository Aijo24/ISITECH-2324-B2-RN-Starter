import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const SplashScreenComponent = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Info');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('./../logo/logo.jpg')} style={styles.logo} />
      <Text style={styles.title}>Welcome to Our NGO</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Info')}>
        <Text>Access</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#ddd',
    padding: 10,
    alignItems: 'center',
  }
});

export default SplashScreenComponent;
