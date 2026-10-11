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
