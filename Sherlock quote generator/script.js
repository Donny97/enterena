$(document).ready(function(){

    var quotes=["Quiet. Calm. Peaceful. Isn't it hateful.", "Impossible suicides? Four of them? There's no point sitting at home when there's finally something fun going on!","The game is on!","Dear God, what is it like in your funny little brains? It must be so boring!","Because you're an idiot. No, no, no. Don't look like that. Practically everyone is. ","Anderson, don't talk out loud. You lower the IQ of the whole street.","Sex doesn't alarm me.","People don't like telling you things. They love to contradict you.","Oh, I may be on the side of the angels, but don't think for one second that I am one of them.","I hope you'll be very happy Molly Hooper. You deserve it. After all, not all men you fall for can turn out to be sociopaths.","I am the most unpleasant, rude, ignorant and all-round obnoxious arsehole that anyone  could possibly have the misfortune to meet.", "I am a ridiculous man redeemed only by the warmth and constancy of your friendship.","I will solve your murder but it takes John Watson to save your life.","Oh please. Killing me, that's so two years ago."];

    var bg=['bg/1.jpg','bg/2.jpg','bg/3.jpg','bg/4.jpg','bg/5.jpg','bg/10.jpg','bg/9.jpg','bg/8.jpg','bg/7.jpg','bg/6.jpg','bg/11.jpg'];

    getquote(quotes);
    /*var bgNum = Math.floor(Math.random() * bg.length);
       $('body').css('background','url('+bg[bgNum]+')');
       $('body').css('background-size','cover');*/
    $('#nextbtn').click(function(){

        var timeAnimation = 500;



      $('#quote').fadeOut(timeAnimation, function(){
        var bgNum = Math.floor(Math.random() * bg.length);
           $('body').css('background','url('+bg[bgNum]+')');
           $('body').css('background-size','cover');
          getquote(quotes);
        $('#quote').fadeIn(timeAnimation);
      });


    });

    function getquote(q){
        var quoteNum = Math.floor(Math.random() * quotes.length);
        $('#quote').text('"' + q[quoteNum] + '"');
        $('#sharebtntw').attr('href','http://www.twitter.com/intent/tweet?hashtags=quote&text=' + encodeURIComponent('"' + q[quoteNum] + '"'));
//        $('#sharebtnfb').attr('href','https://www.facebook.com/sharer/sharer.php?url=' + encodeURIComponent('"' + q[quoteNum] + '"'));
        $('#sharebtnfb').attr('href','https://www.facebook.com/sharer/sharer.php?u=donny97.github.io/sqg');

    }

});
