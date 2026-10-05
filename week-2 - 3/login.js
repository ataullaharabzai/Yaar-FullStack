const loginForm = document.getElementById("login-form");
const guestUser = document.querySelector(".guest-user");
const phone = document.getElementById("phone");

// const phoneValidation = () => {
//   if (!phone || !countryCode) {
//     return;
//   }

//   if (!Number(phone.value)) {
//     alert("Invalid phone number");
//     return;
//   }

//   if (phone.value.length < 9 || phone.value.length > 10) {
//     alert("Invalid phone number");
//     return;
//   }

//   if (countryCode.value !== "+93") {
//     alert("Invalid country code number");
//     return;
//   }

//   //   window.location.href = "home.html";

//   return true;
// };

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {

    e.preventDefault()

    if (phone && !phone.value.trim()) {
      alert("Enter your phone number");
      return;
    }

    if (countryCode.value !== "+93") {
      alert("Invalid country code number");
      return;
    }

    const userData = JSON.parse(localStorage.getItem("user"));

    if (phone.value.trim() === userData.phone.trim()) {
      window.location.href = 'home.html'
      phone.value = ''
    } else {
      alert('Incorrect phone number, Try  again!')
    }

    // phoneValidation();
  });
}

if (guestUser) {
  guestUser.addEventListener("click", () => {
    window.location.href = "home.html";
  });
}
