import firebase from "firebase";

const firebaseApp = firebase.initializeApp( {
  apiKey: "AIzaSyAoSVVXRDvOQtgIKYsD-EalIuKcU1pxf-o",
  authDomain: "biblioapp-932e5.firebaseapp.com",
  projectId: "biblioapp-932e5",
  storageBucket: "biblioapp-932e5.appspot.com",
  messagingSenderId: "217681397426",
  appId: "1:217681397426:web:7ddfecf11ef4ba032dabab"
})

const db = firebaseApp.firestore();

export { db };