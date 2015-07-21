$(document).ready(function(){
  var $body = $('body');
  var $twittler = $('h1');
  var $tweetStream = $('.tweet-stream');
  var $showNext = $('.show-next');
  var $showAll = $('.show-all');
  var $refresh = $('.refresh');
  var formatTweet;
  var $userLink;
  
  // grabs next tweet and formats
  var grabTweet = function() {
    var tweet = streams.home.pop();
    
    formatTweet = function() {
      var $tweetContainer = $('<div></div>', {
          'class' : 'tweet-container'
        });

      // shows relative time 
      var tweetDate = moment().startOf('hour').fromNow();
        
      // assign avatar to tweet.user
      var avatarURL = avatars[tweet.user];

      // gives tweet-container a class of its username
      $tweetContainer.addClass(tweet.user);

      $tweetContainer.html('<a class="user-link"><img class="avatar" src="'+avatarURL+'"</>'+ '<div class="user">'+'@' + tweet.user +'</div></a>' + '<div class="date">'+tweetDate+'</div>' + '<div class="tweet-message">'+tweet.message+'</div>');

      $tweetContainer.prependTo($tweetStream);
  
    }

    formatTweet();

  };

  // loads 11 tweets on refresh
  var refresh = function() {
    var index = streams.home.length - 1;
      while(index >= 0){
      
      grabTweet();
        
      index--;
    };
  };

  refresh();

  // loads one tweet at a time
  $showNext.click(function() {
    grabTweet();
  });

  // loads all tweets
  $showAll.click(function() {
    while(streams.home.length >=0) {
      grabTweet(); 
    }
  });

  // refreshes feed
  $refresh.click(function() {
    $tweetStream.html('');
    refresh();
  });

  // hard refresh for logo click
  $twittler.click(function() {
    location.reload();
  });

  // $userLink.click(function() {
  //   var clickUser = $(this).closest('.tweet-container').;
  //   console.log(clickUser);
  //   $('.tweet-container').not('.' + clickUser).fadeOut();
    
  // });
});
