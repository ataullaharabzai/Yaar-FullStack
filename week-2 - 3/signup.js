const signupForm = document.getElementById("signup-form");
const fullName = document.getElementById("fullname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const password = document.getElementById("password");
const countryCode = document.getElementById("countryCode");

// ------------ Create account page -------------

const phoneValidation = () => {
  if (!phone || !countryCode) {
    return;
  }

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

  return true;
};

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (fullName && password) {
      if (
        !fullName.value.trim() ||
        !phone.value.trim() ||
        !password.value.trim()
      ) {
        alert("Enter your name or phone number");
        return;
      }

      if (password.value.length < 8) {
        alert("Password must be at least 8 characters");
        return;
      }
    }

    const newUser = {
      id: Date.now(),
      name: fullName.value,
      phone: phone.value,
      email: email.value,
    };

    if(!phoneValidation()) return;

    localStorage.setItem("user", JSON.stringify(newUser));

    window.location.href = "home.html";
  });
}
