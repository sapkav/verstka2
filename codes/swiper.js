new Swiper('.special', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
})

$(document).ready(function() {
    $("#downBtn").click(function() {
        $("html, body").animate({ scrollTop: $(document).height()}, 2200);
      });
});