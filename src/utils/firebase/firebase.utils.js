import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth'
import { 
    getFirestore, 
    doc,
    setDoc,
    getDoc,
    connectFirestoreEmulator,
 } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC8QvNhaGR_oahsXGu0dZgVjLv_04-1kVI",
    authDomain: "crwn-clothing-db-20f64.firebaseapp.com",
    projectId: "crwn-clothing-db-20f64",
    storageBucket: "crwn-clothing-db-20f64.appspot.com",
    messagingSenderId: "817019988928",
    appId: "1:817019988928:web:4632905b7b12bf72b4b625"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(error) {
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef;
 }