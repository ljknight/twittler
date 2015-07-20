$(document).ready(function(){
  var $body = $('body');
  var $tweetStream = $('.tweets');
  var $button = $('button');
  
  var index = streams.home.length - 1;
    while(index >= 0){
    var tweet = streams.home[index];

    var $tweetContainer = $('<div></div>', {
        'class' : 'tweetContainer'
      });

      // shows relative time 
      var tweetDate = moment().startOf('hour').fromNow();
      
      // add user URL
      var userURL = allUserURLS[tweet.user];
      var userProfileLink = $('<a />', {
        href: userURL,
        target: "blank",
        text: '@' + tweet.user
      });

      $tweetContainer.html('<a class="user">'+'@' + tweet.user +'</a>' + '<div class="date">'+tweetDate+'</div>' + '<div class="tweet">'+tweet.message+'</div>');

      $tweetContainer.prependTo($tweetStream);
      
    index--;
  };

  var showNewTweets = function() {
    
      
      // loads one tweet at a times
      var tweet = streams.home.pop();
      
      var $tweetContainer = $('<div></div>', {
        'class' : 'tweetContainer'
      });

      // shows relative time 
      var tweetDate = moment().startOf('hour').fromNow();
      
      // add user URL
      var userURL = allUserURLS[tweet.user];
      var userProfileLink = $('<a />', {
        href: userURL,
        target: "blank",
        text: '@' + tweet.user
      });

      $tweetContainer.html('<a class="user">'+'@' + tweet.user +'</a>' + '<div class="date">'+tweetDate+'</div>' + '<div class="tweet">'+tweet.message+'</div>');

      $tweetContainer.prependTo($tweetStream); 

    }

    var tweetCount = $('.tweetContainer').length;
    console.log(tweetCount, streams.home.length) 
  
  $button.click(function() {
    //$('span').text(streams.home.length-tweetCount);
    showNewTweets();
  });
   
});
