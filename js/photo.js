// Created by Yuxi Luo; 2017

var listp = [{
    name: "trees",
    amount: 16,
    title: "Trees NYC",
    tag: "#Iphone #Seasons #Trees",
}, {
    name: "manhattan",
    amount: 8,
    title: "Manhattan NYC",
    tag: "#Skline #Silhouette",
}, {
    name: "bklyn",
    amount: 2,
    title: "Brooklyn NYC",
    tag: "#Sunrise #Rainbow",
}];

var current = 0,
    window_height = $(window).height();

function demo() {
    if (current < listp.length) {
        var descrip = "<descrip>" +
                      "<title>" + listp[current].title + "</title>" +
                      "<tag>" + listp[current].tag + "</tag>" +
                      "</descrip>";

        $(descrip).appendTo("#" + listp[current].name);


        for (var i = 0; i < listp[current].amount; i++) {
            var dir = "img/" + listp[current].name + "/" + (i + 1) + ".jpg",
                elem = "<div class=\"image\" style=\"background-image: url('" + dir + "');\" />";

            // append images to id
            var photo = $(elem).appendTo("#" + listp[current].name);
        }
        current += 1;
    }
}

$(window).scroll(function () {
    if ($(window).scrollTop() >= $(document).height() - window_height - 100) {
        demo();
    }
});

function load() {
    var offset = $("#photo-wrapper").offset().top;

    while ((current < listp.length) && ((offset + $("#photo-wrapper").height()) < window_height)) {
        demo();
    }
}

$(window).on("load", function() {
    $(".loader").addClass("loaded");
});


$(document).ready(function(){
    load();
});
