function login(){
    var user=document.getElementById("username").value;

    if (user == "")
    {
        window.alert("You can't continue without a username");    
    } 
    else
    {
        localStorage.setItem("Username",user);

        window.location="chat_room.html";        
    }
}