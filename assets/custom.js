var icon_with_text = function () {
  $('.komowa-ticker-wrapper').slick({
    speed: 12000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    focusOnSelect: false
  });
};

$(document).ready(function (params) {
  function onTidioChatApiReady() {
    window.tidioChatApi.hide();
  }

  if (window.tidioChatApi) {
    window.tidioChatApi.on("ready", onTidioChatApiReady);
  }

  // document.querySelector("a[href='#tidio-chat-iframe']").addEventListener("click", function (e) {
  //   e.preventDefault();
  //   window.tidioChatApi.show();
  //   window.tidioChatApi.open();
  // });

  // if ($("a[href='#tidio-chat-iframe']").length > 0) {
  //   document
  //     .querySelector("a[data-href='#tidio-chat-iframe']")
  //     .addEventListener("click", function (e) {
  //       e.preventDefault();
  //       window.tidioChatApi.show();
  //       window.tidioChatApi.open();
  //     });
  // }

  /* Tab feature section */
  $(".featured_col_tabs .tab--item").on("click", function (e) {
    e.preventDefault();
    var index = $(this).attr("data-index");
    $(".featured_col_tabs .tab--item").removeClass("active");
    $(this).addClass("active");
    $(".featured_col_content .tab--content").removeClass("active");
    $('.featured_col_content .tab--content[data-index="' + index + '"]').addClass("active");
  });

  /* load functions */
  icon_with_text();

  setInterval(function () {
    const randomNumber = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
    $(".current-views").text(randomNumber);
  }, 4000);
});

$(document).ready(function(){
  $('.header__reuqest_dropdown').on("mouseenter",function(){
    $('.header__dropdownContent').addClass('active');
  });
  $('.header__reuqest_dropdown').on("mouseleave",function(){
    $('.header__dropdownContent').removeClass('active');
  });

  $(window).scroll(function() {
    if($(this).scrollTop() >= 50) {
      $('.new-announcement-bar-section').addClass('sticky_announcement_bar');
    } else {
      $('.new-announcement-bar-section').removeClass('sticky_announcement_bar');
    }
  });

  /* tab functions */
  $(".product-info-accordions .acc_heading").on("click", function (e) {
    e.preventDefault();
    var currentElemet = $(this),
      otherElements = $(".product-info-accordions .acc_heading");

    /* if(currentElemet.hasClass('active')){
         currentElemet.removeClass('active');
         currentElemet.next('.acc_content').slideUp();
         }else{}*/

    /** current tab **/
    if (currentElemet.hasClass("active")) {
      currentElemet.removeClass("active");
      currentElemet.next(".acc_content").slideUp();

      // /** other tabs **/
      // otherElements.removeClass('active');
      // otherElements.next('.acc_content').slideUp();
    } else {
      /** other tabs **/
      otherElements.removeClass("active");
      otherElements.next(".acc_content").slideUp();

      currentElemet.addClass("active");
      currentElemet.next(".acc_content").slideDown();
    }
  });

  $(window).on("resize", function () {
    if($(window).width() > 1000) {
      var headerHeight = $('.shopify-section--header').height();
      $('product-gallery.product-gallery').css('top', headerHeight);
    } else {
      $('product-gallery.product-gallery').removeAttr('style');
    }
  }).resize();
});