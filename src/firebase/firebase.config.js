// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.vite_apiKey ,
//   authDomain:import.meta.env.vite_authDomain ,
//   projectId:import.meta.env.vite_projectId ,
//   storageBucket:import.meta.env.vite_storageBucket ,
//   messagingSenderId:import.meta.env.vite_messagingSenderId,
//   appId:import.meta.env.vite_appId 
// };

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