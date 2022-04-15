function progress() {
  alert("Page still in progress.");
  console.log("Hello World.");
}

//Carousel
var image = document.getElementById("icarousel");
var currentPos = 0;
var images = ["res/HereComesTheSun.jpg",
 "res/perfect.jpg", 
 "res/summertime.jpg", 
 "res/grantchestermeadows.jpg", 
 "res/mushroom1.png"]

function resetImg() {
  if (++currentPos >= images.length)
    currentPos = 0;

  image.src = images[currentPos];
}
setInterval(resetImg, 4000);


// Contacts Submit Form
document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
  alert("Form sent!");
});