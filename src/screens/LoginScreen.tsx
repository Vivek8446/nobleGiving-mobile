import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login:undefined;
  SignUp:undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList,'Login'>;

interface LoginScreenProps{
  navigation:LoginScreenNavigationProp;
}

const LoginScreen:React.FC<LoginScreenProps> = ({ navigation }) => {
    
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [rememberMe, setRememberMe] = useState(false);
        return (
          <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.contentContainer}
            >
              <View style={styles.logoContainer}>
              <Image
                        source={require('../assets/fullnamelogo.png')} // Replace with your splash logo
                        style={styles.logo}
                      />
              </View>
              <Text style={styles.welcomeText}>Welcome back!</Text>
              <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <View style={styles.rememberContainer}>
                  <BouncyCheckbox
                  style={styles.checkbox}
                  useBuiltInState
                    isChecked={rememberMe}
                    onPress={() => setRememberMe(!rememberMe)}
                    fillColor="#164860"
                    innerIconStyle={{borderRadius: 5}}
                    iconStyle={{borderRadius: 5}} 
                  />
                   <Text style={styles.rememberText}>Remember me</Text>
                <TouchableOpacity>
                  <Text style={styles.forgotPassword}>Forgot password?</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity 
                style={[styles.button, styles.createAccountButton]}
              >
                <Text style={styles.buttonTextWhite}>Login</Text>
              </TouchableOpacity>
              <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>New user? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                  <Text style={styles.signUpLink}>Sign Up</Text>
                </TouchableOpacity>
              </View>
              
                <TouchableOpacity style={[styles.signInButton,styles.gloginbutton]}>
                  <View style={styles.signInContent}>
                      <Image 
                        source={require('../assets/google-color.png')}
                        style={styles.Glogo}
                      />
                      <Text style={styles.buttonTextBlack}>Sign in with another account</Text>
                    </View>
                  </TouchableOpacity>


            </KeyboardAvoidingView>
          </SafeAreaView>
        );
      };

      export default LoginScreen;

const styles = StyleSheet.create(
    {container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#164860',
  },
  Glogo: {
    width: 35,
    height: 35,
    marginRight:10,
    // marginBottom: 0,
    // flex:1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  logo: {
    width: 350,
    height: 250,
    marginBottom: 20,
  },
  button: {
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  createAccountButton: {
    backgroundColor: '#164860',
  },
  loginButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#6c63ff',
  },
  buttonTextWhite: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonTextPurple: {
    color: '#164860',
    fontWeight: 'bold',
  },

  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 10,
  },
  
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    // borderWidth: 1,
    // borderColor: '#164860',
    borderRadius: 0,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rememberText: {
    color: '#164860',
    flex: 1,
  },
  forgotPassword: {
    color: '#164860',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: '#666',
  },
  signUpLink: {
    color: '#164860',
    fontWeight: 'bold',
  },
  signInButton: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: "#ffffff",
    padding: 11,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 23,
    
  },
  gloginbutton:{
    borderWidth: 0.5,
    borderColor: '#000000'
  },
  signInContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonTextBlack: {
    color: '#000000',
    fontWeight: 'bold',
  },

})
