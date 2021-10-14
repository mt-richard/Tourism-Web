let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector("#search-icon").onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector("#close").onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}



var slideIndex = 0;
showSlidesauto();

function showSlidesauto() {
  var i;
  var slides = document.getElementsByClassName("myslides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "flex";
  setTimeout(showSlidesauto, 5000); // Change image every 2 seconds
}

function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeout() {
  setInterval(loader, 3000);
}

window.onload = fadeout;