function fade() {
    setTimeout(
        function(){
            $(".loader").addClass("loaded");
        },
        3000
    );
}

var time = 0;
var length = 100;

function load4() {
    var id = setInterval(
        function(){
            if (time >= 300) clearInterval(id);
            var sine = length * Math.sin(time / 10);
            var cosine = length * Math.cos(time / 10);
            $("#load4").css({"top": cosine, "left": -sine});
            // var test = (sine).toString() + "px " + (cosine).toString() + "px 0px 0px";
            // console.log(test);
            // $("#load4").css({"translate-origin": test});
            time++;
        }, 10
    );
};


$(document).ready(function(){
    fade();
    load4();
});


// var startTime, endTime;
//
// function start() {
//   startTime = new Date();
// };
//
// function end() {
//   endTime = new Date();
//   var timeDiff = endTime - startTime; //in ms
//   // strip the ms
//   timeDiff /= 1000;
//
//   // get seconds
//   var seconds = Math.round(timeDiff);
//   console.log(seconds + " seconds");
// }
