
// var skills = document.getElementById('link');

.// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElemenById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    // skills.style.float = 'center';
  } else {
    header.classList.remove("sticky");
    // skills.style.float = 'left';
  }
}

// Trigger event every time you scroll
