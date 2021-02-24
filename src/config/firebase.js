// import firebase from 'firebase'
// ES Modules:
import firebase from 'firebase/app';
import 'firebase/firestore';
// import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAjzjQ8trvTiNQPmO43Z00s3u0-izlxoQA",
  authDomain: "fun-retrospective-a8c33.firebaseapp.com",
  projectId: "fun-retrospective-a8c33",
  storageBucket: "fun-retrospective-a8c33.appspot.com",
  messagingSenderId: "645991211375",
  appId: "1:645991211375:web:8b007f0f6dae9810e8c89a"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

export const db = firebase.firestore()
export const ts = firebase.firestore.FieldValue.serverTimestamp();
export const auth = firebase.auth();
export const GitHubProvider = new firebase.auth.GithubAuthProvider()
// export const emailAndPassProvider = new firebase.auth.Auth.signInWithEmailAndPassword

