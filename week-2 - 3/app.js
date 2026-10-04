const signupForm = document.getElementById("signup-form");
const fullName = document.getElementById("fullname");
const phone = document.getElementById("phone");
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

  window.location.href = "home.html";
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
        alert("Enter your email or phone number");
        return;
      }

      if (password.value.length < 8) {
        alert("Password must be at least 8 characters");
        return;
      }
    }

    phoneValidation();
  });
}

// -------------- Login page ----------------
const loginForm = document.getElementById("login-form");
const guestUser = document.querySelector(".guest-user");

if (loginForm) {
  loginForm.addEventListener("submit", () => {
    if (phone && !phone.value.trim()) {
      alert("Enter your phone number");
      return;
    }

    phoneValidation();
  });
}

if (guestUser) {
  guestUser.addEventListener("click", () => {
    window.location.href = "home.html";
  });
}

// ------------------ OTP page -----------------
const otpButtons = document.querySelectorAll(".otpBtn");
const otpBoxes = document.querySelectorAll(".otp-box");
const verifyBtn = document.querySelector(".verify-btn");

let otp = "";

if (otpButtons && otpBoxes) {
  otpButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (otp.length >= otpBoxes.length) {
        return;
      }

      otp += button.textContent;

      otpBoxes[otp.length - 1].textContent = button.textContent;
    });
  });
}

if (verifyBtn) {
  verifyBtn.addEventListener("click", () => {
    if (otp.length !== otpBoxes.length) {
      alert("Please enter the complete OTP!");
      return;
    }

    if (otp === "3344") {
      window.location.href = "home.html";
    } else {
      alert("Invalid OTP code");
      otp = "";
    }

    otpBoxes.forEach((box) => {
      box.textContent = "";
    }); 
  });
}


// ---------- Add address page -----------------

const logout = document.querySelector('.logout')

if(logout) {
  logout.addEventListener('click', () => {
    window.location.href = 'login.html'
  })
}