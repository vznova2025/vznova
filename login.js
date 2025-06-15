function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      alert("تم تسجيل الدخول بنجاح");
      // إعادة توجيه المستخدم...
    })
    .catch((error) => {
      alert("خطأ: " + error.message);
    });
}