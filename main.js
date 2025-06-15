
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// تكوين Firebase الخاص بك
const firebaseConfig = {
  apiKey: "AIzaSyCxhcWhSKvjXFmt6grD43zu7sqs-wy_xeY",
  authDomain: "vznova-d6497.firebaseapp.com",
  projectId: "vznova-d6497",
  storageBucket: "vznova-d6497.appspot.com",
  messagingSenderId: "608106047555",
  appId: "1:608106047555:web:97176785c08738ca3e8cf6",
  measurementId: "G-NLE2Y9SNFS"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// معالجة النموذج
document.getElementById("transactionForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const type = document.getElementById("type").value;
  const amount = parseFloat(document.getElementById("amount").value);
  const user = auth.currentUser;

  if (user && !isNaN(amount)) {
    try {
      await addDoc(collection(db, "transactions"), {
        userId: user.uid,
        type,
        amount,
        status: "pending",
        timestamp: serverTimestamp()
      });
      alert("تم إرسال الطلب بنجاح!");
    } catch (error) {
      alert("فشل في الإرسال: " + error.message);
    }
  } else {
    alert("يرجى تسجيل الدخول أو إدخال مبلغ صحيح");
  }
});
