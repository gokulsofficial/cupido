import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAhHZbYLwJiyjYtAS_8VkElWNJMX6bJi3M",
  authDomain: "cupido-e03d3.firebaseapp.com",
  projectId: "cupido-e03d3",
  storageBucket: "cupido-e03d3.appspot.com",
  messagingSenderId: "558244768520",
  appId: "1:558244768520:web:2b65aba21ed9685a931abd",
  measurementId: "G-VLL80NDKZP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database; 