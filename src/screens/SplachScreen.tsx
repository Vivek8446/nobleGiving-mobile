import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a loading time (3 seconds)
    const timer = setTimeout(() => {
      navigation.replace('Welcome'); // Navigate to Home screen after the splash
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')} // Replace with your splash logo
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#164860', // Background color of the splash screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
});

export default SplashScreen;
