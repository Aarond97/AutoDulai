var myButton = document.querySelector('button');
var myHeading = document.querySelector('p1');

function setCar() {
        var myCar = prompt('Please enter your car.');
        localStorage.setItem('car', myCar);
    myHeading.textcontent = 'My Car is a ' + myCar;
}

if(!localStorage.getItem('car')) {
  setCar();
} else {
    var storedName = localStorage.getItem('car');
    myHeading.textContent = 'My Car is a ' + storedName;
} 
myButton.onclick = function() {
    myCar();
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  x[slideIndex-1].style.display = "block"; 
}