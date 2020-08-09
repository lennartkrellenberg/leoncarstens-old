//gatsby-browser.js

const $ = require("jquery")


$(function ($) {
    $(document).ready(function(){

      // hide .navbar first
      $(".removingNav").hide();

      // fade in .navbar
      $(function () {
          $(window).scroll(function () {

                   // set distance user needs to scroll before we start fadeIn
              if ($(this).scrollTop() > 100) {
                  $('.removingNav').fadeIn();
              } else {
                  $('.removingNav').fadeOut();
              }
          });
      });

  });
})

