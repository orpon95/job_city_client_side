// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectedId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};


// manual firebae
// const firebaseConfig = {
//   apiKey: "AIzaSyCHczNxxh9I6cO3GwgdMI3oA1h2huZzGP0",
//   authDomain: "job-city-b516d.firebaseapp.com",
//   projectId: "job-city-b516d",
//   storageBucket: "job-city-b516d.appspot.com",
//   messagingSenderId: "699368656425",
//   appId: "1:699368656425:web:4b8ca9edb0df50e41bd638"
// };






// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
// export default const auth = getauth(app)