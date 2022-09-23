import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'
import { 
    getFirestore, 
    doc,
    setDoc,
    getDoc,
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

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch(error) {
            console.log('error creating the user', error.message)
        }
    }
    
    return userDocRef;
 }

 export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
 }

 export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
 }