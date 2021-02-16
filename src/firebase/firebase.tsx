import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/database";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA8k3CxYHe1SPnkFfyqc80BBDK6zORkOWw",
  authDomain: "meerkast-c2acc.firebaseapp.com",
  databaseURL: "https://meerkast-c2acc-default-rtdb.firebaseio.com",
  projectId: "meerkast-c2acc",
  storageBucket: "meerkast-c2acc.appspot.com",
  messagingSenderId: "921103844818",
  appId: "1:921103844818:web:c6d8b9d34d7839a179b40b",
  measurementId: "G-1EKJ4YRQRW",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database;
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase, googleAuthProvider, database as default };
// // database().ref("users").push({
// //   username: "absolutezero",
// //   password: "urmom",
// // });
// // database().ref("users").push({
// //   username: "skankhunt",
// //   password: "lmao",
// // });

// database()
//   .ref("users")
//   .once("value")
//   .then((snap) => {
//     const users: any = [];
//     snap.forEach((childSnap) => {
//       users.push({
//         id: childSnap.key,
//         ...childSnap.val(),
//       });
//     });
//     console.log(users);
//   });
// database()
//   .ref("users")
//   .on("value", (snap) => {
//     const users: any = [];
//     snap.forEach((childSnap) => {
//       users.push({
//         id: childSnap.key,
//         ...childSnap.val(),
//       });
//     });
//     console.log(users);
//   });
// database()
//   .ref("users")
//   .on("child_changed", (snap) => {
//     console.log(snap.val(), snap.key);
//   });

// // database()
// //   .ref("location/city")
// //   .once("value")
// //   .then((snapshot) => {
// //     console.log(snapshot.val());
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });
// // database()
// //   .ref()
// //   .on("value", (snapshot) => {
// //     console.log(snapshot.val());
// //   });
// // setTimeout(() => {
// //   database().ref("age").set(35);
// // }, 3500);
// // firebase
// //   .database()
// //   .ref()
// //   .set({
// //     name: "ilks",
// //     stress: 9,
// //     job: {
// //       title: "teacher",
// //       reality: "developer",
// //     },
// //     age: 23,
// //     isSingle: true,
// //     location: {
// //       city: "Dyzce",
// //       home: "your mum",
// //     },
// //   })
// //   .then(() => {
// //     console.log("50 kg");
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });

// // firebase.database().ref("age").set(15);
// // firebase.database().ref("location/city").set("Duzce");
// // firebase.database().ref("attributes").set({ height: 199, weight: "50kg" });

// // firebase
// //   .database()
// //   .ref("age")
// //   .remove()
// //   .then(() => {
// //     console.log("removed");
// //   })
// //   .catch((error) => console.log(error));

// // firebase.database().ref().update({
// //   name: "Şş",
// // });
// // firebase.database().ref().update({
// //   "location/city": "london",
// // });

// // firebase.database().ref().update({
// //   stress: 1,
// //   "job/title": "software engineer",
// // });
