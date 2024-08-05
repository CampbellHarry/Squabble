const showPopupBtn = document.querySelector(".login-btn");
const hidePopupBtn = document.querySelector(".formPopup .close-btn");
const formPopup = document.querySelector(".formPopup");
const loginPopup = document.querySelector("#loginPopup");
const signupPopup = document.querySelector("#signUpPopUp");
const signupLink = document.querySelector("#signupLink");
const loginLink = document.querySelector("#loginLink");

// Show form popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.add("show-popup");
    loginPopup.style.display = "flex";
    signupPopup.style.display = "none";
});

// Hide form popup
hidePopupBtn.addEventListener("click", () => {
    document.body.classList.remove("show-popup");
});

// Switch to signup form
signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    loginPopup.style.display = "none";
    signupPopup.style.display = "flex";
});

// Switch to login form
loginLink.addEventListener("click", (e) => {
    e.preventDefault(); 
    signupPopup.style.display = "none";
    loginPopup.style.display = "flex";
});
