var data={ "notes": [
  {
    "title": "images/male_01.png",
    "author": 'Michael Collins',
    "quote": "Were there any difficulties you encountered in your team while working on it?"
  },
  {
    "title" : "images/female_01.png",
    "author": "Name Surname",
    "quote": "Are you sure that colours of buttons are right?"
  },
  {
    "title" : "images/female_01.png",
    "author": "Name Surname",
    "quote": "What was user feedback about this solution?"
  },
  {
    "title" : "images/female_01.png",
    "author": "Name Surname",
    "quote": "Why did you use this layout?"
  },
  {
    "title" : "images/female_01.png",
    "author": "Name Surname",
    "quote": "Isn't there any difference between this design and wireframes that we discussed before?"
  },
  {
    "title" : "images/female_01.png",
    "author": "Name Surname",
    "quote": "What were the different ways you explored design for a specific component on the page?"
  },
  {
    "title" : "images/female_01.png",
    "author": "Name Surname",
    "quote": "What are the different workflows you explored in your project?"
  },
  {
    "title" : "images/female_01.png",
    "author": "Name Surname",
    "quote": "Don't be defensive. OK?"
  },
  {
    "title" : "images/female_01.png",
    "author": "Name Surname",
    "quote": "What was improved since the last review?"
  }
 ]
};


var getWindowOptions = function() {
  var width = 500;
  var height = 350;
  var left = (window.innerWidth / 2) - (width / 2);
  var top = (window.innerHeight / 2) - (height / 2);

  return [
    'resizable,scrollbars,status',
    'height=' + height,
    'width=' + width,
    'left=' + left,
    'top=' + top,
  ].join();
};


    

function randomize() {
  var range = data.notes.length;
  var random_index = Math.floor(Math.random() * range);
  var item = data.notes[random_index];
  
    $('.quote-content').html(item.quote); 
    $('.quote-author').html(item.author);
    $(".author-photo").attr("src", item.title);
    
    var twitterBtn = document.querySelector('.twitter-share');
    var text = encodeURIComponent('#Design Critique Coach taught me to answer a question: " ');
    var shareUrl = 'https://twitter.com/intent/tweet?url=' + location.href + '&text=' + text + item.quote + '" Find more on designcritiquecoach.com' ;
    twitterBtn.href = shareUrl; // 1

    twitterBtn.addEventListener('click', function(e) {
    e.preventDefault();
    var win = window.open(shareUrl, 'ShareOnTwitter', getWindowOptions());
    win.opener = null; // 2
    });
}

function getQuote() {
  var $button = $('.next')

  $button.on('click', randomize);
}

$(document).ready(function() {
  randomize();
  getQuote();
});
