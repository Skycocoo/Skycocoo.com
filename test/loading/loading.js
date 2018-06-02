// var loadTime;
// window.onload = function () {
//     loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;
//     console.log('Page load time is '+ loadTime);
// }

function fade() {
    setTimeout(
        function(){
            $(".loader").addClass("loaded");
        },
        3000
    );
}

var time = 0, time2 = 0;

function load4() {
    var id = setInterval(
        function(){
            // stop the loop when time exceed 3s
            if (time >= 14.15) clearInterval(id);

            time += 0.05;
            var sine = Math.sin(2*time);
            var cosine = Math.cos(2*time);

            var randsin = Math.random() * sine;
            var randcos = Math.random() * cosine;

            // function reference:
            // https://math.stackexchange.com/a/7991
            $("#load4").css({
                "top": 70 * sine * cosine,
                "left": 70 * cosine,
                "background-color": "rgb(" + (20 + 20 * randsin) + ", " + (181 + 50 * randsin) + ", " + (204 + 50 * randcos) + ")"
            });
        }, 10
    );
};


function load5() {
    var id = setInterval(
        function(){
            // stop the loop when time exceed 3s
            if (time2 >= 14.15) clearInterval(id);

            time2 += 0.05;

            var sine = Math.sin(time2);
            var cosine = Math.cos(time2);

            var y = 6 * cosine;
            var x = 2 * sine * cosine;
            var randsin = Math.random() * sine;
            var randcos = Math.random() * cosine;

            // if (y < 0) y = 0;

            // radius change by the displacement of y
            var radius = 15 + y;

            // function reference:
            // https://math.stackexchange.com/a/7991
            $("#load5").css({
                "top": y,
                "left": x,
                "background-color": "rgb(" + (235 + 20 * randcos) + ", " + (245 + 10 * randsin) + ", " + (50 + 50 * randcos) + ")",
                "width": radius,
                "height": radius,
                "border-radius": radius
            });

            // map [0, 8] to [0, f]
            // #000 to #fff
            var conv = Math.floor(y / 8 * 15).toString(16);

            $("#load5-bg").css({
                "background-color": "#" + conv + conv + conv
            });

        }, 10
    );
};




$(document).ready(function(){
    // fade();
    load4();
    load5();
});
