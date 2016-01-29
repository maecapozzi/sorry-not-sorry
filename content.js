// highlights the word sorry on the page. 

// searches the entire document 
// if it finds the word that matches "sorry", "Sorry", or "SORRY", it highlights that word

//when the button is clicked, needs to take all of the text in the div
//put that text into an array 
// loop through all of the words 
//check to see if a word matches "sorry". 
// If the word matches, highlight the word. 

var grabText = function(){ 
  var text = $(".Am").text();
  var textArray = text.split(" ")
  return textArray
}


var findSorry = function(array){ 
  for (var i = 0; i < array.length; i++) {
    if ( /sorry/.test(array[i]) ){ 
      console.log("yes");
    }
    else { 
      console.log("no");
    }
  };
  //loop through the array
  //if the word matches the regex for "sorry", highlight it
  //  
}

var highlightWord = function(string){ 

}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      
      var arrayOfWords = grabText(); 
      findSorry(arrayOfWords);

    }
  }
);


// var doc = document.getElementsByClassName("Am");
// debugger
// // var text = doc[0].innerHTML.split(" "); 



