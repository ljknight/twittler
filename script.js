$(document).ready(function(){
  var $body = $('body');
  var $tweetStream = $('.tweet-stream');
  var $showNext = $('.show-next');
  var $showAll = $('.show-all');
  
  // grabs next tweet and formats
  var grabTweet = function() {
    var tweet = streams.home.pop();
    var $tweetContainer = $('<div></div>', {
        'class' : 'tweet-container'
      });

    // shows relative time 
    var tweetDate = moment().startOf('hour').fromNow();
      
    // assign avatar
    var avatarURL = avatars[tweet.user];

    $tweetContainer.html('<img class="avatar" src="'+avatarURL+'"</>'+ '<a class="user">'+'@' + tweet.user +'</a>' + '<div class="date">'+tweetDate+'</div>' + '<div class="tweet-message">'+tweet.message+'</div>');

    $tweetContainer.prependTo($tweetStream);
  }

  // loads 11 tweets on refresh
  var index = streams.home.length - 1;
    while(index >= 0){
    
    grabTweet();
      
    index--;
  };

  // loads one tweet at a time
  $showNext.click(function() {
    grabTweet();
  });

  // loads all tweets
  $showAll.click(function() {
    while(streams.home.length >=0)

    grabTweet();    
  });
   
});
