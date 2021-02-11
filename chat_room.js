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
  console.log(firebase_message_id);
  console.log(message_data);
  name=message_data['name'];
  message=message_data['message'];
  like=message_data['like'];
  name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";
  message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
  like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)' >";
  span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span> </button> <hr>";
  row=name_with_tag+message_with_tag+like_button+span_with_tag;
  
  document.getElementById("output").innerHTML+=row;

 //End code
 });});}
getData();


function redirectToRoomName(name){
  localStorage.setItem("room_name", name);
  window.location="chat_room.html";
}

function updateLike(message_id){
  console.log("clicked on like button - "+message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);


  firebase.database().ref(room_name).child(message_id).update({
       like : updated_likes 
  });
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");

  window.location="index.html";
}