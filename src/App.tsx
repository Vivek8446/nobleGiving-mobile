import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen'; // Your main app screen
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import OtpVerification from './screens/OtpVerification';
import ResetPasswordScreen from './screens/ResetPasswordScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:true}} />
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown: false}} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{headerShown: false}} />
        {/* <Stack.Screen name="verifyOTP" component={OtpVerification} options={{headerShown: false}} /> */}
          <Stack.Screen 
            name="verifyOTP" 
            options={{ headerShown: false }}
          >
            {props => <OtpVerification {...props} onVerificationSuccess={() => props.navigation.navigate('Home')} onBackPress={() => props.navigation.goBack()} />}
          </Stack.Screen>
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ headerShown: false }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
