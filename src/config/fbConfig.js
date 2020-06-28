  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCH5Xc_oikeC9fE-XDpwzL2SfqhwWfMb4g",
    authDomain: "recipe-site-68898.firebaseapp.com",
    databaseURL: "https://recipe-site-68898.firebaseio.com",
    projectId: "recipe-site-68898",
    storageBucket: "",
    messagingSenderId: "1081676366277",
    appId: "1:1081676366277:web:f49ac88c4f15ab2b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;