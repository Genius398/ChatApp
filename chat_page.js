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




  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
  }
