import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';

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
    // <View style={styles.inputContainer}>
    //               <Icon name="lock" size={20} color="#666" style={styles.inputIcon} />
    //               <TextInput
    //                 style={styles.input}
    //                 {...rest}
    //                 placeholderTextColor="grey"
    //                     placeholder={placeholder}
    //               />
    //  </View>
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
    // inputIcon: {
    // marginRight: 8,
    // },
  //   input: {
  //   flex: 1,
  //   fontSize: 15,
  //   color: '#333',
  // },
});