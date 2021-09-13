import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCeH-wVCkIQmf2pcP69F3wHKckURyLTUtg",
    authDomain: "facebook-clone-29a03.firebaseapp.com",
    projectId: "facebook-clone-29a03",
    storageBucket: "facebook-clone-29a03.appspot.com",
    messagingSenderId: "864972600313",
    appId: "1:864972600313:web:bb258217c628e1fe290328"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();