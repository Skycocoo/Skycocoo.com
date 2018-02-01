

var Nav = {
    $navi: $("#navi"),
    $menu: $("#navi-menu"),
    $square: $("#navi-menu-mobi"),

    initNav: function(){
        var self = this;
        if(self.$navi.width() < 750){
            self.$square.addClass("animated rubberBand");
            self.$square.addClass("active");
        }
        self.$square.click(function(){
            if(self.menuon()) {
                self.hidem();
            } else {
                self.showm();
            }
        });
    },

    menuon: function(){
        return this.$menu.hasClass("active");
    },
    hidem: function () {
        this.$menu.removeClass("active");
    },
    showm: function () {
        this.$menu.addClass("active");
    }
};


$(document).ready(function () {
    Nav.initNav();
});
