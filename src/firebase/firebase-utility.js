// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
   getAuth, GoogleAuthProvider,
   signInWithPopup, signOut
} from 'firebase/auth';
import { firebaseConfig } from './firebase-config';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// info related to user currently authenticated
export const auth = getAuth(app);

// Google Provier
const googleProvider = new GoogleAuthProvider();

// Sign In
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

// Sign Out
export const gooleSignOut = () => signOut(auth);