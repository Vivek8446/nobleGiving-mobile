// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

// // Initialize Google Sign-In with your web client ID
// GoogleSignin.configure({
//   webClientId: 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com', // Replace with your actual client ID
//   offlineAccess: true, // Enables refresh token
//   scopes:['profile','email']
// });

// type GoogleUser = {
//     idToken: string;
//     user: {
//       email: string;
//       name: string;
//       photo: string;
//     };
//   };
  
//   export const signInWithGoogle = async (): Promise<GoogleUser | null> => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       return userInfo as GoogleUser; // Cast the response
//     } catch (error: any) {
//       console.error('Error signing in:', error);
//       return null;
//     }
//   };
  

import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// Initialize Google Sign-In with your web client ID
GoogleSignin.configure({
  webClientId: '403939934809-uausboea2etnopvci0l6hohvcqtp2l2e.apps.googleusercontent.com', // Replace with your actual client ID
  offlineAccess: true, // Enables refresh token
  scopes: ['profile', 'email'],
});

// Define the type for Google User
export type GoogleUser = {
  idToken: string;
  user: {
    email: string;
    name: string;
    // photo: string;
  };
};

// Helper function to validate the Google Sign-In response
const isValidGoogleUser = (user: any): user is GoogleUser => {
  return (
    user &&
    typeof user.idToken === 'string' &&
    user.user &&
    typeof user.user.email === 'string' &&
    typeof user.user.name === 'string'
  );
};

// Function to handle Google Sign-In
export const signInWithGoogle = async (): Promise<GoogleUser | null> => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();

    if (!isValidGoogleUser(userInfo)) {
      console.error('Invalid Google Sign-In response:', userInfo);
      return null;
    }   

    return {
      idToken: userInfo.idToken,
      user: {
        email: userInfo.user.email,
        name: userInfo.user.name,
        // photo: userInfo.user.photo,
      },
    };
  } catch (error: any) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log('User cancelled the login process');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log('Sign-in is already in progress');
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log('Google Play Services not available');
    } else {
      console.error('Error signing in with Google:', error);
    }
    return null;
  }
};

// export const signOutGoogle = async () => {
//     try {
//       await GoogleSignin.signOut();
//       await AsyncStorage.removeItem('userToken');
//       console.log('User signed out');
//     } catch (error) {
//       console.error('Error signing out:', error);
//     }
//   };
// <Button title="Sign Out" onPress={signOutGoogle} />

