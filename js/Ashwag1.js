function showLetter() {
    var letter = letters[i];
    document.getElementById("letters").innerHTML += letter;
    i++;
  
    if (i < letters.length) {
      setTimeout(showLetter, 1000);
    }
  }
  
  var letters = "Ashwag Alharbi";
  var i = 0;
  
  showLetter();
  