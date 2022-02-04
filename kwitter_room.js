
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAqRxNQeSb5rAYu2pZD0N3Ss3z7uFqgF3g",
      authDomain: "kwitter-9d02b.firebaseapp.com",
      databaseURL: "https://kwitter-9d02b-default-rtdb.firebaseio.com",
      projectId: "kwitter-9d02b",
      storageBucket: "kwitter-9d02b.appspot.com",
      messagingSenderId: "585726830350",
      appId: "1:585726830350:web:bb884e6fd2c60db637995f"
    };
 firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome "+ user_name + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);
         window.location= "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Roomname - " + Room_names);
      row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #" +Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
 
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";

}