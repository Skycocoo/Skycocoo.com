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
            // var elem = "<img src=\"" + dir + "\" />";
            // elem.background-image = url(dir);

            var photo = $(elem).appendTo("#" + listp[i].name);
            // photo.css("width", $(window).width())
            // $("#" + listp[i].name).append(elem);

            // $("#" + listp[i].name).append(elem).css("display","none");
            // var photo = $(elem).appendTo("#" + listp[i].name);

            // photo.css("display","none");
            // photo.attr("id", listp[i].name + (j+1));
        }
    }

    // $("img").on("load", function () {
    //
    // })
}

function scroll(){
    var size = $(window).width() * 0.70;
    // alert(size);
    for (var i = 0; i < listp.length; i++) {
        $("#"+listp[i].name).scrollLeft(size);
    }
}

// var interval = setInterval(display, 3000);

function display(){
    traverse(1);
}

function traverse(step){
    for (var i = 0; i < listp.length; i++){
        $("#" + listp[i].name + listp[i].cur).css("display", "none");
        var current = listp[i].cur + step;
        if (current > listp[i].amount){
            current -= listp[i].amount;
        }
        var dir = "figures/" + listp[i].name + "/" + current + ".jpg";
        listp[i].cur = current;
        $("#" + listp[i].name + current).css("display", "block");
        // $("#" + listp[i].name).css("background-image", "url(" + dir + ")");
    }
}


$(document).ready(function(){
    demos();

});
