import firebase from 'firebase';

const firebaseConfig = {

  apiKey: "AIzaSyDexfQOdwi1gu9XqoRjl3uFEK2yvIoNmFc",
  authDomain: "bt3103-project-404.firebaseapp.com",
  databaseURL: "https://bt3103-project-404.firebaseio.com",
  projectId: "bt3103-project-404",
  storageBucket: "bt3103-project-404.appspot.com",
  messagingSenderId: "993115834946",
  appId: "1:993115834946:web:13a4212223443f78987bdb",
  measurementId: "G-SG7MNCX0V5"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;
