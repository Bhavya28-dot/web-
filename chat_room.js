var firebaseConfig = {
  apiKey: "AIzaSyCR2e1o50nA7ie-vVCxCnrXnY0NQDB3mJ4",
  authDomain: "ice--cream-social.firebaseapp.com",
  databaseURL: "https://ice--cream-social-default-rtdb.firebaseio.com",
  projectId: "ice--cream-social",
  storageBucket: "ice--cream-social.appspot.com",
  messagingSenderId: "975098434701",
  appId: "1:975098434701:web:12607f14ae97ea78273ec4"
};


firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";


  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML ="";
snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console.log("Room Name-"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
});});}
getData();

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

 function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
 }
function redirectToRoomName(){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="chat_page.html";
}




function logout(){
  window.location="index.html";
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
}