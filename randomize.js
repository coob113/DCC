var data={ "notes": [
    {"quote": "Were there any unexpected difficulties you encountered while working on it?"},
    {"quote": "Are you sure about the colours of the buttons?"},
    {"quote": "What was user feedback about this feature?"},
    {"quote": "Why did you use this layout?"},
    {"quote": "Are there any differences between this design and wireframes that we discussed before?"},
    {"quote": "What are the different workflows you explored in your project?"},
    {"quote": "What were the different ways you explored design for a specific component on the page?"},
    {"quote": "Don't be defensive. OK?"},
    {"quote": "What was improved since the last review?"},
    {"quote": "What is the problem that you tried to solve?"},
    {"quote": "What is the context of this task?"},
    {"quote": "What was the most critical design decision?"},
    {"quote": "What were the toughest design decisions?"},
    {"quote": "What were the easiest design decisions?"},
    {"quote": "Are you sure that all elements are matching with our style guide?"},
    {"quote": "What were alternative solutions that you considered for this problem?"},
    {"quote": "Are components that you introduced reusable?"},
    {"quote": "How about to add more negative space?"},
    {"quote": "Don't you think that the screen is too complex?"},
    {"quote": "Can we simplify this flow?"},
    {"quote": "Where is this feature in the whole users flow?"},
    {"quote": "What competing products that solve the same issue have you discovered?"},
    {"quote": "What is the main problem that you are solving?"},
    {"quote": "Are there any secondary problems that these designs are solving?"},
    {"quote": "Can you please remind the goals of this project?"},
    {"quote": "For what user scenarios is the product designed? "},
    {"quote": "What known usability issues are these sketches trying to solve?"},
    {"quote": "What known design issues are these sketches trying to solve?"},
    {"quote": "What known business issues are these sketches trying to solve?"},
    {"quote": "What is the intended style of the design, and is it appropriate for the target audience?"},
    {"quote": "What is the intention of the style, and does it achieve the desired effect?"},
    {"quote": "Are there standard brand elements that should be used, and are they used appropriately?"},
    {"quote": "Are there similar software products or features that these designs should relate to?"},
    {"quote": "What usability heuristics does each design support well?"},
    {"quote": "Where in the design are the most likely places for users to have trouble? And why?"},
    {"quote": "What design compromises you made to achieve business goals?"},
    {"quote": "Does this design take advantage of things the user might already have learned?"},
    {"quote": "What are the pros and cons of each design idea, relative to each other?"},
    {"quote": "What open issues might best be resolved by a usability study or other research?"},
    {"quote": "What is the weakest element on the screen? Can we improve it?"},
    {"quote": "How does this layout make it easier for the user to accomplish their task quickly and efficiently?"},
    {"quote": "Can we emphasise CTA?"},
    {"quote": "Aren't you taking it personally?"},
    {"quote": "Don't you want to appreciate people who helped you with it?"},
    {"quote": "Don't you think that users need more information here?"},
    {"quote": "Aren't we using different vocabularies?"},
    {"quote": "Where can we find a consensus?"},
    {"quote": "Do you think anybody is going to click that?"},
    {"quote": "Are you sure that wording is consistent across all product?"},
    {"quote": "Can we make icons more obvious?"},
    {"quote": "What\’s the priority of the elements that need to be above the fold?"},
    {"quote": "Are links contrast enough?"},
    {"quote": "The overall layout is looking clean and balanced. What do you think?"},
    {"quote": "Do you keep in mind how it'll look on other platforms?"},
    {"quote": "What is the focal point of this design?"},
    {"quote": "Is the navigation clear?"},
    {"quote": "Who is the target audience? "},
    {"quote": "What were you trying to achieve with this hierarchy?"},
    {"quote": "Can we make the font larger?"},
    {"quote": "Can we make the design more contrast?"}
 ]
};

var people={ "notes": [
  {
    "title": "images/male_01.jpg",
    "author": 'Cobb Trelegan / Lead Designer'
  },
  {
    "title" : "images/male_02.jpg",
    "author": "Darrin Dziewonski / Senior Designer"
  },
  {
    "title" : "images/male_03.jpg",
    "author": "Joe Hodge / UX Designer"
  },
  {
    "title" : "images/male_04.jpg",
    "author": "Bruce Stoto / UI Designer"
  },
  {
    "title" : "images/male_05.jpg",
    "author": "Herby Coxson / Head of Design"
  },
  {
    "title" : "images/female_01.jpg",
    "author": "Margo Leach / Senior Designer"
  },
  {
    "title" : "images/female_02.jpg",
    "author": "Brenda Hamilton / Visual Designer"
  },
  {
    "title" : "images/female_03.jpg",
    "author": "Nettie Casey / UX/UI Designer"
  },
  {
    "title" : "images/female_04.jpg",
    "author": "Graciela Bolton / Junior Designer"
  },
  {
    "title" : "images/female_05.jpg",
    "author": "Angelita Boyle / Art Director"
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
  
    var rangep = people.notes.length;
    var random_indexp = Math.floor(Math.random() * rangep);
    var itemp = people.notes[random_indexp];
    
    $('.quote-content').html(item.quote); 
    $('.quote-author').html(itemp.author);
    $(".author-photo").attr("src", itemp.title);
    
    var twitterBtn = document.querySelector('.twitter-share');
    var text = encodeURIComponent('Design Critique Coach 🦸 taught me to answer this question: " ');
    var shareUrl = 'https://twitter.com/intent/tweet?url=' + location.href + '&text=' + text + item.quote + '" More questions 👉designcritiquecoach.com 👈' ;
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
