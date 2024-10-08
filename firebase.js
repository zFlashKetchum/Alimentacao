import {initializeApp} from "firebase/app";
import{getFirestore}from "firebase/firestore";

const firebaseConfig ={
    apiKey: "AIzaSyD1m9614KWHEAufmo2k1N4c0dk0GpsPVGg",
    authDomain: "apprefeicaokaic.firebaseapp.com",
    projectId: "apprefeicaokaic",
    storageBucket: "apprefeicaokaic.appspot.com",
    messagingSenderId: "252218391607",
    appId: "1:252218391607:web:d23f47815231eb5e2693b2",
    measurementId: "G-CB35B04FVJ"}

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);