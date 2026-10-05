const form = document.getElementById("form-list");
const fullName = document.getElementById("fullname");
const phone = document.getElementById("phone");
const password = document.getElementById("password");

// ------------ Create account page -------------
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!fullName.value.trim() || !phone.value.trim() || !password.value.trim()) {
    alert("Enter your email or phone number");
    return;
  }

  if (password.value.length < 8) {
    alert("Password must be at least 8 characters");
    return;
  }

  window.location.href = "home.html";
});
