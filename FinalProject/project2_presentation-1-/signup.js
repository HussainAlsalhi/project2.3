//signup function
function signUp(){
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  auth.createUserWithEmailAndPassword(email.value,password.value).then(cred=> {
     return db.collection('Users').doc(cred.user.uid).set({
       });
    })
  //
  .catch(e=>alert(e.message));
     alert("SignUp Successfully");

   // When no errors create the account

}
  //signOut

  /*function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }*/

  ///jjjji

  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  }) 