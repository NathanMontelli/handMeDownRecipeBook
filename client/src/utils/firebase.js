// Functions from the SDK
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Web app's Firebase config
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: "handmedownrecipebook.firebaseapp.com",
  projectId: "handmedownrecipebook",
  storageBucket: "handmedownrecipebook.appspot.com",
  messagingSenderId: "656429988125",
  appId: "1:656429988125:web:df46bab8de125b9546c9f4",
  measurementId: "G-8S8FK1WFPX"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export default firebase