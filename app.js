
var fortunesList = [
  "You'll find a $100 bill on the sidewalk.",
  "You will win a random lottery.",
  "You will find a four leafed clover.",
  "A tree will fall on your neighbors car.",
  "You will find 100 pennies in a span of 30 days.",
  "The next fortune will feel more rewarding after this",
];



function generateFortuneCookie () {
  rand = Math.floor((Math.random() * fortunesList.length)) ;

  document.getElementById("fortune-cookie-text").innerHTML = fortunesList[rand];

  var list = document.createElement("LI");

  var text = document.createTextNode("fortuneList[rand]");

  list.appendChild(text);

  document.getElementById("previous-fortunes").appendChild(list);
  
  var prev = document.getElementById("previous-fortunes");
  
  prev.insertBefore(List, prev.childNodes[0]);
  
}