let button = document.getElementById("menu-btn");

let menuContainer = document.getElementById("menu");

let videoContainer = document.getElementById("video");


function toggleMenu(){
  menuContainer.classList.toggle("show");
}
button.addEventListener("click", toggleMenu);


/* video-control */

videoContainer.addEventListener( "click", function(){
  videoContainer.controls = true;
})