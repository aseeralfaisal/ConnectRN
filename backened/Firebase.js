import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBVQIkCx1INWwN0UPPfhU08UwFIi-_xcdY",
    authDomain: "connectapp-15efd.firebaseapp.com",
    projectId: "connectapp-15efd",
    storageBucket: "connectapp-15efd.appspot.com",
    messagingSenderId: "502364413603",
    appId: "1:502364413603:web:d0cb32d6ecd4fd51846916"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }