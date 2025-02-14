import { Image, ImageBackground, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ScrollView } from 'react-native'
import React, { useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function LoginScreen({ navigation }) {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [rememberMe, setRememberMe] = useState(false);

        const handleLogin = () => {
          if (username === '123' && password === '123') {
            navigation.navigate('Home');
          } else {
            Alert.alert(
              "Login Failed",
              "Enter correct credentials",
              [
                { text: "OK" }
              ]
            );
          }
        };

        return (
            <KeyboardAvoidingView 
            behavior="height" // 👈 'height' ensures input fields are not pushed up
            style={styles.container}
          >
          <ImageBackground 
            source={require('../assets/bg-1.png')}
            style={styles.backgroundImage}
          >
            <SafeAreaView style={styles.container}>
              {/* <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                style={styles.keyboardAvoidView}
                enabled={false}
              > */}
                <ScrollView 
                  contentContainerStyle={styles.scrollViewContent}
                  bounces={false}
                  showsVerticalScrollIndicator={false}
                  scrollEnabled={false}
                >
                  <View style={styles.contentContainer}>
                    <View style={styles.logoContainer}>
                      <Image
                        source={require('../assets/Soft-White.png')}
                        style={styles.logo}
                      />
                    </View>
                    <Text style={styles.welcomeText}>Welcome back!</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Username"
                      value={username}
                      onChangeText={setUsername}
                      placeholderTextColor="#666"
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Password"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry
                      placeholderTextColor="#666"
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
                      onPress={handleLogin}
                    >
                      <Text style={styles.buttonTextWhite}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.signUpContainer}>
                      <Text style={styles.signUpText}>New user? </Text>
                      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.signUpLink}>Sign Up</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialButtonsContainer}>
                      <TouchableOpacity style={styles.socialButton}>
                        <Image
                          source={require('../assets/google-color.png')}
                          style={styles.Glogo}
                        />
                      </TouchableOpacity>
                      <Text style={styles.signInText}>Sign in with another account</Text>
                    </View>
                  </View>
                </ScrollView>
              {/* </KeyboardAvoidingView> */}
            </SafeAreaView>
          </ImageBackground>
          </KeyboardAvoidingView>
        );
      };

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      justifyContent: 'center',
    
    },
    keyboardAvoidView: {
      flex: 1,
    },
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: 'center',
    },
    contentContainer: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
    },
    logoContainer: {
      alignItems: 'center',
      marginBottom: 30,
      zIndex: 1,
    },
    logoText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#164860',
    },
    Glogo: {
      width: 35,
      height: 35,
      marginBottom: 0,
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 90,
      textAlign: 'center',
      color: '#164860',
    },
    input: {
      backgroundColor: '#f5f5f5',
      borderRadius: 10,
      padding: 15,
      marginBottom: 15,
    },
    logo: {
      width: 250,
      height: 150,
      marginBottom: 80,
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
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      marginHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    signInText: {
      textAlign: 'center',
      color: '#164860',
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
      color: '#164860',
    },
    signUpLink: {
      color: '#164860',
      fontWeight: 'bold',
    },
})

// import { Image, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
// import React, { useState } from 'react'
// import BouncyCheckbox from "react-native-bouncy-checkbox";

// export default function LoginScreen({ navigation }) {
//         const [username, setUsername] = useState('');
//         const [password, setPassword] = useState('');
//         const [rememberMe, setRememberMe] = useState(false);

//         const handleLogin = () => {
//           // Check hardcoded credentials
//           if (username === '123' && password === '123') {
//             navigation.navigate('Home');
//           } else {
//             Alert.alert(
//               "Login Failed",
//               "Enter correct credentials",
//               [
//                 { text: "OK" }
//               ]
//             );
//           }
//         };

//         return (
//           <SafeAreaView style={styles.container}>
//             <KeyboardAvoidingView 
//               behavior={Platform.OS === "ios" ? "padding" : "height"}
//               style={styles.contentContainer}
//             >
//               <View style={styles.logoContainer}>
//               <Image
//                         source={require('../assets/fullnamelogo.png')}
//                         style={styles.logo}
//                       />
//               </View>
//               <Text style={styles.welcomeText}>Welcome back!</Text>
//               <TextInput
//                 style={styles.input}
//                 placeholder="Username"
//                 value={username}
//                 onChangeText={setUsername}
//               />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry
//               />
//               <View style={styles.rememberContainer}>
//                   <BouncyCheckbox
//                   style={styles.checkbox}
//                   useBuiltInState
//                     isChecked={rememberMe}
//                     onPress={() => setRememberMe(!rememberMe)}
//                     fillColor="#164860"
//                     innerIconStyle={{borderRadius: 5}}
//                     iconStyle={{borderRadius: 5}} 
//                   />
//                    <Text style={styles.rememberText}>Remember me</Text>
//                 <TouchableOpacity>
//                   <Text style={styles.forgotPassword}>Forgot password?</Text>
//                 </TouchableOpacity>
//               </View>
//               <TouchableOpacity 
//                 style={[styles.button, styles.createAccountButton]}
//                 onPress={handleLogin}
//               >
//                 <Text style={styles.buttonTextWhite}>Login</Text>
//               </TouchableOpacity>
//               <View style={styles.signUpContainer}>
//                 <Text style={styles.signUpText}>New user? </Text>
//                 <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
//                   <Text style={styles.signUpLink}>Sign Up</Text>
//                 </TouchableOpacity>
//               </View>
//               <View style={styles.socialButtonsContainer}>
//                 <TouchableOpacity style={styles.socialButton}>
//                   <Image
//                     source={require('../assets/google-color.png')}
//                     style={styles.Glogo}
//                   />
//                 </TouchableOpacity>
//                   <Text style={styles.signInText}>Sign in with another account</Text>
//               </View>
//             </KeyboardAvoidingView>
//           </SafeAreaView>
//         );
//       };

// const styles = StyleSheet.create({
//     container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   contentContainer: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//   },
//   logoContainer: {
//     alignItems: 'center',
//     marginBottom: 40,
//   },
//   logoText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#164860',
//   },
//   Glogo: {
//     width: 35,
//     height: 35,
//     marginBottom: 0,
//   },
//   welcomeText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   input: {
//     backgroundColor: '#f5f5f5',
//     borderRadius: 10,
//     padding: 15,
//     marginBottom: 15,
//   },
//   logo: {
//     width: 350,
//     height: 250,
//     marginBottom: 20,
//   },
//   button: {
//     borderRadius: 10,
//     padding: 15,
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   createAccountButton: {
//     backgroundColor: '#164860',
//   },
//   loginButton: {
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#6c63ff',
//   },
//   buttonTextWhite: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   buttonTextPurple: {
//     color: '#164860',
//     fontWeight: 'bold',
//   },
//   socialButtonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   socialButton: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     marginHorizontal: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   signInText: {
//     textAlign: 'center',
//     color: '#666',
//     marginTop: 10,
//   },
//   rememberContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   checkbox: {
//     width: 20,
//     height: 20,
//     borderRadius: 0,
//     marginLeft: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   rememberText: {
//     color: '#164860',
//     flex: 1,
//   },
//   forgotPassword: {
//     color: '#164860',
//   },
//   signUpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   signUpText: {
//     color: '#666',
//   },
//   signUpLink: {
//     color: '#164860',
//     fontWeight: 'bold',
//   },
// })

