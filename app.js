console.log('hello');

$(document).ready(function() {


    window.addEventListener("keydown", keysPressed, false);
    window.addEventListener("keyup", keysReleased, false);

    var keys = [];

    function keysPressed(e) {
        // store an entry for every key pressed
        //somewhat confusing, would like to review this
        //dont forget
        keys[e.keyCode] = true;

        // shift
        if (keys[13]) {
            // animate the div
            $('.clinton img').animate({
                'marginLeft': "+=30px" //moves right
            })
        }

        // enter
        if (keys[16]) {
            // animate the div
            $('.trump img').animate({
                    'marginLeft': "+=30px" //moves right
                })
                // prevent default browser behavior
            e.preventDefault();
        }
    }

    function keysReleased(e) {
        // mark keys that were released
        keys[e.keyCode] = false;
    }


    $(".ovalClick").click(function(){
        $('.oval').animate({'marginLeft': '900px'}, 3000);
    });
// function winner(){
//   if ($('.clinton')).css('marginLeft', '900px'){
//     alert(CLINTON WINS THE RACE);
//   }
// }







});
