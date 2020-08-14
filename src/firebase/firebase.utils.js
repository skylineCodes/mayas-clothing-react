import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDjHZrzO1_gORLAeeMIySrqzWibWhuUT9U",
    authDomain: "mayas-db.firebaseapp.com",
    databaseURL: "https://mayas-db.firebaseio.com",
    projectId: "mayas-db",
    storageBucket: "mayas-db.appspot.com",
    messagingSenderId: "922735075890",
    appId: "1:922735075890:web:0f58e6d2b601d8182ad22b",
    measurementId: "G-W3RZ9F5JJB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;