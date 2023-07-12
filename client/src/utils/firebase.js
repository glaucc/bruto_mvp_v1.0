import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// import "firebase/compat/analytics";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_MEASUREMENT_ID,
};

const app = firebase.initializeApp(firebaseConfig);
/* eslint-disable no-unused-vars */
const analytics = getAnalytics(app);
/* eslint-enable no-unused-vars */


export const storage = app.storage();

export default app;
