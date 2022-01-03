// Created by Yuxi Luo; 2017

// nav bar
var navi = {
    menu: $("#navi-menu li a"),
    init: function() {
        const url = window.location.href;
        this.menu.each((index, elem) => {
            // highlight nav based on current page
            if (url == elem) {
                $(elem).parent().toggleClass("active");
            }
        })
    },
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


$(document).ready(function () {
    navi.init();
    // loader.init(10);
    // loader.init(1980);
});

(function ($) {
    $(window).on('load', function () {
        $("loader").addClass("loaded");
    })
})(jQuery);
