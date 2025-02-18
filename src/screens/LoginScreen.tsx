import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View,Alert,ScrollView,ImageBackground } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { StackNavigationProp } from '@react-navigation/stack';
import { Formik, FormikHelpers } from 'formik';
import FormInput from '../components/FormInput';
import ErrorMessage from '../components/ErrorMessage';
import * as Yup from 'yup';

type RootStackParamList = {
  Login:undefined;
  SignUp:undefined;
  Home:undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList,'Login'>;

interface LoginScreenProps{
  navigation:LoginScreenNavigationProp;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
  .label('Email')
  .email('Enter a valid email address')
  .required('Please enter a registered email'),
  password: Yup.string()
      .label('Password')
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
})

const LoginScreen:React.FC<LoginScreenProps> = ({ navigation }) => {
    
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [rememberMe, setRememberMe] = useState(false);

        const handleSubmit = (
          values: { email: string; password: string },
          { resetForm }: FormikHelpers<{ email: string; password: string }>
        ) => {
          if (values.email.length > 0 && values.password.length > 0) {
              Alert.alert('Login Successful!', 'Welcome back!'); // Replace with your own login logic
            navigation.navigate('Home');
            resetForm(); // Reset form after successful login
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
                {/* <ScrollView 
                  contentContainerStyle={styles.scrollViewContent}
                  bounces={true}
                  showsVerticalScrollIndicator={true}
                  scrollEnabled={true}
                > */}
                <ScrollView 
                  contentContainerStyle={styles.scrollViewContent}
                     keyboardShouldPersistTaps="handled"
                  showsVerticalScrollIndicator={false}
                >
         
          <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.contentContainer}
            >
              <View style={styles.logoContainer}>
              <Image
                        source={require('../assets/Soft-White.png')} // Replace with your splash logo
                        style={styles.logo}
                      />
              </View>
              <Text style={styles.welcomeText}>Welcome back!</Text>

            {/* Formik Validation Starts */}

          <Formik
            initialValues={{ email: '' , password: ''}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema} 
           >
            {({ handleChange, handleBlur, handleSubmit, values,errors,isValid }) => (
              <View>
                <FormInput
                      name="email"
                      placeholder="Email"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                />
                <ErrorMessage errorValue={errors.email} />
                    <FormInput
                        name="password"
                        placeholder="Password"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry/>
                        <ErrorMessage errorValue={errors.password} />
                {/* <Button onPress={handleSubmit} title="Submit" /> */}
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
                          <Text style={[styles.forgotPassword,styles.termsLink]}>Forgot password?</Text>
                        </TouchableOpacity>
                      </View>
                      <TouchableOpacity 
                        style={[styles.button, styles.createAccountButton]}
                        onPress={()=> handleSubmit()}
                        // disabled={!isValid}
                      >
                        <Text style={styles.buttonTextWhite} >Login</Text>
                      </TouchableOpacity>
              </View>
            )}
          </Formik>
             
        {/* Formik Validation Finishes */}
        

              <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>New user? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                  <Text style={[styles.signUpLink,styles.termsLink]}>Sign Up</Text>
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
          </ScrollView>
          </ImageBackground>
          </KeyboardAvoidingView>

        );
      };
    export default LoginScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex:1,
    backgroundColor:'transparent',
    justifyContent:'center',
  },
  contentContainer: {
    flex: 1,
    padding: 23,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 28,
    zIndex:1
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
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 43,
    textAlign: 'center',
    color:'#164860'
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  logo: {
    width: 280,
    height: 170,
    marginBottom: 95,
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
  termsLink: {
    color: '#0D2847',
    textDecorationLine: 'underline',
  },
  keyboardAvoidView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  // socialButton: {
  //   width: 40,
  //   height: 40,
  //   borderRadius: 20,
  //   borderWidth: 1,
  //   borderColor: '#ddd',
  //   backgroundColor: 'rgba(255, 255, 255, 0.9)',
  //   marginHorizontal: 10,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
})




