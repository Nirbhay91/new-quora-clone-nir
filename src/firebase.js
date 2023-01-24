import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDOkP0E_uxjlDQNPLAJW_BtFkUhTZKQVZs",
  authDomain: "quora-clone-nir.firebaseapp.com",
  projectId: "quora-clone-nir",
  storageBucket: "quora-clone-nir.appspot.com",
  messagingSenderId: "746107515434",
  appId: "1:746107515434:web:0852597869277e7a3d0953",
  measurementId: "G-GHY5W5QTYQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
