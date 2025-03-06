import api from "./apiClient";
import AsyncStorage from '@react-native-async-storage/async-storage';

// You could extract the baseURL from the api client if needed
const baseURL = api.defaults.baseURL || 'https://noblegivingbackend.azurewebsites.net/';


export const authenticateUser = async (googleToken: string) => {
  try {
    const response = await api.post('/auth/google/mobile', { token: googleToken });
    if (response.data && response.data.token) {
      await AsyncStorage.setItem('userToken', response.data.token);
      return response.data;
    }
  } catch (error) {
    console.error('Google Sign-In Error:', error);
    return null;
  }
};


const EndPoint = {
    login: 'doner/auth/login',
    signUp: 'doner/auth/signup',
    get_user: 'user/profile',
    get_otp: 'doner/auth/send-doner-otp',  // No need to concatenate with baseURL
    verify_otp: '/verify-otp',
    reset_password: 'doner/auth/reset-pass',
    get_all_ngo: 'getallNgos?',
    ngo_signUp: 'ngo/auth/signup',
    update_ngo_profile: 'update-ngo/?',
};

export { EndPoint, baseURL };