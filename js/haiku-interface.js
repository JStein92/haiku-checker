import { Haiku } from './../js/haiku.js';

$(function(){
  $('#haiku-form').submit(function(event) {
    event.preventDefault();
    const line1 = $('#line1').val();
    const line2 = $('#line2').val();
    const line3 = $('#line3').val();
    const newHaiku = new Haiku(line1, line2, line3);
    const result = newHaiku.checkHaiku();
    if(result === true){
      $('#result').text("Nice Haiku.");
    } else {
      $('#result').text("Try again.");
    }
  });
});
