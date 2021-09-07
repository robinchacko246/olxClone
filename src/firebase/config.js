import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDsko0pVhU6R_RZTROJdecOuMszZ7jcwYI",
    authDomain: "marryholy.firebaseapp.com",
    projectId: "marryholy",
    storageBucket: "marryholy.appspot.com",
    messagingSenderId: "580948972031",
    appId: "1:580948972031:web:b1d81d9538e9612435d7ca"
  };

 export default firebase.initializeApp(firebaseConfig);



