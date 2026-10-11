const loginForm = document.getElementById("login-form");
const guestUser = document.querySelector(".guest-user");
const phone = document.getElementById("phone");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (phone && !phone.value.trim()) {
      alert("Enter your phone number");
      return;
    }

    if (countryCode.value !== "+93") {
      alert("Invalid country code number");
      return;
    }

    const allUsers = JSON.parse(localStorage.getItem("user")) || [];
    const matchUser = allUsers.find(
      (user) => user && String(user.phone).trim() === phone.value.trim(),
    );

    if (matchUser) {
      window.location.href = "home.html";
      phone.value = "";
      return;
    }

    if (allUsers.length === 0) {
      alert("Account not found!");
      return;
    }

    alert("Incorrect phone number, Try again!");
  });
}

if (guestUser) {
  guestUser.addEventListener("click", () => {
    window.location.href = "home.html";
  });
}
