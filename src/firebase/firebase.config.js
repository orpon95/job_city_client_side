// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   APIKEY: import.meta.env.VITE_APIKEY,
//   AUTHDOMAIN: import.meta.env.VITE_AUTHDOMAIN,
//   PROJECTID: import.meta.env.VITE_PROJECTID,
//   STORAGEBUCKET: import.meta.env.VITE_STORAGEBUCKET,
//   MESSAGINGSENDERID: import.meta.env.VITE_MESSAGINGSENDERID,
//   APPID: import.meta.env.VITE_APPID
// };


// manual firebae
const firebaseConfig = {
  apiKey: "AIzaSyCHczNxxh9I6cO3GwgdMI3oA1h2huZzGP0",
  authDomain: "job-city-b516d.firebaseapp.com",
  projectId: "job-city-b516d",
  storageBucket: "job-city-b516d.appspot.com",
  messagingSenderId: "699368656425",
  appId: "1:699368656425:web:4b8ca9edb0df50e41bd638"
};






// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
// export default const auth = getauth(app)