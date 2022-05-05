function progress() {
  alert("Page still in progress.");
  console.log("Hello World.");
}

// Slider loop

$('#icarousel').slick({
  autoplay: true,
  infinite: true,
  arrows: false,
  autoplaySpeed: 3000,
  fade: true,
  cssEase: 'linear'
});
