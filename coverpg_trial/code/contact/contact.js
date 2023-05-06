function sendEmail() {
  Email.send({
    Host: "hitakshi.hans.2003@gmail.com",
    Username: "hitakshi.hans.2003@gmail.com",
    Password: "hans.hitakshi.4603",
    To: 'hitakshi.hans.2003@gmail.com',
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body: "Name:" + document.getElementById("name").value +
      "<br> Email:" + document.getElementById("email").value +
      "<br> Phone Number:" + document.getElementById("phone").value +
      "<br> Message:" + document.getElementById("message").value
  }).then(
    message => alert("Message Sent Succesfully")
  );
}
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}