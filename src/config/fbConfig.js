  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: `${process.env.API_KEY}`,
    authDomain: `${process.env.authDomain}`,
    databaseURL: `${process.env.databaseURL}`,
    projectId: `${process.env.projectId}`,
    messagingSenderId: `${process.env.messagingSenderId}`,
    appId: `${process.env.appId}`
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;