
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      document.getElementById('message').innerText = 'تم تسجيل الدخول بنجاح';
    })
    .catch((error) => {
      document.getElementById('message').innerText = error.message;
    });
}
