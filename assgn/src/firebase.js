import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC8VawUayz93-hxRLGJzaP2g9VPDMCso-I",
  authDomain: "greendzine-9aa17.firebaseapp.com",
  projectId: "greendzine-9aa17",
  storageBucket: "greendzine-9aa17.appspot.com",
  messagingSenderId: "128353151161",
  appId: "1:128353151161:web:c96640ea5ec5143a2cd368",
  measurementId: "G-1DSYMCCL5D"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebaseApp.auth();

export default { firebaseApp };
