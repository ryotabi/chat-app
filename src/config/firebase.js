import * as firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD_D17fdzYrHN5mBFkscM62Pwt2D8heJWw",
  authDomain: "chat-app-20d66.firebaseapp.com",
  databaseURL: "https://chat-app-20d66.firebaseio.com",
  projectId: "chat-app-20d66",
  storageBucket: "chat-app-20d66.appspot.com",
  messagingSenderId: "1005507249223",
  appId: "1:1005507249223:web:54090b3851f16c71cf1d62",
  measurementId: "G-0FZ8CE49S3"
}

firebase.initializeApp(firebaseConfig)

export default firebase