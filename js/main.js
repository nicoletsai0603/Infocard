//設計a href錨點來切換至區塊位置，但因為切換沒有滑動效果，所以需要加再上動畫滾動效果
$(document).ready(function() {
    $(".btnpopclose,.lightbox_bg,.close_btn").on("click", function() {

        $(".lightbox").css('display', 'none');
        $("body").removeClass("no-scroll");
    });
    $(".lightbox_btn").on("click", function() {

        $(".lightbox").css('display', 'block');
        $("body").addClass("no-scroll");
    });


});