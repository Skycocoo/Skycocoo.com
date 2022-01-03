var feed = new Instafeed({
  accessToken: InstagramToken,
  limit: 5
});

(function ($) {
  $(document).ready(function () {
    feed.run();
  });
  $(window).on('load', function () {
    $("loader").addClass("loaded");
  })
})(jQuery);
