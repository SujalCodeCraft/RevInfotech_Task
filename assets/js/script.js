$(document).ready(function () {
  var owl = $(".spare_room_slider");

  owl.owlCarousel({
    loop: true, // Infinite loop
    margin: 20, // Gap between slides
    nav: false, // Default navigation disable
    dots: true, // Dots enable karein
    // autoplay: true, // Auto-slide disable
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

$(document).ready(function () {
  // Outer Slider
  let outerOwl = $(".spare_room_carousel");

  outerOwl.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false, // Default dots disable, custom dots use karenge
    // autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 2.2 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  });

  // Outer Slider Custom Dots
  $(".outer_slider_dots .outer_dot").click(function () {
    let index = $(this).index();
    outerOwl.trigger("to.owl.carousel", [index, 300]); // Move to slide
    $(".outer_slider_dots .outer_dot").removeClass("active");
    $(this).addClass("active");
  });

  // Sync Active Dot with OwlCarousel
  outerOwl.on("changed.owl.carousel", function (event) {
    let currentIndex =
      event.item.index - event.relatedTarget._clones.length / 2;
    if (currentIndex >= event.item.count) currentIndex = 0; // Loop Fix
    $(".outer_slider_dots .outer_dot").removeClass("active");
    $(".outer_slider_dots .outer_dot").eq(currentIndex).addClass("active");
  });

  // Inner Slider
  $(".inner-carousel").each(function (index) {
    let innerOwl = $(this);

    innerOwl.owlCarousel({
      loop: true,
      items: 1,
      center: true,
      nav: false, // Inner slider ke liye navigation off
      dots: false, // Custom dots use karenge
      // autoplay: true,
      autoplayTimeout: 2000,
    });

    // Inner Slider Custom Dots
    let dotsContainer = $(this).siblings(".inner_slider_dots");

    dotsContainer.find(".inner_dot").click(function () {
      let innerIndex = $(this).index();
      innerOwl.trigger("to.owl.carousel", [innerIndex, 300]); // Move to inner slide
      dotsContainer.find(".inner_dot").removeClass("active");
      $(this).addClass("active");
    });

    // Sync Inner Dots with OwlCarousel
    innerOwl.on("changed.owl.carousel", function (event) {
      let innerCurrentIndex =
        event.item.index - event.relatedTarget._clones.length / 2;
      if (innerCurrentIndex >= event.item.count) innerCurrentIndex = 0; // Loop Fix
      dotsContainer.find(".inner_dot").removeClass("active");
      dotsContainer.find(".inner_dot").eq(innerCurrentIndex).addClass("active");
    });
  });
});
