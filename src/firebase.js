import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA2kXRW6T9rqiO8cP9dDuG4Tdx6R6PzMwA",
  authDomain: "budget-planner-4bfb0.firebaseapp.com",
  projectId: "budget-planner-4bfb0",
  storageBucket: "budget-planner-4bfb0.appspot.com",
  messagingSenderId: "596053447613",
  appId: "1:596053447613:web:51dfe17eb6b385f124f8d4"
};

firebase.initializeApp(config)

export const db = firebase.firestore();



