
var phraseContainer = document.getElementById('phrase-container');
var btn = document.getElementById('btn');
var body = document.getElementById('body');
var str = document.getElementById('placeholder');
var author = document.getElementById('author');

  

btn.addEventListener('click', function () {
     
       $('#placeholder').hide().fadeIn(1000);
     $('#author').hide().fadeIn(1500);
   
           
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'package.json');
    ourRequest.onload = function () {
      
        var ourData = JSON.parse(ourRequest.responseText);
 
 
        
        var data = Math.floor(Math.random()* ourData.length);
        var Placeholdervalue = ourData[data];
    
        str.innerHTML =  Placeholdervalue.string ;
        author.innerHTML = Placeholdervalue.author;
    };
    ourRequest.send();
});


  
