var $body = $('body');
var $tweetStream = $('.tweet-stream');
var $composeForm = $('.compose-form');
var $submitTweet = $('.submit-tweet');
$composeForm.hide();
$submitTweet.hide();
var $composeTweet = $('.compose-tweet');
var $showNext = $('.show-next');
var $showAll = $('.show-all');
var $refresh = $('.refresh');
var $showingUserText = $('.showing-user-text');
var $tweetContainer;
var formatTweet;
var userClass;

$(document).ready(function(){
  // grabs next tweet and formats
  var grabTweet = function() {
    var tweet = streams.home.shift();
    
    formatTweet = function() {
      $tweetContainer = $('<div></div>', {
          'class' : 'tweet-container'
        });

      var date = new Date();
      var tweetDate = date.toISOString();

      $tweetContainer.html('<a class="user-link"><img class="avatar" src="'+avatars[tweet.user]+'" title="Show all tweets by @'+tweet.user+'"</>'+ '<div class="user">'+'@' + tweet.user +'</div></a>' + '<div class="date" title="'+tweetDate+'"></div>' + '<div class="tweet-message">'+tweet.message+'</div>');

      // gives tweet-container a class of its username
      $tweetContainer.addClass(tweet.user);

      // add tweet to stream
      $tweetContainer.fadeIn().prependTo($tweetStream);
  
    }
    
    formatTweet();
    
    // creates relative time stamp
    $("div.date").timeago();
  };

  // loads 10 tweets on refresh
  while(streams.home.length-1 > 0){
    grabTweet();
  };

  // compose button effects
  $composeTweet.click(function() {
    $composeForm.fadeIn(500);
    $submitTweet.fadeIn(500);
    $composeTweet.removeClass('hover');
  });

  // submit button effects
  $submitTweet.click(function(){
    $composeForm.fadeOut(500);
    $submitTweet.fadeOut(500);
    $composeTweet.addClass('hover');
  })

  // loads one tweet at a time
  $showNext.click(function() {
    grabTweet();
  });

  // loads all tweets
  $showAll.click(function() {
    while(streams.home.length > 0) {
      grabTweet();
    }
  });

  // refreshes feed with refresh button and logo click
  $refresh.click(function() {
    location.reload();
  });

  // works on closest a 
  $('body').on('click', 'a', function() {
    userClass = $(this).closest('.tweet-container').attr('class').split(' ')[1]; 
    $showingUserText.prependTo($tweetStream).text('Showing tweets by @' + userClass);
    $('.tweet-container:not(.'+userClass+')').fadeOut(500, function() { 
      $(this).remove(); 
    })
  });
});
