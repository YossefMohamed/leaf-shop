import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBCvboTgA5clg9nDmXFMtQT55ZHzs9rhHI",
  authDomain: "crwn-shop-29.firebaseapp.com",
  databaseURL: "https://crwn-shop-29.firebaseio.com",
  projectId: "crwn-shop-29",
  storageBucket: "crwn-shop-29.appspot.com",
  messagingSenderId: "382936230725",
  appId: "1:382936230725:web:d8ad8c4fc626d39c2aec2c",
  measurementId: "G-WZEB5R4YMX"
}
  
  
  export const createUserProfileDocument = async (userAuth , additionalData) => {

    if(!userAuth) return;
     
   const userRef = firestore.doc(`users/${userAuth.uid}`)
   const snapShot = await userRef.get();
   if(!snapShot.exists){
     const { displayName ,email } = userAuth;
     const createdAt =new Date()
    try{
      await userRef.set({
        displayName ,
        email , 
        createdAt,
        ...additionalData
      })
    }catch(e){
      console.log('this is my error',e.message )
    }
   }
   return userRef;

  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt : 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase ;