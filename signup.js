
function signup() {
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      document.getElementById('signupMessage').innerText = 'تم إنشاء الحساب. قم بتسجيل الدخول.';
    })
    .catch((error) => {
      document.getElementById('signupMessage').innerText = error.message;
    });
}
