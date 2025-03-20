// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const SelectScreen: React.FC = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       <Image 
//         source={require('../assets/help.jpg')} // Update the path to your image
//         style={styles.image} 
//         resizeMode="contain"
//       />
//       <Text style={styles.heading}>Select an option to start</Text>
//       <TouchableOpacity 
//         style={styles.button} 
//         onPress={() => navigation.navigate('Welcome')}
//       >
//         <Text style={styles.buttonText}>Start a free fundraiser</Text>
//       </TouchableOpacity>
//       <TouchableOpacity 
//         style={styles.button} 
//         onPress={() => navigation.navigate('Welcome')}
//       >
//         <Text style={styles.buttonText}>Make a donation</Text>
//       </TouchableOpacity>
//       <Text style={styles.footerText}>
//         Already have an account?{' '}
//         <Text 
//           style={styles.signIn} 
//           onPress={() => navigation.navigate('SignIn')}
//         >
//           Sign in
//         </Text>
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     alignItems: 'center',
//   },
//   image: {
//     width: 250, // Adjust width as needed
//     height: 180, // Adjust height as needed
//     marginBottom: 20,
//   },
//   heading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#2E8B57',
//     paddingVertical: 12,
//     paddingHorizontal: 25,
//     borderRadius: 25,
//     marginBottom: 15,
//     width: '100%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   footerText: {
//     marginTop: 20,
//     fontSize: 14,
//   },
//   signIn: {
//     color: '#8B0000',
//     fontWeight: 'bold',
//   },
// });

// export default SelectScreen;



import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView, 
  Dimensions, 
  StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const { width, height } = Dimensions.get('window');



type SelectScreenNavigationProp = StackNavigationProp<any>;

interface SelectScreenProps {
  navigation:SelectScreenNavigationProp;
}

const SelectScreen: React.FC<SelectScreenProps> = ({ navigation}) => {
  // const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* Background gradient */}
     <StatusBar backgroundColor="#164860" barStyle="light-content" />
      <LinearGradient
        colors={['#164860', '#164860']}
        style={styles.background}
      />
      
      {/* Top circular shape */}
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          {/* Hearts and jar illustration */}
          <Image
            source={require('../assets/help.jpg')}
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>
      </View>
      
      {/* Bottom content */}
      <View style={styles.bottomContainer}>
        <Text style={styles.headerText}>Select an option to start</Text>
        
        {/* Start a free fundraiser button */}
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Welcome')}
        >
          <Text style={styles.buttonText}>Start a free fundraiser</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Welcome')}
        >
          <Text style={styles.buttonText}>Make a donation</Text>
        </TouchableOpacity>
        
        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>Already have an account? </Text>
          <TouchableOpacity >
            <Text style={styles.signInLink}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height * 0.6,
  },
  circleContainer: {
    height: height * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: width * 0.45,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  illustration: {
    width: width * 0.7,
    height: width * 0.7,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
    marginTop: -30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#164860',
    borderRadius: 50,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signInText: {
    fontSize: 16,
    color: '#333',
  },
  signInLink: {
    fontSize: 16,
    color: '#164860',
    fontWeight: '500',
  },
});

export default SelectScreen;