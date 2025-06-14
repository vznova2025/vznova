
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCxhcWhSKvjXFmt6grD43zu7sqs-wy_xeY",
  authDomain: "vznova-d6497.firebaseapp.com",
  projectId: "vznova-d6497",
  storageBucket: "vznova-d6497.firebasestorage.app",
  messagingSenderId: "608106047555",
  appId: "1:608106047555:web:97176785c08738ca3e8cf6",
  measurementId: "G-NLE2Y9SNFS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.querySelector("#register-form form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("تم إنشاء الحساب بنجاح!");
  } catch (error) {
    alert("حدث خطأ أثناء إنشاء الحساب: " + error.message);
  }
});

document.querySelector("#login-form form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("تم تسجيل الدخول بنجاح!");
  } catch (error) {
    alert("فشل تسجيل الدخول: " + error.message);
  }
});
