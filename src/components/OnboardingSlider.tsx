// import React, { useState, useRef } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   Dimensions,
//   TouchableOpacity,
//   FlatList,
//   SafeAreaView,
//   StatusBar,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import LinearGradient from 'react-native-linear-gradient';

// const { width, height } = Dimensions.get('window');

// interface SlideItem {
//   id: string;
//   image: any;
//   title: string;
//   description: string;
// }

// const slides: SlideItem[] = [
//   {
//     id: '1',
//     image: require('../assets/help.jpg'),
//     title: 'Check progress, get updates and enjoy 24X7 support',
//     description: 'Track your fundraising campaign in real-time.',
//   },
//   {
//     id: '2',
//     image: require('../assets/help.jpg'),
//     title: 'Share your story with the world',
//     description: 'Connect with donors who care about your cause.',
//   },
//   {
//     id: '3',
//     image: require('../assets/help.jpg'),
//     title: 'Receive funds directly to your account',
//     description: 'Safe and secure payment processing.',
//   },
//   {
//     id: '4',
//     image: require('../assets/help.jpg'),
//     title: 'Start making a difference today',
//     description: 'Join thousands of successful fundraisers.',
//   },
// ];

// interface OnboardingSliderProps {
//   onFinish: () => void;
// }

// const OnboardingSlider: React.FC<OnboardingSliderProps> = ({ onFinish }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   // In OnBoardingSlider.tsx
// const flatListRef = useRef<FlatList<SlideItem>>(null);
  
//   const markOnboardingComplete = async () => {
//     try {
//       await AsyncStorage.setItem('hasSeenOnboarding', 'true');
//       onFinish();
//     } catch (error) {
//       console.log('Error saving onboarding status:', error);
//     }
//   };
  
//   const goToNextSlide = () => {
//     if (currentIndex < slides.length - 1) {
//       flatListRef.current?.scrollToIndex({
//         index: currentIndex + 1,
//         animated: true,
//       });
//     } else {
//       markOnboardingComplete();
//     }
//   };
  
//   const goToPrevSlide = () => {
//     if (currentIndex > 0) {
//       flatListRef.current?.scrollToIndex({
//         index: currentIndex - 1,
//         animated: true,
//       });
//     }
//   };
  
//   const renderItem = ({ item }: { item: SlideItem }) => {
//     return (
//       <View style={styles.slide}>
//         <View style={styles.circleContainer}>
//           <LinearGradient
//             colors={['#164860', '#164860']}
//             style={styles.gradientBackground}
//           >
//             <View style={styles.circle}>
//               <Image source={item.image} style={styles.image} resizeMode="contain" />
//             </View>
//           </LinearGradient>
//         </View>
        
//         <View style={styles.textContainer}>
//           <Text style={styles.title}>{item.title}</Text>
//           <Text style={styles.description}>{item.description}</Text>
//         </View>
//       </View>
//     );
//   };
  
//   const renderPagination = () => {
//     return (
//       <View style={styles.paginationContainer}>
//         <View style={styles.dotsContainer}>
//           {slides.map((_, index) => (
//             <View
//               key={index}
//               style={[
//                 styles.dot,
//                 { backgroundColor: index === currentIndex ? '#164860' : '#5fabcf' }
//               ]}
//             />
//           ))}
//         </View>

//         <View style={styles.buttonContainer}>
//           {currentIndex > 0 ? (
//             <TouchableOpacity style={styles.backButton} onPress={goToPrevSlide}>
//               <Text style={styles.backButtonText}>Back</Text>
//             </TouchableOpacity>
//           ) : <View style={styles.spacer} />}
          
//           <TouchableOpacity style={styles.getStartedButton} onPress={goToNextSlide}>
//             <Text style={styles.getStartedButtonText}>
//               {currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}
//             </Text>
//           </TouchableOpacity>
//         </View>
        
//         {currentIndex < slides.length - 1 && (
//           <TouchableOpacity
//             style={styles.skipButton}
//             onPress={markOnboardingComplete}
//           >
//             <Text style={styles.skipButtonText}>Skip</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     );
//   };
  
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar backgroundColor="#164860" barStyle="light-content" />
      
//       <FlatList
//         ref={flatListRef}
//         data={slides}
//         renderItem={renderItem}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item) => item.id}
//         onMomentumScrollEnd={(event) => {
//           const contentOffset = event.nativeEvent.contentOffset.x;
//           const index = Math.round(contentOffset / width);
//           setCurrentIndex(index);
//         }}
//       />
      
//       {renderPagination()}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   slide: {
//     width,
//     flex: 1,
//     alignItems: 'center',
//   },
//   gradientBackground: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     height: height * 0.55,
//   },
//   circleContainer: {
//     height: height * 0.5,
//     width: width,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   circle: {
//     width: width * 0.9,
//     height: width * 0.9,
//     borderRadius: width * 0.45,
//     backgroundColor: '#164860',
//     alignItems: 'center',
//     justifyContent: 'center',
//     overflow: 'hidden',
//   },
//   image: {
//     width: width * 0.6,
//     height: width * 0.6,
//   },
//   textContainer: {
//     flex: 0.4,
//     paddingHorizontal: 40,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 16,
//     color: '#333',
//   },
//   description: {
//     fontSize: 16,
//     textAlign: 'center',
//     color: '#666',
//   },
//   paginationContainer: {
//     position: 'absolute',
//     bottom: 50,
//     left: 0,
//     right: 0,
//     alignItems: 'center',
//   },
//   dotsContainer: {
//     flexDirection: 'row',
//     marginBottom: 30,
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     width: '90%',
//     justifyContent: 'space-between',
//   },
//   backButton: {
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//   },
//   backButtonText: {
//     fontSize: 16,
//     color: '#000',
//     fontWeight: '600',
//   },
//   getStartedButton: {
//     backgroundColor: '#164860',
//     borderRadius: 30,
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//   },
//   getStartedButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   skipButton: {
//     position: 'absolute',
//     right: 20,
//     top: -710,
    
//   },
//   skipButtonText: {
//     fontSize: 18,
//     color: '#fff',
//     fontWeight: '500',
//   },
//   spacer: {
//     width: 60,
//   },
// });

// export default OnboardingSlider;


import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

interface SlideItem {
  id: string;
  image: any;
  title: string;
  description: string;
}

const slides: SlideItem[] = [
  {
    id: '1',
    image: require('../assets/help.jpg'),
    title: 'Check progress, get updates and enjoy 24X7 support',
    description: 'Track your fundraising campaign in real-time.',
  },
  {
    id: '2',
    image: require('../assets/help.jpg'),
    title: 'Share your story with the world',
    description: 'Connect with donors who care about your cause.',
  },
  {
    id: '3',
    image: require('../assets/help.jpg'),
    title: 'Receive funds directly to your account',
    description: 'Safe and secure payment processing.',
  },
  {
    id: '4',
    image: require('../assets/help.jpg'),
    title: 'Start making a difference today',
    description: 'Join thousands of successful fundraisers.',
  },
];

interface OnboardingSliderProps {
  onFinish: () => void;
}

const OnboardingSlider: React.FC<OnboardingSliderProps> = ({ onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<SlideItem>>(null);
  
  const markOnboardingComplete = async () => {
    try {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      onFinish();
    } catch (error) {
      console.log('Error saving onboarding status:', error);
    }
  };
  
  const goToNextSlide = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      markOnboardingComplete();
    }
  };
  
  const goToPrevSlide = () => {
    if (currentIndex > 0) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex - 1,
        animated: true,
      });
    }
  };
  
  const renderItem = ({ item }: { item: SlideItem }) => {
    return (
      <View style={styles.slide}>
        <LinearGradient
          colors={['#164860', '#1a5a7a']}
          style={styles.gradientBackground}
        >
          <Image source={item.image} style={styles.image} resizeMode="cover" />
        </LinearGradient>
        
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    );
  };
  
  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        <View style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                { backgroundColor: index === currentIndex ? '#164860' : '#5fabcf' }
              ]}
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          {currentIndex > 0 ? (
            <TouchableOpacity style={styles.backButton} onPress={goToPrevSlide}>
              <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
          ) : <View style={styles.spacer} />}
          
          <TouchableOpacity style={styles.getStartedButton} onPress={goToNextSlide}>
            <Text style={styles.getStartedButtonText}>
              {currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}
            </Text>
          </TouchableOpacity>
        </View>
        
        {currentIndex < slides.length - 1 && (
          <TouchableOpacity
            style={styles.skipButton}
            onPress={markOnboardingComplete}
          >
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#164860" barStyle="light-content" />
      
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={(event) => {
          const contentOffset = event.nativeEvent.contentOffset.x;
          const index = Math.round(contentOffset / width);
          setCurrentIndex(index);
        }}
      />
      
      {renderPagination()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slide: {
    width,
    flex: 1,
  },
  gradientBackground: {
    height: height * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: 20,
  },
  textContainer: {
    flex: 0.4,
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  backButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  getStartedButton: {
    backgroundColor: '#164860',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  getStartedButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  skipButton: {
    position: 'absolute',
    right: 20,
    top: -710,
  },
  skipButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
  },
  spacer: {
    width: 60,
  },
});

export default OnboardingSlider;