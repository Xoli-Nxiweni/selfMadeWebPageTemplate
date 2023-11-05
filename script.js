function contactPopUp(){
  alert("Under Development!!")
};

//sticky scroll behavior
const header = document.querySelector("nav");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

//navsDisappear
const checkbox = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('a');
function closeMobileNav(){
  checkbox.checked = false;
}
navLinks.forEach(link => {
  link.addEventListener('click', closeMobileNav)
})

//wordchange effect
var typed = new Typed(".effect", {
  strings: ["Designer", "Developer", "Tester"],
  loop: true,
  typeSpeed: 75,
  backSpeed: 5,
  backDelay: 2500,
});

//Pop up contact page
const showPopupButton = document.getElementById("showPopup");
const closePopupButton = document.getElementById("closePopup");
const contactPopup = document.getElementById("contactPopup");

showPopupButton.addEventListener("click", function () {
    contactPopup.style.display = "block";
});

closePopupButton.addEventListener("click", function () {
    contactPopup.style.display = "none";
});