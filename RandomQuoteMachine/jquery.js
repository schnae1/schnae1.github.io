$(document).ready(function(){
   
  // Used REST API from GitHub user 'lukePeavey'
  // https://github.com/lukePeavey/quotable
  $.getJSON('https://api.quotable.io/random', function(data) {
    $("#quote-content").fadeOut("fast");
    $('#text').text(data.content)
    $('#author').text('-' + data.author)
    $("#quote-content").fadeIn("fast");
  })
  
  $('#new-quote').click(function() {
    $.getJSON('https://api.quotable.io/random', function(data) {
      $("#quote-content").fadeOut("fast");
      $('#text').text(data.content)
      $('#author').text('-' + data.author)
      $("#quote-content").fadeIn("fast");
    })
  })
  
  $('#tweet-quote').click(function() {
    window.open("https://twitter.com/intent/tweet?text="+ $('#text').text() + "   " + $('#author').text())
  })
  
});
