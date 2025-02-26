import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { EndPoint } from '../services/apiServices';
const ForgotPasswordScreen:React.FC<WelcomeScreenProps> = ({ navigation }: any) => {
  const [email, setEmail] = useState('');

  const handleSendCode = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email address.');
      return;
    }

    try {
      const response = await axios.post(EndPoint.get_otp, {
        email,
      });

      if (response.status === 200) {
        Alert.alert('Success', 'A reset code has been sent to your email.');
        navigation.navigate('VerifyOTP'); // Navigate to verification screen
      } else {
        throw new Error(response.data.message || 'Something went wrong.');
      }
    } catch (error: any) {
      Alert.alert('Error', error.response?.data?.message || 'Failed to send reset code.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot your password?</Text>
      <Text style={styles.subtitle}>
        Enter your email or mobile number and we'll help you reset your password.
      </Text>

      <View style={styles.inputContainer}>
        <Icon name="email-outline" size={20} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sendButton} onPress={handleSendCode}>
          <Text style={styles.sendButtonText}>Send Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#164860',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  backButton: {
    backgroundColor: '#A0AEC0',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginRight: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#164860',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ForgotPasswordScreen;
