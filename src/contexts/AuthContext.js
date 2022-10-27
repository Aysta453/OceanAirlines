// import React, { useContext, useEffect, useState } from "react";
// import { firebase, auth } from "../app/firebase/firebaseInit";
// import { hash } from "../utils/Common";
// // import * as ErrorChecker from "../utils/ErrorChecker";

// const AuthContext = React.createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscibe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });
//     return unsubscibe;
//   }, []);

//   async function signup(email, password, navigate) {
//     try {
//       await auth.signInWithEmailAndPassword(email, password);
//       auth.onAuthStateChanged(async (user) => {
//         if (user) {
//           const onIdTokenChangedUnsubscribe = auth.onIdTokenChanged((user) => {
//             const unsubscribeSetInterval = setTimeout(() => {
//               auth.currentUser.reload();
//               auth.currentUser.getIdToken(true);
//             }, 10000);

//             if (user && user.emailVerified) {
//               navigate("/login");
//               clearInterval(unsubscribeSetInterval);
//               auth.onAuthStateChangedUnsubscribe();
//               return onIdTokenChangedUnsubscribe();
//             }
//           });
//         }
//       });
//     } catch (error) {
//       return ErrorChecker.VerifyFirebaseErrorCode(error.code);
//     }
//   }

//   async function signin(email, password) {
//     const hashPassword = hash(password).toString();
//     try {
//       await auth.signInWithEmailAndPassword(email, hashPassword);
//     } catch (error) {
//       console.error("AuthContext_signin_error: ", error);
//       toast.error(`${ErrorChecker.VerifyFirebaseErrorCode(error.code)}`);
//     }
//   }

//   function logout() {
//     return auth.signOut();
//   }

//   const value = {
//     currentUser,
//     signin,
//     signup,
//     logout,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }

// export default AuthProvider;
