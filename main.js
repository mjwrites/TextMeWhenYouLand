<script src="https://www.gstatic.com/firebasejs/4.5.1/firebase.js"></script>
functions startServer(){
  var config = {
    apiKey: "AIzaSyCXLWmoF_siEWeAEOZK7SaBBJdJx3A3Ang",
    authDomain: "textmewhenyouland.firebaseapp.com",
    databaseURL: "https://textmewhenyouland.firebaseio.com",
    projectId: "textmewhenyouland",
    storageBucket: "textmewhenyouland.appspot.com",
    messagingSenderId: "1049450517098"
  };
  firebase.initializeApp(config);
}
