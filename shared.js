$(document).ready(function () {
  $("a.n-submenu").hover(
    function () {
      $("li.u-nav-item div").addClass("");
      console.log("[DEBUG] trial hover");
    },
    function () {
      $("li.u-nav-item div").removeClass("open");
    }
  );
});
