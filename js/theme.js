
$(document).ready(function () {
    Nav.initNav();
});

var Nav = {
    $navi: $("#navi"),
    $menu: $("#navi-menu"),
    $square: $("#navi-logo"),

    initNav: function(){
        var self = this;
        if(self.$navi.width() < 650){
            self.$square.addClass("animated rubberBand");
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
