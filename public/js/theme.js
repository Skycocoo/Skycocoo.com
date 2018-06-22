// Created by Yuxi Luo; 2017

// nav bar
var nav = {
    $navi: $("#navi"),
    $menu: $("#navi-menu-mobi-out"),
    $square: $("#navi-menu-mobi"),

    init: function() {
        var self = this;
        if (self.$navi.width() < 750){
            self.$square.addClass("active");
        }
        self.$square.click(function(){
            self.$menu.toggleClass("active");
            self.$square.toggleClass("rot");
        });
    }
};

// loader
var loader = {
    $load: $("loader"),
    semaphore: {
        val: 1,
        down: function() {
            if (this.val == 1) {
                this.val -= 1;
            }
        },
        up: function() {
            if (this.val == 0) {
                this.val += 1;
            }
        }
    },
    init: function(loading) {
        var self = this;

        // // only when loading images/videos
        // $(window).on("load", function() {
        //     console.log("onload: " + self.semaphore.val);
        //     if (self.semaphore.val == 0) {
        //         self.$load.addClass("loaded");
        //     } else {
        //         self.semaphore.down();
        //     }
        // });

        setTimeout(
            function(){
                self.$load.addClass("loaded");
                // console.log("timeout: " + self.semaphore.val);
                // if (self.semaphore.val == 0) {
                //     self.$load.addClass("loaded");
                // } else {
                //     self.semaphore.down();
                // }
            },
            loading
        );
    }
};

// footer
function footer() {
    if ($("body").height() < $(window).height()) {
        $("footer").addClass("float");
    }
}



$(document).ready(function () {
    nav.init();
    loader.init(10);
    // loader.init(2000);
    footer();

});
