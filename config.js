import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyDTAN85Yrn77vC8EkYXTNlaBclb-9W5fBM",
  authDomain: "policy-reminder-app-3c342.firebaseapp.com",
  projectId: "policy-reminder-app-3c342",
  storageBucket: "policy-reminder-app-3c342.appspot.com",
  messagingSenderId: "246222174356",
  appId: "1:246222174356:web:263b971d79e8386bd5dc81"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();