import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCY5ojknKEDv5s4aBXlC0IHaANAyWJodYU',
  authDomain: 'image-gram-b5d1b.firebaseapp.com',
  databaseURL: 'https://image-gram-b5d1b.firebaseio.com',
  projectId: 'image-gram-b5d1b',
  storageBucket: 'image-gram-b5d1b.appspot.com',
  messagingSenderId: '232536591337',
  appId: '1:232536591337:web:f8934610192e03a26fd978',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
