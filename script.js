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
  strings: [" Designer", " Developer", " Tester"],
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

//Pop up contact page
const showPopupButton2 = document.getElementById("showPopup2");
const closePopupButton2 = document.getElementById("closePopup2");
const contactPopup2 = document.getElementById("contactPopup2");

showPopupButton2.addEventListener("click", function () {
    contactPopup2.style.display = "block";
});

closePopupButton2.addEventListener("click", function () {
    contactPopup2.style.display = "none";
});
//email sender
var btn = document.getElementById('btn');
btn.addEventListener('click' , function(e){
  e.preventDefault()
  var nameText = document.getElementById('nameText').value;
  var emailText = document.getElementById('emailText').value;
  var messageText = document.getElementById('messageText').value;
  var body = 'Name: ' + nameText + '<br/> Email: ' + emailText + '<br/> Message: ' + messageText;
  Email.send({
    SecureToken : "bcfebab8-2cf5-4eaf-bcf0-906ecadf425a",
    To : 'xolinxiweni@gmail.com',
    From : "xolinxiweni@gmail.com",
    Subject : "From Website Visits",
    Body : body
  }).then(
  message => alert(message)
  );
})
