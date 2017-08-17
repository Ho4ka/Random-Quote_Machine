var phraseContainer = document.getElementById('phrase-container');
var btn = document.getElementById('btn');
var body = document.getElementById('body');
var str = document.getElementById('placeholder');
var author = document.getElementById('author');
var twitter = document.getElementById('twitter');
var shareToTwitter = 'https://twitter.com/intent/tweet?text=' + $('#placeholder').text() + $('#author').text();
var facebook = document.getElementById('facebook');
var shareToFacebook = 'https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2F&redirect_uri=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer';
var Placeholdervalue;

btn.addEventListener('click', function() {

    $('#placeholder').hide().fadeIn(1000);
    $('#author').hide().fadeIn(1500);


    var quoteRequest = new XMLHttpRequest();
    quoteRequest.open('GET', 'package.json');
    quoteRequest.onload = function() {
        var ourData = JSON.parse(quoteRequest.responseText);
        var data = Math.floor(Math.random() * ourData.length);
        Placeholdervalue = ourData[data];
        str.innerHTML = Placeholdervalue.string;
        author.innerHTML = Placeholdervalue.author;
        shareToTwitter = 'https://twitter.com/intent/tweet?text=' + Placeholdervalue.string + '' + Placeholdervalue.author;



    };
    quoteRequest.send();


});

twitter.addEventListener('click', function() {
    window.open(shareToTwitter, 'twitter');
});

facebook.addEventListener('click', function() {
    window.open(shareToFacebook, 'facebook');
});