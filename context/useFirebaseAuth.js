// import { useState, useEffect } from 'react'
// // import Firebase from '../config/firebase';
// import { auth } from '../config/firebase';
// import { getAuth, onAuthStateChanged, signInWithEmailAndPassword,signOut } from "firebase/auth";
// const formatAuthUser = (user) => ({
//   uid: user.uid,
//   email: user.email
// });

// export default function useFirebaseAuth() {

//   const [authUser, setAuthUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const clear = () => {
//     setAuthUser(null);
//     setLoading(true);
//   };
//   const signInWithEmailAndPassword = (email, password) =>
//       signInWithEmailAndPassword(email, password);
//   const signOut = () =>
//       signOut().then(clear);


//   const authStateChanged = async (authState) => {
//     if (!authState) {
//       setAuthUser(null)
//       setLoading(false)
//       return;
//     }

//     setLoading(true)
//     var formattedUser = formatAuthUser(authState);
//     setAuthUser(formattedUser);    
//     setLoading(false);
//   };

// // listen for Firebase state change
//   useEffect(() => {
//     const unsubscribe =   auth.onAuthStateChanged(authStateChanged);
//     return () => unsubscribe();
//   }, []);

//   return {
//     authUser,
//     loading,
//     signInWithEmailAndPassword,
//     signOut,
//   };
// }