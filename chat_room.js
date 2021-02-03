var firebaseConfig = {
    apiKey: "AIzaSyD0rcO8KEf-ktwEWdhQXTzvC_2LY1D0cR8",
    authDomain: "project-94---96.firebaseapp.com",
    projectId: "project-94---96",
    storageBucket: "project-94---96.appspot.com",
    messagingSenderId: "770813883848",
    appId: "1:770813883848:web:4fd4e563e3aa327ab73cfd",
    measurementId: "G-YJ3P9EYE03"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();





function user(){
    user_name=localStorage.getItem("Username");
    firebase.database().ref("/").child(user_name).update({purpose:"adding user"});
}