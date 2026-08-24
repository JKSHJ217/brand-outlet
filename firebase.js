
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore, collection, getDocs, doc, getDoc, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyCc7DmnpKpSabioJg7F-vZ3ZywUfiTsnPQ",
  authDomain: "brand-outlet-tm.firebaseapp.com",
  projectId: "brand-outlet-tm",
  storageBucket: "brand-outlet-tm.firebasestorage.app",
  messagingSenderId: "1083598839585",
  appId: "1:1083598839585:web:31d6c55768a25a60732860"
};
const app=initializeApp(firebaseConfig); const auth=getAuth(app); const db=getFirestore(app);
window.store={app,auth,db,onAuthStateChanged,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut,collection,getDocs,doc,getDoc,addDoc,serverTimestamp};
