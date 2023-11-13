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
});

function infoReveal(elementId, clickedLink) {
  const allRevealTexts = document.querySelectorAll('.revealText');
  allRevealTexts.forEach(text => {
      text.style.display = "none";
  });

  const revealText = document.getElementById(elementId);
  if (revealText) {
      revealText.style.display = "block";
  }

  // Remove 'active' class from all links
  const allLinks = document.querySelectorAll('.service-header a');
  allLinks.forEach(link => {
      link.classList.remove('active');
  });

  // Add 'active' class to the clicked link
  if (clickedLink) {
      clickedLink.classList.add('active');
  }
};


// const infoReveal = document.getElementById('click1');
// const infoReveal2 = document.getElementById('click2');
// const infoReveal3 = document.getElementById('click3');

// // Assuming you want to show 'infoReveal' when it is clicked
// infoReveal.addEventListener('click', function() {
//   infoReveal.style.display = "block";
// });
// // Assuming you want to show 'infoReveal2' when it is clicked
// infoReveal2.addEventListener('click', function() {
//   infoReveal2.style.display = "block";
// });
// // Assuming you want to show 'infoReveal3' when it is clicked
// infoReveal3.addEventListener('click', function() {
//   infoReveal3.style.display = "block";
// });

//wordchange effect
var typed = new Typed(".effect", {
  strings: ["Front End Designer.", 
  "Java Programmer.", 
  "Front End Tester.", 
  "Back End Designer."],
  loop: true,
  typeSpeed: 80,
  backSpeed: 5,
  backDelay: 2500,
});

//Pop up contact page
// const showPopupButton = document.getElementById("showPopup");
// const closePopupButton = document.getElementById("closePopup");
// const contactPopup = document.getElementById("contactPopup");

// showPopupButton.addEventListener("click", function () {
//     contactPopup.style.display = "block";
// });

// closePopupButton.addEventListener("click", function () {
//     contactPopup.style.display = "none";
// });

//email sender
var btn = document.getElementById('submit-btn');
btn.addEventListener('click' , function(e){
  
  var nameText = document.getElementById('nameText').value;
  var emailText = document.getElementById('emailText').value;
  var messageText = document.getElementById('messageText').value;
  var body = 'Name: ' + nameText + '<br/> Email: ' + emailText + '<br/> Message: ' + messageText;
  Email.send({
  SecureToken : "1b431171-2983-456a-a8f1-8e5a90909c26",
  To : 'xolinxiweni@gmail.com',
  From : "xolinxiweni@gmail.com",
  Subject : "From Website Visits",
  Body : body
}).then(
message => alert(message)
);
})
