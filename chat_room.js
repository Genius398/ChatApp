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





function user(){
    user_name=localStorage.getItem("Username");
    firebase.database().ref("/").child(user_name).update({purpose:"adding user"});
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 console.log("room name-"+Room_names);
 row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr> ";
 document.getElementById("output").innerHTML+=row;
 
  //Start code

 //End code
 });});}
getData();


function redirectToRoomName(name){
  localStorage.setItem("room_name", name);
  window.location="chat_room.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");

  window.location="index.html";
}