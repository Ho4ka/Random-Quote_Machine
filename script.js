

var phraseContainer = document.getElementById('phrase-container');
var btn = document.getElementById('btn');
var body = document.getElementById('body');
var str = document.getElementById('placeholder');
var author = document.getElementById('author');
var twitter = document.getElementById('twitter');
var Placeholdervalue;





btn.addEventListener('click', function () {

    $('#placeholder').hide().fadeIn(1000);
    $('#author').hide().fadeIn(1500);


    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'package.json');
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        var data = Math.floor(Math.random() * ourData.length);
         Placeholdervalue = ourData[data];
        str.innerHTML = Placeholdervalue.string;
        author.innerHTML = Placeholdervalue.author;
        
            var windowObjectReference = 'https://twitter.com/intent/tweet?text=' + Placeholdervalue.string +'' + Placeholdervalue.author;
        twitter.addEventListener('click', function () {
                window.open(windowObjectReference, 'twitter');
            }
        );

    };
    ourRequest.send();
    
     

});
   

            
