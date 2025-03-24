// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
// import { Formik, FormikProps } from 'formik';
// import * as Yup from 'yup';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

// const NGORegistrationSchema = Yup.object().shape({
//   ngoName: Yup.string().required('NGO Name is required'),
//   registrationID: Yup.string().required('Registration ID is required'),
//   password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'Passwords must match')
//     .required('Confirm Password is required'),
//   email: Yup.string().email('Invalid email').required('Email is required'),
// });

// const NGOInfoSchema = Yup.object().shape({
//   city: Yup.string().required('City is required'),
//   authorizedPersonName: Yup.string().required('Authorized Person Name is required'),
//   authorizedPersonEmail: Yup.string().email('Invalid email').required('Authorized Person Email is required'),
//   website: Yup.string().url('Invalid URL').required('Website is required'),
//   contactNumber: Yup.string().required('Contact Number is required'),
// });

// const Screen1 = ({ navigation }) => {
//   return (
//     <Formik
//       initialValues={{ ngoName: '', registrationID: '', password: '', confirmPassword: '', email: '' }}
//       validationSchema={NGORegistrationSchema}
//       onSubmit={(values) => navigation.navigate('Screen2', { values })}
//     >
//       {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
//         <ScrollView contentContainerStyle={styles.container}>
//           <TextInput
//             placeholder="NGO Name"
//             onChangeText={handleChange('ngoName')}
//             onBlur={handleBlur('ngoName')}
//             value={values.ngoName}
//             style={styles.input}
//           />
//           {touched.ngoName && errors.ngoName && <Text style={styles.errorText}>{errors.ngoName}</Text>}

//           <TextInput
//             placeholder="Registration ID"
//             onChangeText={handleChange('registrationID')}
//             onBlur={handleBlur('registrationID')}
//             value={values.registrationID}
//             style={styles.input}
//           />
//           {touched.registrationID && errors.registrationID && <Text style={styles.errorText}>{errors.registrationID}</Text>}

//           <TextInput
//             placeholder="Password"
//             onChangeText={handleChange('password')}
//             onBlur={handleBlur('password')}
//             value={values.password}
//             secureTextEntry
//             style={styles.input}
//           />
//           {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

//           <TextInput
//             placeholder="Confirm Password"
//             onChangeText={handleChange('confirmPassword')}
//             onBlur={handleBlur('confirmPassword')}
//             value={values.confirmPassword}
//             secureTextEntry
//             style={styles.input}
//           />
//           {touched.confirmPassword && errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

//           <TextInput
//             placeholder="Email"
//             onChangeText={handleChange('email')}
//             onBlur={handleBlur('email')}
//             value={values.email}
//             style={styles.input}
//           />
//           {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

//           <Button onPress={handleSubmit} title="Next" />
//         </ScrollView>
//       )}
//     </Formik>
//   );
// };

// const Screen2 = ({ navigation, route }) => {
//   return (
//     <Formik
//       initialValues={{ city: '', authorizedPersonName: '', authorizedPersonEmail: '', website: '', contactNumber: '' }}
//       validationSchema={NGOInfoSchema}
//       onSubmit={(values) => navigation.navigate('Welcome', { ...route.params.values, ...values })}
//     >
//       {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
//         <ScrollView contentContainerStyle={styles.container}>
//           <TextInput
//             placeholder="City"
//             onChangeText={handleChange('city')}
//             onBlur={handleBlur('city')}
//             value={values.city}
//             style={styles.input}
//           />
//           {touched.city && errors.city && <Text style={styles.errorText}>{errors.city}</Text>}

//           <TextInput
//             placeholder="Authorized Person Name"
//             onChangeText={handleChange('authorizedPersonName')}
//             onBlur={handleBlur('authorizedPersonName')}
//             value={values.authorizedPersonName}
//             style={styles.input}
//           />
//           {touched.authorizedPersonName && errors.authorizedPersonName && <Text style={styles.errorText}>{errors.authorizedPersonName}</Text>}

//           <TextInput
//             placeholder="Authorized Person Email"
//             onChangeText={handleChange('authorizedPersonEmail')}
//             onBlur={handleBlur('authorizedPersonEmail')}
//             value={values.authorizedPersonEmail}
//             style={styles.input}
//           />
//           {touched.authorizedPersonEmail && errors.authorizedPersonEmail && <Text style={styles.errorText}>{errors.authorizedPersonEmail}</Text>}

//           <TextInput
//             placeholder="Website"
//             onChangeText={handleChange('website')}
//             onBlur={handleBlur('website')}
//             value={values.website}
//             style={styles.input}
//           />
//           {touched.website && errors.website && <Text style={styles.errorText}>{errors.website}</Text>}

//           <TextInput
//             placeholder="Contact Number"
//             onChangeText={handleChange('contactNumber')}
//             onBlur={handleBlur('contactNumber')}
//             value={values.contactNumber}
//             style={styles.input}
//           />
//           {touched.contactNumber && errors.contactNumber && <Text style={styles.errorText}>{errors.contactNumber}</Text>}

//           <Button onPress={handleSubmit} title="Next" />
//         </ScrollView>
//       )}
//     </Formik>
//   );
// };

// const WelcomeScreen = ({ route }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcomeText}>Welcome, {route.values.ngoName}!</Text>
//     </View>
//   );
// };

// const NGORegistration = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Screen1">
//         <Stack.Screen name="Screen1" component={Screen1} />
//         <Stack.Screen name="Screen2" component={Screen2} />
//         <Stack.Screen name="Welcome" component={WelcomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 10,
//   },
//   welcomeText: {
//     fontSize: 24,
//     textAlign: 'center',
//     marginTop: 20,
//   },
// });

// export default NGORegistration;




import React from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Validation Schema for Screen 1 (NGO Registration)
const NGORegistrationSchema = Yup.object().shape({
  ngoName: Yup.string().required('NGO Name is required'),
  registrationID: Yup.string().required('Registration ID is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
});

// Validation Schema for Screen 2 (NGO Info)
const NGOInfoSchema = Yup.object().shape({
  city: Yup.string().required('City is required'),
  authorizedPersonName: Yup.string().required('Authorized Person Name is required'),
  authorizedPersonEmail: Yup.string()
    .email('Invalid email')
    .required('Authorized Person Email is required'),
  website: Yup.string().url('Invalid URL').required('Website is required'),
  contactNumber: Yup.string().required('Contact Number is required'),
});

// Screen 1: NGO Registration Form
const Screen1 = ({ navigation }) => {
  return (
    <Formik
      initialValues={{
        ngoName: '',
        registrationID: '',
        password: '',
        confirmPassword: '',
        email: '',
      }}
      validationSchema={NGORegistrationSchema}
      onSubmit={(values) => navigation.navigate('Screen2', { values })}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <ScrollView contentContainerStyle={styles.container}>
          <TextInput
            placeholder="NGO Name"
            onChangeText={handleChange('ngoName')}
            onBlur={handleBlur('ngoName')}
            value={values.ngoName}
            style={styles.input}
          />
          {touched.ngoName && errors.ngoName && (
            <Text style={styles.errorText}>{errors.ngoName}</Text>
          )}

          <TextInput
            placeholder="Registration ID"
            onChangeText={handleChange('registrationID')}
            onBlur={handleBlur('registrationID')}
            value={values.registrationID}
            style={styles.input}
          />
          {touched.registrationID && errors.registrationID && (
            <Text style={styles.errorText}>{errors.registrationID}</Text>
          )}

          <TextInput
            placeholder="Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
            style={styles.input}
          />
          {touched.password && errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

          <TextInput
            placeholder="Confirm Password"
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
            secureTextEntry
            style={styles.input}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
          )}

          <TextInput
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            style={styles.input}
          />
          {touched.email && errors.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}

          <Button onPress={handleSubmit} title="Next" />
        </ScrollView>
      )}
    </Formik>
  );
};

// Screen 2: NGO Info Form
const Screen2 = ({ navigation, route }) => {
  return (
    <Formik
      initialValues={{
        city: '',
        authorizedPersonName: '',
        authorizedPersonEmail: '',
        website: '',
        contactNumber: '',
      }}
      validationSchema={NGOInfoSchema}
      onSubmit={(values) =>
        navigation.navigate('Welcome', { ...route.params.values, ...values })
      }
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <ScrollView contentContainerStyle={styles.container}>
          <TextInput
            placeholder="City"
            onChangeText={handleChange('city')}
            onBlur={handleBlur('city')}
            value={values.city}
            style={styles.input}
          />
          {touched.city && errors.city && (
            <Text style={styles.errorText}>{errors.city}</Text>
          )}

          <TextInput
            placeholder="Authorized Person Name"
            onChangeText={handleChange('authorizedPersonName')}
            onBlur={handleBlur('authorizedPersonName')}
            value={values.authorizedPersonName}
            style={styles.input}
          />
          {touched.authorizedPersonName && errors.authorizedPersonName && (
            <Text style={styles.errorText}>{errors.authorizedPersonName}</Text>
          )}

          <TextInput
            placeholder="Authorized Person Email"
            onChangeText={handleChange('authorizedPersonEmail')}
            onBlur={handleBlur('authorizedPersonEmail')}
            value={values.authorizedPersonEmail}
            style={styles.input}
          />
          {touched.authorizedPersonEmail && errors.authorizedPersonEmail && (
            <Text style={styles.errorText}>{errors.authorizedPersonEmail}</Text>
          )}

          <TextInput
            placeholder="Website"
            onChangeText={handleChange('website')}
            onBlur={handleBlur('website')}
            value={values.website}
            style={styles.input}
          />
          {touched.website && errors.website && (
            <Text style={styles.errorText}>{errors.website}</Text>
          )}

          <TextInput
            placeholder="Contact Number"
            onChangeText={handleChange('contactNumber')}
            onBlur={handleBlur('contactNumber')}
            value={values.contactNumber}
            style={styles.input}
          />
          {touched.contactNumber && errors.contactNumber && (
            <Text style={styles.errorText}>{errors.contactNumber}</Text>
          )}

          <Button onPress={handleSubmit} title="Next" />
        </ScrollView>
      )}
    </Formik>
  );
};

// Screen 3: Welcome Screen
const WelcomeScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome, {route.params.values.ngoName}!
      </Text>
      <Text style={styles.subText}>
        Your NGO has been successfully registered.
      </Text>
    </View>
  );
};

// NGO Registration Stack Navigator
const NGORegistration = () => {
  return (
    <Stack.Navigator initialRouteName="Screen1">
      <Stack.Screen
        name="Screen1"
        component={Screen1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default NGORegistration;