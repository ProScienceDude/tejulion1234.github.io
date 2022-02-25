firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        document.getElementById("user_div").style.display = "intial"
        document.getElementById("login_div").style.display = "none"
    } else {
        document.getElementById("user_div").style.display = "none"
        document.getElementById("login_div").style.display = "inital"
    }
  });

function login(){
    var email = document.getElementById("usern").value
    var password = document.getElementById("pwd").value
    
firebase.auth().signInWithEmailAndPassword(email, password)
.then((userCredential) => {
  // Signed in
  var user = userCredential.user;
  alert("Thanks!")
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  
});
}  