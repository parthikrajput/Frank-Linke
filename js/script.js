window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 130);
});

window.addEventListener("scroll", function () {
  var backToTopButton = document.getElementById("back-to-top");

  if (window.scrollY > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});
document.getElementById("back-to-top").addEventListener("click", function () {
  var scrollToTop = function () {
    var currentPosition = window.scrollY;
    if (currentPosition > 0) {
      window.scrollTo(0, currentPosition - 20);
      setTimeout(scrollToTop, 5);
    }
  };

  scrollToTop();
  return false;
});



jQuery(document).ready(function () {
  jQuery(".at-tab:first").slideDown();
  jQuery(".at-title:first").addClass("active");
  jQuery(".at-item:first").addClass("active-bg");
});

jQuery(".at-title").click(function () {
  var wasActive = jQuery(this).hasClass("active");

  jQuery(".at-tab").slideUp();
  jQuery(".at-title").removeClass("active");
  jQuery(".at-item").removeClass("active-bg");

  if (!wasActive) {
    jQuery(this).addClass("active");
    jQuery(this).next(".at-tab").slideDown();
    jQuery(this).parent(".at-item").addClass("active-bg");
  }
});

document.querySelector(".menu").addEventListener("click", function () {
  document.querySelector("nav").classList.add("active");
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector("nav").classList.remove("active");
});

jQuery(document).ready(function ($) {
  jQuery(".pro-slide").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1025: {
        items: 3,
      },
    },
  });
  jQuery(".team-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 2,
      },
      861: {
        items: 3,
      },
      1025: {
        items: 4,
      },
    },
  });
  jQuery(".community-slide").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },

      600: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    },
  });
  $(".timeline-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

jQuery(".count").each(function ($) {
  jQuery(this)
    .prop("count", 0)
    .animate(
      {
        count: jQuery(this).text(),
      },
      {
        duration: 4000,
        easing: "swing",
        step: function (now) {
          jQuery(this).text(Math.ceil(now));
        },
      }
    );
});
