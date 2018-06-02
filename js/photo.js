// http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html


var loadTime = 0;
window.onload = function () {
    loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;
    console.log('Page load time is '+ loadTime);
}



var listp = [{
    name: "trees",
    amount: 16,
    cur: 0
}, {
    name: "manhattan",
    amount: 8,
    cur: 0
}, {
    name: "bklyn",
    amount: 2,
    cur: 0
}];

function demos () {
    for (var i = 0; i < listp.length; i++) {
        for (var j = 0; j < listp[i].amount; j++) {
            var dir = "figures/" + listp[i].name + "/" + (j + 1) + ".jpg";
            var elem = "<div class=\"image\" style=\"background-image: url('" + dir + "');\" />";
            // append images to id
            var photo = $(elem).appendTo("#" + listp[i].name);

            var startTime = new Date().getTime();
            var loadtime = 0;
            var img = new Image();
            img.onload = function() {
                var loadtime = new Date().getTime() - startTime;
                console.log(typeof(loadtime) + loadtime);
            };
            img.src = dir;

            loadTime += loadtime;

        }
    }
}

function fade() {
    setTimeout(
        function(){
            $(".loader").addClass("loaded");
            console.log("spanning time:", loadTime);
        },
        loadTime
    );
}

$(document).ready(function(){
    demos();
    console.log("after demos:" + loadTime);
    fade();
});
