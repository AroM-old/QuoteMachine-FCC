//Call to API using ajax to retrieve json data.
function getJson() {
  $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
    type: 'POST',
    dataType: 'json',
    success: function (json) {
      quote = json.quote;
      author = json.author;
      randomQuote(); //call to the function
    },
    error: function (err) {
      alert(err);
    },
    beforeSend: function (tokenKey) {
      tokenKey.setRequestHeader("X-Mashape-Key", "1YPdes7aatmshME9DdlFNsQHJozIp1JyjQOjsnssL6CNFkTwrT");
    }
  });

}
//
function randomQuote() {
  $(".quote").html("\"" + quote + "\""); //Fill new quote text tag
  $(".author").html(author); //Fill author name text tag
}

//Post the quote in twitter.
function tweet(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

//Button 
$(document).ready(function () {
  $("#getMessage").on("click", getJson);
  $("#tweetMessage").on("click", function () {
    if (quote !== undefined) {
      tweet("https://twitter.com/intent/tweet?text=" + "\"" + quote + "\" " + author);
    }
  });
});