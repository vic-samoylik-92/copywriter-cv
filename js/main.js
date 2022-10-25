$(document).ready(function () {
  $(".accordion__header").click(function (event) {
    if ($(".accordion").hasClass("one")) {
      $(".accordion__header").not($(this)).removeClass("accordion__open");
      $(".accordion__body").not($(this).next()).slideUp(300);
    }
    $(this).toggleClass("accordion__open").next().slideToggle(300);
  });
});
