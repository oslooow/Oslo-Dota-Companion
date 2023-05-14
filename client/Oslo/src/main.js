import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDROeSa7zQ3z1QqoiNTrLNy3KxpCwILQp0",
  authDomain: "oslo-iproject.firebaseapp.com",
  projectId: "oslo-iproject",
  storageBucket: "oslo-iproject.appspot.com",
  messagingSenderId: "516381165734",
  appId: "1:516381165734:web:702c5a72a92f8a0c844c67"
};
initializeApp(firebaseConfig);
const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})


app.use(pinia)
app.use(router)

app.mount('#app')
