//api.Services.ts
// import AsyncStorage from "@react-native-async-storage/async-storage";

const EndPoint = {
    login: 'doner/auth/login',
    signUp: 'doner/auth/signup',
    get_user: 'user/profile',
    get_otp: 'send-doner-otp',
    verify_otp: 'verify-otp',
    reset_password: 'reset-pass',
    get_all_ngo: 'getallNgos?',
    ngo_signUp: 'ngo/auth/signup',
    update_ngo_profile: 'update-ngo/?',

  };




export { EndPoint };