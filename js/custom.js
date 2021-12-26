$(function () {
  "use strict";

  var wind = $(window);

  // scrollIt
  $.scrollIt({
    upKey: 38, // key code to navigate to the next section
    downKey: 40, // key code to navigate to the previous section
    easing: "swing", // the easing function for animation
    scrollTime: 600, // how long (in ms) the animation takes
    activeClass: "active", // class given to the active nav element
    onPageChange: null, // function(pageIndex) that is called when page is changed
    topOffset: -60, // offste (in px) for fixed top navigation
  });

  // close navbar-collapse when a  clicked
  $(".nav a").on("click", function () {
    $(".navbar-collapse").removeClass("in").addClass("collapse");
  });

  // navbar scrolling background
  wind.on("scroll", function () {
    var bodyScroll = wind.scrollTop(),
      navbar = $(".navbar-default"),
      h_hight = $(".header").outerHeight();
    if (bodyScroll > h_hight) {
      navbar.addClass("nav-scroll");
    } else {
      navbar.removeClass("nav-scroll");
    }
  });

  // magnificPopup
  $(".portfolio .link").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

$(window).on("load", function () {
  $(".loading").addClass("loading-end").fadeOut(500);
  $(".services .row").isotope({
    itemSelector: ".col-md-4",
  });

  $(".gallery").isotope({
    itemSelector: ".items",
  });
  var $gallery = $(".gallery").isotope({});

  // filter items on button click
  $(".filtering").on("click", "span", function () {
    var filterValue = $(this).attr("data-filter");

    $gallery.isotope({ filter: filterValue });
  });
  $(".filtering").on("click", "span", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});
