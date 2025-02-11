$(document).ready(function () {
  var owl = $(".spare_room_slider");

  owl.owlCarousel({
    loop: true,
    margin: 5,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: { items: 2 },
      600: { items: 2 },
      992: { items: 3 },
    },
  });

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
  let outerOwl = $(".spare_mobile_slider");

  outerOwl.owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    dotsEach: 1,
    autoplay: false,
    autoplayHoverPause: false,
    responsive: {
      0: { items: 2.2 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  });

  $(".spare_mobile_cards").each(function () {
    let innerOwl = $(this);

    innerOwl.owlCarousel({
      loop: true,
      items: 1,
      center: true,
      nav: true,
      dots: true,
      autoplay: false,
    });

    $(this)
      .closest(".spare_mobile_cards")
      .find(".slide_inner_prev")
      .click(function () {
        innerOwl.trigger("prev.owl.carousel");
      });

    $(this)
      .closest(".spare_mobile_cards")
      .find(".slide_inner_next")
      .click(function () {
        innerOwl.trigger("next.owl.carousel");
      });
  });
});
