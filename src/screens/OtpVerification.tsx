import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  Alert 
} from 'react-native';

interface OtpVerificationProps {
  onVerificationSuccess: () => void;
  onBackPress: () => void;
}

const OtpVerification: React.FC<OtpVerificationProps> = ({ 
  onVerificationSuccess, 
  onBackPress 
}) => {
  const [otpCode, setOtpCode] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const verifyOtpCode = async (): Promise<void> => {
    if (otpCode.length === 0) {
      Alert.alert('Error', 'Please enter verification code');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call to verify OTP
      const response = await fetch('https://api.example.com/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: otpCode }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Verification failed');
      }

      // If verification is successful
      onVerificationSuccess();
    } catch (error) {
      // Handle specific error types
      if (error instanceof TypeError) {
        Alert.alert('Network Error', 'Please check your internet connection');
      } else if (error instanceof Error) {
        Alert.alert('Verification Failed', error.message);
      } else {
        Alert.alert('Error', 'An unexpected error occurred');
      }
      console.error('OTP verification error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>Enter the verification code sent to your email</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter verification code"
        placeholderTextColor="#999"
        value={otpCode}
        onChangeText={setOtpCode}
        keyboardType="number-pad"
        maxLength={6}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={onBackPress}
          disabled={isLoading}
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.verifyButton} 
          onPress={verifyOtpCode}
          disabled={isLoading}
        >
          <Text style={styles.verifyButtonText}>
            {isLoading ? 'Verifying...' : 'Verify Code'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0F4C75',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 25,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backButton: {
    backgroundColor: '#BBD3DE',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#444',
    fontSize: 16,
    fontWeight: '500',
  },
  verifyButton: {
    backgroundColor: '#0F4C75',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  verifyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default OtpVerification;