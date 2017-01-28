$(document).ready(function() {
  
  $("#getMessage").on("click", function(e){
    e.preventDefault(); //Prevent load default browser setting
    
    //Using ajax to generate a new quote every time user click the button.
  $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', 
      success: function(data){
        var post = data.shift();
        var tweetURL = "https://twitter.com/intent/tweet?text=" + post.content; //tweet button quote
        $('.message').html(post.content); //replace message class for content JSON information
        $('.author').html('- ' + post.title + ' -'); //replace author class for content JSON information
        $('.twitter-share-button').attr('href', tweetURL); //replace twitter button href for new tweet.
      },
      cache: false // do not storage a cache site in the browser to generate next quote.
    });     
  });
});