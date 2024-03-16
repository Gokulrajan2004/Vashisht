/***** ..codeauthor:: Muthukumar Subramanian *****/
/*****  HTML JavaScript to Write and Read on the Google Firebase *****/
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getDatabase, ref, set, child, update, remove, onValue } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";

/***** Firebase config *****/
const firebaseConfig = {
    apiKey: "AIzaSyCg01uGu4_ernKS6prwOxvWxgzB5PZkbOQ",
    authDomain: "esp32-database-85b08.firebaseapp.com",
    databaseURL: "https://esp32-database-85b08-default-rtdb.firebaseio.com",
    projectId: "esp32-database-85b08",
    storageBucket: "esp32-database-85b08.appspot.com",
    messagingSenderId: "454804841444",
    appId: "1:454804841444:web:06ae21550e0107abf9ddf1",
    measurementId: "G-DKNKLPTVV5"
  };

/***** Initialize Firebase *****/
const app = initializeApp(firebaseConfig);

/***** write data to firebase *****/
/***** read data from firebase *****/
function read_db() {
    var db = getDatabase();
    var connect_db = ref(db, 'ESP32_DB/' + 'ESP32_User_Login_Table/');
    var retrieve_data='';
    console.log("DEBUG: Read function");
    onValue(connect_db, (snapshot) => {
        retrieve_data = snapshot.val();
        //console.log("user_name: " + retrieve_data.user_name);
        //console.log("user_name_password: " + retrieve_data.user_name_password);
        call_loop_print(retrieve_data);
        document.getElementById("display_read_data").innerHTML =  "<pre>" + "user_name: " + retrieve_data.user_name +
                '\n' + "user_name_password: " + retrieve_data.user_name_password + "</pre>";
        })
    function call_loop_print(retrieve_data){
        for (var r=0;r<Object.entries(retrieve_data).length;r++){
            var key = Object.keys(retrieve_data)[r];
            var value = retrieve_data[key];
            console.log("Key_" + r + ': ' + key + " Value_:" + r + ': ' + value );
           }
 }
}
/***** call read data function *****/
var read_data_from_firebase = document.getElementById("read_data_from_firebase");
read_data_from_firebase.addEventListener('click', read_db);