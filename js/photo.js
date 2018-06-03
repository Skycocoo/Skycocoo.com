var listp = [{
    name: "trees",
    amount: 4,
    // amount: 16,
}, {
    name: "manhattan",
    amount: 1,
    // amount: 8,
}, {
    name: "bklyn",
    amount: 1,
    // amount: 2,
}];

var current = 0;
var window_height = $(window).height();

function demo() {
    if (current < listp.length) {
        for (var j = 0; j < listp[current].amount; j++) {
            var dir = "figures/" + listp[current].name + "/" + (j + 1) + ".jpg";
            var elem = "<div class=\"image\" style=\"background-image: url('" + dir + "');\" />";
            // append images to id
            var photo = $(elem).appendTo("#" + listp[current].name);
        }
        current += 1;
    }
}

$(window).scroll(function () {
    // console.log("scrolltop: " + $(window).scrollTop() + " document: " + $(document).height() + " entire window: " + window_height);
    if ($(window).scrollTop() == $(document).height() - window_height) {
        demo();
    }
});

function load() {
    var offset = $("#photo-wrapper").offset().top;

    while ((current < listp.length) && ((offset + $("#photo-wrapper").height()) < window_height)) {
        demo();
        console.log("distance: " + (offset + $("#photo-wrapper").height()));
    }
    // var offset = $("content").offset().top + $("#content-header").height() - 3 * $("descrip").height();
    //
    // while ((offset + $("content").height()) < window_height) {
    //     demo();
    //     // console.log("distance: " + (offset + $("content").height()));
    // }
}


// function demos () {
//     for (var i = 0; i < listp.length; i++) {
//         for (var j = 0; j < listp[i].amount; j++) {
//             var dir = "figures/" + listp[i].name + "/" + (j + 1) + ".jpg";
//             var elem = "<div class=\"image\" style=\"background-image: url('" + dir + "');\" />";
//             // append images to id
//             var photo = $(elem).appendTo("#" + listp[i].name);
//         }
//     }
// }


// var counter=0;
// $(window).scroll(function () {
//     if ($(window).scrollTop() == $(document).height() - $(window).height() && counter < 2) {
//         appendData();
//     }
// });
// function appendData() {
//     var html = '';
//     for (i = 0; i < 10; i++) {
//         html += '<p class="dynamic">Dynamic Data :  This is test data.</br>Next line.</p>';
//     }
//     $('#myScroll').append(html);
//     counter++;
//
//     if(counter==2)
//     $('#myScroll').append('<button id="uniqueButton" style="margin-left: 50%; background-color: powderblue;">Click</button></br></br>');
// }
//
//

function fade(loading) {
    setTimeout(
        function(){
            $(".loader").addClass("loaded");
        },
        loading
    );
}

$(document).ready(function(){
    load();
    // demo(current);
    // fade(2500);
});
