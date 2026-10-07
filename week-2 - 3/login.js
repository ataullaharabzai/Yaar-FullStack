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

    const userData = JSON.parse(localStorage.getItem("user")); 

    if(!userData) {
      alert('Account not found!')
      return
    }

    if (phone.value.trim() !== userData.phone.trim()) {
      alert("Incorrect phone number, Try  again!");
      return;
    }

    if (phone.value.trim() === userData.phone.trim()) {
      window.location.href = "home.html";
      phone.value = "";
      return;
    }
  });
}

if (guestUser) {
  guestUser.addEventListener("click", () => {
    window.location.href = "home.html";
  });
}
