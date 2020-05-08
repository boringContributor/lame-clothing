import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBAXnSFZfF-RJl8DAf6ZyBHpnv2YNLu_p4",
    authDomain: "lame-db.firebaseapp.com",
    databaseURL: "https://lame-db.firebaseio.com",
    projectId: "lame-db",
    storageBucket: "lame-db.appspot.com",
    messagingSenderId: "660329315509",
    appId: "1:660329315509:web:4523a202c9a1324a0852fc"
};

export const createUserProfilDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc('users/1232342435d');
    const snapShot = await userRef.get();

    console.log(snapShot);

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
