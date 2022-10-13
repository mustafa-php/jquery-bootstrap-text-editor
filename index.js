$(document).ready(function () {
    $("button").click(function () {
      var secim = $(this).attr("class");
      var secim = secim.split("-");

      document.execCommand(secim[0], false, secim[1]);
      $(".icerik").focus();
    });
  });
