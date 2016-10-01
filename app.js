console.log('hello');

$(document).ready(function() {

function checker (event) {
  var x =  event.keyCode;
  if (x == 87){
   var y =  $('.trump').animate({
            'marginLeft': "+=30px" //moves right
        })
   onkeypress(checker());
 }

// console.log(event);

    // $('.trump').click(function() {
    //     $('.trump').animate({
    //         'marginLeft': "+=30px" //moves right
    //     })
    // });
    // $('.clinton').click(function() {
    //     $('.clinton').animate({
    //         'marginLeft': "+=30px" //moves right
    //     })
    // });
 // $('.trump').keyup(function(e) {
 //   if(e.keyCode == 13){
 //     search();
 //   }
 //   console.log('onkeyup');
  });

