/**
 * Created by Qiu on 16-10-9.
 */
jQuery(function ($) {
    var $leftMenu = $(".leftMenu");

    $(".on-menu").click(function () {
        $leftMenu.css("left", "0");
        $leftMenu.addClass("on");
    });

    $(".leftMenu .t-mask-visible").click(function () {
        $leftMenu.removeClass("on");
        setTimeout(function () {
            $leftMenu.css("left", "-100%");
        }, 300);
    });
});