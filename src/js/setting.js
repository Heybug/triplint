/**
 * Created by Qiu on 16-10-9.
 */
jQuery(function ($) {
    var $html = $("html");

    $(".on-menu").click(function () {
        $(".t-menu-mask-visible").css("visibility", "visible");
        $html.addClass("on-menu");
    });

    $(".leftMenu,.t-menu-mask-visible").click(function () {
        $html.removeClass("on-menu");
        setTimeout(function () {
            $(".t-menu-mask-visible").css("visibility", "hidden");
        }, 350);
    });
});