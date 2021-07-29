import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDLYQZGIPz5fJgjQVXMlMYN0GvP1Lqm2JQ",
    authDomain: "story-hub-812e8.firebaseapp.com",
    projectId: "story-hub-812e8",
    storageBucket: "story-hub-812e8.appspot.com",
    messagingSenderId: "144351940369",
    appId: "1:144351940369:web:c648d5eb36fb71451246b0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();