 var grabText = function(){ 
  var text = $(".Am").text();
  var textArray = text.split(" ")
  return textArray
}

var findSorry = function(array){ 
  var counter = 0 
  for (var i = 0; i < array.length; i++) {
    if ( /sorry/.test(array[i]) ){ 
      counter++;
    } else if ( /Sorry/.test(array[i])){ 
      counter++;
    } else if ( /SORRY/.test(array[i])){ 
      counter++;
    }
    else { 
    }
  };
  alert("You have used the word 'sorry' " +counter+ " times!");
}


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      
      var arrayOfWords = grabText(); 
      findSorry(arrayOfWords);

    }
  }
);





