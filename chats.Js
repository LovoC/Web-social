function logOut(){
    window.location = "index.html";
}

 var firebaseConfig = {
    apiKey: "AIzaSyBjHqUu6BXvwEA8_VBh0wQXiejMZcgbt6s",
    authDomain: "discard-d60d2.firebaseapp.com",
    databaseURL: "https://discard-d60d2-default-rtdb.firebaseio.com",
    projectId: "discard-d60d2",
    storageBucket: "discard-d60d2.appspot.com",
    messagingSenderId: "1070786676364",
    appId: "1:1070786676364:web:b62694b11a2bdd4eed5da9"
  };
  
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Bienvenido  "+ user_name + "  Esperamos que te puedas divertir con tus amigos";

function addRoom()
{
 
  room_name=document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "Agregar nombre de sala"
  });
  localStorage.setItem("room_name", room_name);

  window.location = "index2.html";

}
function getData() {
  firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("Nombres de salas -" + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      }); }); }
  getData();

  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location ="index2.html";
  }
  
  function logOut()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = ("index.html")
  }