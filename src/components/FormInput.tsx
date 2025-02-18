import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

interface FormInputProps {
    placeholder: string;
    name: string;
    onChangeText: any;
    onBlur: any;
    value: string;
    secureTextEntry?: boolean;
  }

export default function FormInput({placeholder, ...rest}:FormInputProps) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
      style={styles.input}
      {...rest}
      placeholderTextColor="grey"

        placeholder={placeholder}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 0,
    },
    input: {
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 15,
    },
});