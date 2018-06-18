// Created by Yuxi Luo; 2017

var Nav = {
    $navi: $("#navi"),
    $menu: $("#navi-menu-mobi-out"),
    $square: $("#navi-menu-mobi"),

    initNav: function() {
        var self = this;
        if(self.$navi.width() < 750){
            // self.$square.addClass("animated rubberBand");
            self.$square.addClass("active");
        }
        self.$square.click(function(){
            self.$menu.toggleClass("active");
            self.$square.toggleClass("rot");
        });
    }
};

function footer() {
    if ($("body").height() < $(window).height()) {
        $("footer").addClass("float");
    }
}


$(document).ready(function () {
    Nav.initNav();
    footer();
});
