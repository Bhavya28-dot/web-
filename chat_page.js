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
room_name=localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();