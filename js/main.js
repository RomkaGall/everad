$(document).ready(function() {
  console.log("Скрипты подъехали");

  $(".btn_order").click(function() {
    $(".popup--order").addClass("show");
    $("html, body").addClass("no_scroll");
  });

  // input mask
  $(function() {
    $(".input--phone").inputmask("+38(999) 999-99-99");
  });

  // hamburger
  $(function() {
    $(".menu_toggle").click(function() {
      $(".menu_toggle").toggleClass("open");
      $("html").toggleClass("no_scroll");
      $("body").toggleClass("no_scroll");
      $(".header__nav").toggleClass("open");
    });
  });

  $(document).on("click touchstart", function(e) {
    // console.log(e.target)

    if (
      !$(e.target).closest(".btn_order").length &&
      !$(e.target).closest(".popup__content").length &&
      !$(".input, .textarea").is(":focus")
    ) {
      if ($(".popup").hasClass("show")) {
        $("body , html").removeClass("no_scroll");
      }

      $(".popup").removeClass("show");
    }
    e.stopPropagation();
  });
});
