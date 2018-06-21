(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top -62)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });


  // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
            $("#mainNav").removeClass("navbar-dark");
            $("#mainNav").addClass("navbar-white");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
            if ($(window).width() > 992){
                $("#mainNav").removeClass("navbar-white");
                $("#mainNav").addClass("navbar-dark");
            }
        }
      };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
    
    //Change navbar color to width
    if ($(window).width() < 992) {
        $("#mainNav").removeClass("navbar-dark");
        $("#mainNav").addClass("navbar-white");
    }   

    $(window).resize(function() {
        if ($(window).width() < 992) {
            $("#mainNav").removeClass("navbar-dark");
            $("#mainNav").addClass("navbar-white");
        }else {
            if ($("#mainNav").offset().top < 100){
                $("#mainNav").removeClass("navbar-white");
                $("#mainNav").addClass("navbar-dark");
            }
        }
    });
    
})(jQuery); // End of use strict




