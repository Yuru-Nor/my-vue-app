import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "./router/index";

import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADb6jeZscUXYz4LJBnceOBYB1OG6hnJpI",
  authDomain: "vite-project-bb9a0.firebaseapp.com",
  projectId: "vite-project-bb9a0",
  storageBucket: "vite-project-bb9a0.appspot.com",
  messagingSenderId: "617519354793",
  appId: "1:617519354793:web:3ba6e9edc46b2af3492ab8"
  //measurementId: "G-P1L264VXTG"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig); ここだけ少し変更しています
initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount("#app");

//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
