/**
 * Created by luoyuxi on 2017/8/3.
 * Navigator inspired by https://liby.me/index.html
 */

$(document).ready(function () {
    Nav.initNav();
});

var Nav = {
    $menu: $("#navi-menu"),
    $square: $("#navi-logo"),

    initNav: function(){
        var self = this;

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