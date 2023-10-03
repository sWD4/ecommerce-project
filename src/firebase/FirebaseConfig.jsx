import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPvgKrhWnFL0E_DOGC75wlxB2qxANhm0A",
  authDomain: "myfirstapp-55f27.firebaseapp.com",
  projectId: "myfirstapp-55f27",
  storageBucket: "myfirstapp-55f27.appspot.com",
  messagingSenderId: "685111269579",
  appId: "1:685111269579:web:4fbc29dee7a8765cfd234e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);
export {fireDB, auth};