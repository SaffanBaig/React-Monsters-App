import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC7ilvbtVoeGIvslNeCEWD5oxQtSaL8Ie0",
    authDomain: "crwn-db-680aa.firebaseapp.com",
    databaseURL: "https://crwn-db-680aa.firebaseio.com",
    projectId: "crwn-db-680aa",
    storageBucket: "crwn-db-680aa.appspot.com",
    messagingSenderId: "905243614208",
    appId: "1:905243614208:web:8e09b88f3839b30db40ce5",
    measurementId: "G-DFQCTJ6XVW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;