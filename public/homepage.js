// Get the navbar
var navbar = document.querySelector(".navbar");

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

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};


var text = "Finally! A Website that understands how many coffees a thesis requires.";
var typingSpeed = 100; // in milliseconds
var i = 0;
var typingText = document.querySelector(".typing-text");

function type() {
  if (i < text.length) {
    typingText.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, typingSpeed);
  }
}

document.getElementById("homebutton").addEventListener("click", function() {
  // code to execute when the "Home" button is clicked
});

document.getElementById("studentlogin").addEventListener("click", function() {
  // code to execute when the "Student Login" button is clicked
});

document.getElementById("advisorlogin").addEventListener("click", function() {
  // code to execute when the "Advisor Login" button is clicked
});

type();

