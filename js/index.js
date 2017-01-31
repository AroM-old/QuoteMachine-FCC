$(document).ready(function() {

  function tweet(url){
    var win = window.open(url, '_blank');
    win.focus();
  }
  
  $("#getMessage").on("click", function(e){
    e.preventDefault(); //Prevent load default browser setting
    
    //Using ajax to generate a new quote every time user click the button.
  $.ajax( {
      url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', 
      success: function(data){
       
        $('.message').html(post.content); //replace message class for content JSON information
        $('.author').html('- ' + post.title + ' -'); //replace author class for content JSON information
        $('.twitter-share-button').on('click', function(){
          if(quote !== undefined){
            tweet("https://twitter.com/intent/tweet?text=" + "\"" + quote + "\" " + author);
          } //replace twitter button href for new tweet.
      },
      cache: false // do not storage a cache site in the browser to generate next quote.
    });     
  });
});