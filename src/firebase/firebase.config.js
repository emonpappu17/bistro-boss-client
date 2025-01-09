import { initializeApp } from "firebase/app";

const firebaseConfig = {
    // apiKey: "AIzaSyDeYLl6nuC4OeixkxEIz4DXL-bCcu422wY",
    // authDomain: "bistro-boss-643fb.firebaseapp.com",
    // projectId: "bistro-boss-643fb",
    // storageBucket: "bistro-boss-643fb.firebasestorage.app",
    // messagingSenderId: "921037830656",
    // appId: "1:921037830656:web:87129149af6448cd4eb6e5"

    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID
};

export const app = initializeApp(firebaseConfig);