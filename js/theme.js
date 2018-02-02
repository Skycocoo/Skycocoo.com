

var Nav = {
    $navi: $("#navi"),
    $menu: $("#navi-menu-mobi-out"),
    $square: $("#navi-menu-mobi"),

    initNav: function(){
        var self = this;
        if(self.$navi.width() < 750){
            // self.$square.addClass("animated rubberBand");
            self.$square.addClass("active");
        }
        self.$square.click(function(){
            self.$menu.toggleClass("active");
        });
    },
};


$(document).ready(function () {
    Nav.initNav();
});
