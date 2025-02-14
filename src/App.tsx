// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React,{useEffect} from 'react';
// import {
//   Platform,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
// import SplashScreen from 'react-native-splash-screen';

// function App(): React.JSX.Element {

//   useEffect(() => {
//     if(Platform.OS === 'android') {
//       SplashScreen.hide();
//     }
//   });

//   return (
//    <SafeAreaView>
//     <Text>hello wold</Text>
//    </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({

// });

// export default App;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplachScreen';
import HomeScreen from './screens/HomeScreen'; // Your main app screen
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }} // Hide header for splash screen
        />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} 
        options={{headerShown: false}}
        />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="SignUp" component={SignupScreen} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
