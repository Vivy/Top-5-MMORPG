// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFXVQDPOWRZ7-f0fEpYVjJmg9uko4Ybdk",
  authDomain: "mmorpg-becc0.firebaseapp.com",
  projectId: "mmorpg-becc0",
  storageBucket: "mmorpg-becc0.appspot.com",
  messagingSenderId: "167677179489",
  appId: "1:167677179489:web:a2cc0453f32d958f9ddc20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const sendData = async (games) => {
  console.log()
  const mmorpg = collection(db, "games");

  await setDoc(doc(mmorpg, "FF14"), {
    obiect
  })
  console.log("working")
}

// name: "Final Fantasy 14",
// subscription: "monthly",
// requirements: "windows 10"
export const getData = async () => {
  const mmorpgGame = doc(db, "games", "FF14");
  const simplu = await getDoc(mmorpgGame);
  if (simplu.exists()) {
    console.log("We have a game:", simplu.data())
  } else {
    console.log("Iar nu merge in pula mea!");
  }
}

// return console.log("game")

