
/* sets up variables and functions for calling makeSticky and parallax when scrolling */
window.onscroll = function() {makeSticky(), parallax()};

var text = document.getElementById('text');
var stars = document.getElementById('stars');
       
          /* let debris = document.getElementById('debris');
          let rocks = document.getElementById('rocks'); */
var mnts = document.getElementById('mnts');
var basin = document.getElementById('basin');
var logo = document.getElementById('logo');

function parallax() {
    var value = window.scrollY;
    text.style.top = 40 + value * -0.2 + '%';
    stars.style.top = value * 0.6 + 'px';
    mnts.style.top = value * 0.7 + 'px';
    basin.style.top = value * 0.30 + 'px';
}


var header = document.getElementById("header");
var logo = document.getElementById("logo");

// offset of header
var sticky = header.offsetTop;

// Add the sticky class to the header
function makeSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    logo.classList.add("stickyLogo");
  } else {
    header.classList.remove("sticky");
    header.classList.remove("stickyLogo");
  }

}
