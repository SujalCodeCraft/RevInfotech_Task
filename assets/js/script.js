$(document).ready(function () {
  var owl = $(".spare_room_slider");

  owl.owlCarousel({
    loop: true, // Infinite loop
    margin: 5, // Gap between slides
    nav: false, // Default navigation disable
    dots: true, // Dots enable karein
    autoplay: true, // Auto-slide disable
    responsive: {
      0: { items: 2 },
      600: { items: 2 },
      992: { items: 3 },
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
  // ✅ Outer Slider (spare_mobile_slider)
  let outerOwl = $(".spare_mobile_slider");

  outerOwl.owlCarousel({
    loop: true,
    margin: 20,
    nav: false, // ❌ Navigation hide
    dots: true, // ✅ Custom dots enable
    dotsEach: 1, // ✅ Each slide = 1 dot
    autoplay: false, // ❌ Autoplay OFF
    autoplayHoverPause: false, // ❌ Hover pe bhi stop nahi karega
    responsive: {
      0: { items: 2.2 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  });

  // ✅ Inner Slider (spare_mobile_cards)
  $(".spare_mobile_cards").each(function () {
    let innerOwl = $(this);

    innerOwl.owlCarousel({
      loop: true,
      items: 1, // Ek time pe ek slide
      center: true,
      nav: true, // ✅ Custom navigation enable
      dots: true, // ✅ Custom dots enable
      autoplay: false, // ❌ Autoplay OFF
    });

    // **Previous Button Click**
    $(this)
      .closest(".spare_mobile_cards")
      .find(".slide_inner_prev")
      .click(function () {
        innerOwl.trigger("prev.owl.carousel");
      });

    // **Next Button Click**
    $(this)
      .closest(".spare_mobile_cards")
      .find(".slide_inner_next")
      .click(function () {
        innerOwl.trigger("next.owl.carousel");
      });
  });
});
