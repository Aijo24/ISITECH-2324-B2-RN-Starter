import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const InfoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Our NGO</Text>
      <Text style={styles.content}>We fight against poverty and hunger in the world.</Text>
      <Button title="Donation Page" onPress={() => navigation.navigate('Donation')} />
      <TouchableOpacity onPress={() => navigation.navigate('Tasks')}>
        <Text style={styles.linkText}>Tasks</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
  },
  linkText: {
    fontSize: 16,
    color: 'blue',
    marginTop: 20,
  },
});

export default InfoScreen;
