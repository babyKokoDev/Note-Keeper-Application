import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyBNTJuG1ihdEhZmSVmt4PuR54MaN1lvbss",
  authDomain: "note-keeping-app-c94d0.firebaseapp.com",
  projectId: "note-keeping-app-c94d0",
  storageBucket: "note-keeping-app-c94d0.appspot.com",
  messagingSenderId: "573529115468",
  appId: "1:573529115468:web:76fe8e93799e1f400c5de9"
};

const fireDb = firebase.initializeApp(firebaseConfig)
export default fireDb.database().ref()

