import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyD92LHV4ui_N77duuUIQM85dJoCaSzceDE",
  authDomain: "react-chat-2f5ed.firebaseapp.com",
  databaseURL: "https://react-chat-2f5ed.firebaseio.com",
  projectId: "react-chat-2f5ed",
  storageBucket: "react-chat-2f5ed.appspot.com",
  messagingSenderId: "449567354013",
  appId: "1:449567354013:web:205e102b44f726c9143874"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
