import { openURL } from 'expo-linking';
import React from 'react';
import { View, Text, StyleSheet, Button, Linking, Alert } from 'react-native';
import { useCallback } from 'react';

const url = 'https://donate.unrwa.org/one-time/~my-donation?_cv=1';

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const DonationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Make a Donation</Text>
      <Text style={styles.content}>Help us support the less fortunate.</Text>
      <OpenURLButton url={url}>Donate</OpenURLButton>
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
});

export default DonationScreen;
