import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDnztt_ulqHO956wZuBwhGMT7SarYj2pCo",
  authDomain: "online-store-7bcfd.firebaseapp.com",
  databaseURL: "https://online-store-7bcfd.firebaseio.com",
  projectId: "online-store-7bcfd",
  storageBucket: "online-store-7bcfd.appspot.com",
  messagingSenderId: "708501564833",
  appId: "1:708501564833:web:db5b3e4aea1be5d8956fe0",
  measurementId: "G-RT2S01C2KS",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
// firebase.analytics();

export { storage, firebase as default };
