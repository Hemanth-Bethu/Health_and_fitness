let firebaseConfig = {
    // enter your firebase credentials here.

    
    apiKey: "AIzaSyAt9inT83oZ4ibZm9sXA6is4LQuyXimfjI",
    authDomain: "health-and-fitness-8a894.firebaseapp.com",
    projectId: "health-and-fitness-8a894",
    storageBucket: "health-and-fitness-8a894.appspot.com",
    messagingSenderId: "998642422337",
    appId: "1:998642422337:web:b07299b95fba11da07acc0",
    measurementId: "G-CDG3VW0QDG"
  

 



};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
    auth.signOut();
    location.reload();
}