//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBDHplaEZATAGSKlCNo1D_X9g_cc16iJdA",
      authDomain: "samrath-s-kwitter-92819.firebaseapp.com",
      databaseURL: "https://samrath-s-kwitter-92819-default-rtdb.firebaseio.com",
      projectId: "samrath-s-kwitter-92819",
      storageBucket: "samrath-s-kwitter-92819.appspot.com",
      messagingSenderId: "1065160783450",
      appId: "1:1065160783450:web:fffa0b77a4db08d6c04a63"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send() {
          msg = document.getElementById("msg").value;
            firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0      
            });
            document.getElementById("msg").value = "";     
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
