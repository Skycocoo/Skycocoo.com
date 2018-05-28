function fade() {
    setTimeout(
        function(){
            $(".loader").addClass("loaded");
        },
        3000
    );
}

var time = 0;

function load4() {
    var id = setInterval(
        function(){
            // stop the loop when time exceed 3s
            if (time >= 28.3) clearInterval(id);

            time += 0.1;
            var sine = Math.sin(time);
            var cosine = Math.cos(time);

            // function reference:
            // https://math.stackexchange.com/a/7991
            $("#load4").css({"top": 40 * sine * cosine,
                             "left": 40 * cosine,
                             "background-color": "rgb(" + (20 + 20 * sine) + ", " + (181 + 50 * sine) + ", " + (204 + 50 * cosine) + ")"
                            });

        }, 10
    );
};


$(document).ready(function(){
    // fade();
    load4();
});
