// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getDatabase,
  ref,
  child,
  get,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9yWiYQpJw0Dlw9WmWNYcZPvhdRgPlKos",
  authDomain: "firebox-http5214.firebaseapp.com",
  databaseURL: "https://firebox-http5214-default-rtdb.firebaseio.com",
  projectId: "firebox-http5214",
  storageBucket: "firebox-http5214.appspot.com",
  messagingSenderId: "550282003514",
  appId: "1:550282003514:web:4cc92a41cef777560ca103"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const messages = ref(database, "messages");
onValue(messages, (snapshot) => {
  const ul = document.getElementById("messages");

  const data = snapshot.val();
  console.log(data);
  snapshot.forEach((childSnapshot) => {
    console.log(childSnapshot.key);
    console.log(childSnapshot.val());
    let childData = childSnapshot.val();

    let text = document.createTextNode(childData.message);
    let li = document.createElement("li");
    li.appendChild(text);
    ul.appendChild(li);
  });
});
