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
        }
    }
}

function fade(loading) {
    setTimeout(
        function(){
            $(".loader").addClass("loaded");
        },
        loading
    );
}

$(document).ready(function(){
    demos();
    fade(1500);
});
