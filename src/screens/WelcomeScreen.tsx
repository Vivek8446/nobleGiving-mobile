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
        color: '#6c63ff',
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


// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import Icon from "react-native-vector-icons/FontAwesome";

// const WelcomeScreen = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   return (
//     <LinearGradient colors={["#4A00E0", "#8E2DE2"]} style={styles.container}>
//       <View style={styles.logoContainer}>
//         <Text style={styles.logo}>MOFINOW</Text>
//       </View>
//       <View style={styles.form}>
//         <Text style={styles.welcome}>Welcome back!</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Username"
//           value={username}
//           onChangeText={setUsername}
//         />
//         <View style={styles.passwordContainer}>
//           <TextInput
//             style={styles.passwordInput}
//             placeholder="Password"
//             secureTextEntry={!passwordVisible}
//             value={password}
//             onChangeText={setPassword}
//           />
//           <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
//             <Icon name={passwordVisible ? "eye" : "eye-slash"} size={20} color="gray" />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.row}>
//           <TouchableOpacity>
//             <Text style={styles.rememberMe}>Remember me</Text>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Text style={styles.forgotPassword}>Forgot password?</Text>
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity style={styles.loginButton}>
//           <Text style={styles.loginText}>Login</Text>
//         </TouchableOpacity>
//         <Text style={styles.signupText}>
//           New user? <Text style={styles.signupLink}>Sign Up</Text>
//         </Text>
//         <Text style={styles.orText}>OR</Text>
//         <View style={styles.socialIcons}>
//           <Icon name="twitter" size={20} color="#1DA1F2" style={styles.icon} />
//           <Icon name="linkedin" size={20} color="#0077B5" style={styles.icon} />
//           <Icon name="facebook" size={20} color="#1877F2" style={styles.icon} />
//           <Icon name="google" size={20} color="#DB4437" style={styles.icon} />
//         </View>
//       </View>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   logoContainer: {
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   logo: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   form: {
//     backgroundColor: "#fff",
//     padding: 20,
//     width: "90%",
//     borderRadius: 10,
//     alignItems: "center",
//     elevation: 5,
//   },
//   welcome: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   input: {
//     width: "100%",
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     marginBottom: 15,
//   },
//   passwordContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     width: "100%",
//     padding: 10,
//     marginBottom: 15,
//   },
//   passwordInput: {
//     flex: 1,
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "100%",
//     marginBottom: 15,
//   },
//   rememberMe: {
//     color: "gray",
//   },
//   forgotPassword: {
//     color: "#4A00E0",
//     fontWeight: "bold",
//   },
//   loginButton: {
//     backgroundColor: "#4A00E0",
//     width: "100%",
//     padding: 10,
//     alignItems: "center",
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   loginText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   signupText: {
//     marginTop: 10,
//   },
//   signupLink: {
//     color: "#4A00E0",
//     fontWeight: "bold",
//   },
//   orText: {
//     marginVertical: 10,
//     color: "gray",
//   },
//   socialIcons: {
//     flexDirection: "row",
//   },
//   icon: {
//     marginHorizontal: 10,
//   },
// });

// export default WelcomeScreen;
