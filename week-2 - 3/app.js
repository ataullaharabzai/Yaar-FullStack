const form = document.getElementById("form-list");
const fullName = document.getElementById("fullname");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const countryCode = document.getElementById("countryCode");

// ------------ Create account page -------------

const phoneValidation = () => {
  if (!Number(phone.value)) {
    alert("Invalid phone number");
    return;
  }

  if (phone.value.length < 9 || phone.value.length > 10) {
    alert("Invalid phone number");
    return;
  }

  if (countryCode.value !== "+93") {
    alert("Invalid country code number");
    return;
  }

  window.location.href = "home.html";
};

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

  phoneValidation();
});

// -------------- Login page ----------------
const loginForm = document.getElementById("form-list");
const guestUser = document.querySelector(".guest-user");

loginForm.addEventListener("submit", () => {
  if (!phone.value.trim()) {
    alert("Enter your phone number");
    return;
  }

  phoneValidation();
});

guestUser.addEventListener("click", () => {
  window.location.href = "home.html";
});
