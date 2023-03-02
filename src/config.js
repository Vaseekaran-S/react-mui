
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAZXmEZCLKPWYqvY3MQrXSv57ea1i5ZKU4",
    authDomain: "myshop-b171e.firebaseapp.com",
    projectId: "myshop-b171e",
    storageBucket: "myshop-b171e.appspot.com",
    messagingSenderId: "819701042306",
    appId: "1:819701042306:web:684fab840ee7036e7b389b",
    measurementId: "G-HP1PSH9EH2"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)

