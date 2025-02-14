import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen({navigation}) {
        return (
          <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
              <View style={styles.logoContainer}>
                 <Image
                        source={require('../assets/fullnamelogo.png')} // Replace with your splash logo
                        style={styles.logo}
                      />
              </View>
              <Text style={styles.welcomeText}>Welcome!</Text>
              <TouchableOpacity 
                style={[styles.button, styles.createAccountButton]}
                onPress={() => navigation.navigate('SignUp')}
              >
                <Text style={styles.buttonTextWhite}
                 onPress={() => navigation.navigate('SignUp')}
                >Create Account</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.button, styles.loginButton]}
                onPress={() => navigation.navigate('Login')}
              >
                <Text style={styles.buttonTextPurple}>Login</Text>
              </TouchableOpacity>
              <View style={styles.socialButtonsContainer}>
                {/* <TouchableOpacity style={styles.socialButton}>
                  <Text>🌐</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Text>in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Text>f</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.socialButton}>
                  <Image
                         source={require('../assets/google-color.png')} // Replace with your splash logo
                         style={styles.Glogo}
                       />
                </TouchableOpacity>
              </View>
              <Text style={styles.signInText}>Sign in with another account</Text>
            </View>
          </SafeAreaView>
        );
      };

const styles = StyleSheet.create({
    container: {
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
      logo: {
        width: 350,
        height: 250,
        marginBottom: 20,
      },
      Glogo: {
        width: 35,
        height: 10,
        marginBottom: 0,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
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
        borderColor: '#164860',
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
        marginHorizontal:10,
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
        borderWidth: 1,
        borderColor: '#6c63ff',
        borderRadius: 4,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      rememberText: {
        color: '#666',
        flex: 1,
      },
      forgotPassword: {
        color: '#6c63ff',
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
        color: '#6c63ff',
        fontWeight: 'bold',
      },
});