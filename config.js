import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBGYNfOHfr8ctnMcL6477lmb8RuLUzo6Us",
  authDomain: "book-santa-e2ce7.firebaseapp.com",
  databaseURL: "https://book-santa-e2ce7.firebaseio.com",
  projectId: "book-santa-e2ce7",
  storageBucket: "book-santa-e2ce7.appspot.com",
  messagingSenderId: "796744924151",
  appId: "1:796744924151:web:b3079a25c11ae3ba5f4cf2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();