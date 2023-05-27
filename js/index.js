//Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function addStudent() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let subject = document.getElementById("subject").value;
    let checkbox = document.getElementById("checkbox");
    
    if (checkbox.checked == true) {
        alert("Welcome " + name + "! Thank you for your interest in " + subject + "! We will contact you via the email provided: " + email + ", or alternatively on the phone number: " + number + ".");        
    } else {
        alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested " + name + "! If you want to sign up, you better CHECK that newsletter box!");
    }
}