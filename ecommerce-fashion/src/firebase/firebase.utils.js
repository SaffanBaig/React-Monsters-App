import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB-dAbOyoJ8tTDM_iADRKBcWBc304hw3Y0",
    authDomain: "crwn-fashion-db.firebaseapp.com",
    databaseURL: "https://crwn-fashion-db.firebaseio.com",
    projectId: "crwn-fashion-db",
    storageBucket: "crwn-fashion-db.appspot.com",
    messagingSenderId: "271950701949",
    appId: "1:271950701949:web:e31ac6e4fc3758ba709814",
    measurementId: "G-BS4Z9XE73C"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google signin
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;