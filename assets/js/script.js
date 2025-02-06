$(document).ready(function () {
  var owl = $(".spare_room_slider");

  owl.owlCarousel({
    loop: true, // Infinite loop
    margin: 20, // Gap between slides
    nav: false, // Default navigation disable
    dots: true, // Dots enable karein
    autoplay: false, // Auto-slide disable
    responsive: {
      0: { items: 2 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  });

  // **Custom Navigation Buttons**
  $("#prevSlide").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  $("#nextSlide").click(function () {
    owl.trigger("next.owl.carousel");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header__");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("header__scrolled");
    } else {
      header.classList.remove("header__scrolled");
    }
  });
});
