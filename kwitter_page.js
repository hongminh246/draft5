const firebaseConfig = {
    apiKey: "AIzaSyAJ5YeCzQ07c1byJWzWdcIlc_g9Ad7ZDO0",
    authDomain: "kwitter-d5b38.firebaseapp.com",
    databaseURL: "https://kwitter-d5b38-default-rtdb.firebaseio.com",
    projectId: "kwitter-d5b38",
    storageBucket: "kwitter-d5b38.appspot.com",
    messagingSenderId: "901957470204",
    appId: "1:901957470204:web:f08b3cf01d925cd43bd479",
    measurementId: "G-JXVMZDXZXH"
};
const app = initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("rooom_name");

function send() {
    message = document.getElementById("messageInput").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: message,
        like: 0,
    });
    document.getElementById("messageInput").value = "";
}

function user_logout() {
    window.location.replace("kwitter_room.html");
}