
function toggleForm(type) {
  document.getElementById("signup").classList.remove("active");
  document.getElementById("login").classList.remove("active");
  document.getElementById(type).classList.add("active");
}

function redirectToDashboard() {
  window.location.href = "dashboard.html";
}
