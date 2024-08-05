const showPopupBtn = document.querySelector(".login-btn");
const hidePopupBtn = document.querySelector(".formPopup .close-btn");
const formPopup = document.querySelector(".formPopup");
const loginSignupLink = document.querySelectorAll(".formBox .signup a")

//Show form popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

//Hide form popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === "signupLink" ? 'add' : 'remove']("show-signup");
    });
});