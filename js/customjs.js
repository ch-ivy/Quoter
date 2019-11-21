

var quotelist = [

    {
        quote : "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author: "Bernard M. Baruch"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "We accept the love we think we deserve.",
        author: "Stephen Chbosky"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Never bend your head. Always hold it high. Look the world straight in the eye.",
        author: "Helen Keller"
    },
    {
        quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        author: "Zig Ziglar"
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein"
    },
    {
        quote: "You do not find the happy life. You make it.",
        author: "Camilla Eyring Kimball"
    },
    {
        quote: "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
        author: "Deep Roy"
    },
    {
        quote: "Sometimes you will never know the value of a moment, until it becomes a memory.",
        author: "Dr. Seuss"
    },
    {
        quote: "Understanding is the first step to acceptance, and only with acceptance can there be recovery.",
        author: "J.K. Rowling"
    },
    {
        quote: "It's like the smarter you are, the more things can scare you.",
        author: "Katherine Paterson"
    },
    {
        quote: "Giving up is always an option, but not always a failure.",
        author: "Cameron Conaway"
    },
    {
        quote: "Your time is limited, so don’t waste it living someone else’s life.",
        author: "Steve Jobs"
    },
    {
        quote: "Business has only two functions – marketing and innovation.",
        author: "Peter Drucker"
    },
    {
        quote: "Have the end in mind and every day make sure your working towards it",
        author: "Ryan Allis"
    },
    {
        quote: "Paying attention to simple little things that most men neglect makes a few men rich.",
        author: "Henry Ford"
    },
    {
        quote: "If You're seeing their results now, the work had started since.",
        author: "Ivy Li"
    },
    {
        quote: "Formal education will make you a living; self education will make you a fortune.",
        author: "Jim Rohn"
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
    },
    {
        quote: "Courage is being scared to death, but saddling up anyway.",
        author: "John Wayne"
    },
    {
        quote: "We are what we repeatedly do. Excellence then is not an act but a habit.",
        author: "Aristotle"
    },
    {
        quote: "If you can’t feed a team with two pizzas, it’s too large",
        author: "Jeff Bezos"
    },
    {
        quote: "Don’t be evil",
        author: "Larry Page"
    },
    {
        quote: "Good ideas come from bad ideas, but only if there are enough of them.",
        author: "Seth Godin"
    },
    {
        quote: "Failure defeats losers, failure inspires winners.",
        author: "Robert T. Kiyosaki"
    },
    {
        quote: "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
        author: "Jim Rohn"
    },
    {
        quote: "The ones who are crazy enough to think they can change the world, are the ones that do.",
        author: "Anonymous"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
        author: "Jim Rohn"
    },
    {
        quote: "I cannot give you the formula for success, but I can give you the formula for failure--It is: Try to please everybody.",
        author: "Herbert Bayard Swope"
    },
    {
        quote: "In order to succeed, your desire for success should be greater than your fear of failure.",
        author: "Bill Cosby"
    },
    {
        quote: "Don't be distracted by criticism. Remember--the only taste of success some people get is to take a bite out of you.",
        author: "Zig Ziglar"
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon"
    },
    {
        quote: "Mistakes are the growing pains of wisdom.",
        author: "William George Jordan"
    },
    {
        quote: "“Only those who will risk going too far can possibly find out how far one can go.",
        author: "T.S. Eliot"
    },
    {
        quote: "Ideas in secret die. They need light and air or they starve to death.",
        author: "Seth Godin"
    },
    {
        quote: "Learning how to do the work is better than looking like you can do the work",
        author: "Ivy Li"
    },
    {
        quote: "Your most unhappy customers are your greatest source of learning.",
        author: "Bill Gates"
    },
    {
        quote: "Build your own dreams, or someone else will hire you to build theirs.",
        author: "Farrah Gray"
    }

];


var totquote = quotelist.length;
var statvalue = 0;
 $("#texts").html(quotelist[0]['quote']);
 $("#author").html("- By " + quotelist[0]['author']);
 


 $("#new-quote").click(function()
    {     
       makeQuote();   

    });

    



function makeQuote()
{

    var quotestat = Math.floor(Math.random() * totquote);
    statvalue = quotestat; 
    $("#texts").html(quotelist[statvalue]['quote']);
    $("#author").html("- By " + quotelist[statvalue]['author']);   
    $("#tweet-quote").attr("href", 'https://twitter.com/intent/tweet?hashtags=ivyli&text=' + encodeURIComponent('"' + quotelist[statvalue].quote + '" ' + quotelist[statvalue].author + 'https://getquotes.netlify.com/'));
}

//  Twitter API 
window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
  
    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };
  
    return t;
  }(document, "script", "twitter-wjs"));


        $("a.btn").mousedown(function(){
            $(this).addClass("pressed");
        });

        $("a.btn").mouseup(function(){
            $(this).removeClass("pressed");
        });

        $("a.btn").on("tap",function(){
            $(this).addClass("pressed");
        });

        $("a.btn").on("tap",function(){
            $(this).removeClass("pressed");
        });

        $("a.btn").mouseout(function(){
            $(this).removeClass("pressed");
        });
makeQuote();
    
   
  