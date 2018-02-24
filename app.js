var fortunesList = [
  "You'll find a $100 bill on the sidewalk.",
  "You will win a random lottery.",
  "You will find a four leafed clover.",
  "A tree will fall on your neighbors car.",
  "You will find 100 pennies in a span of 30 days.",
  "The next fortune will feel more rewarding after this.",
  "You will wake up with the power to shut anyones mouth for 5 min.",
  "You are able to control how much and how powerful your farts are.",
  "You will wake up with a full beard"
];



function generateFortuneCookie () {
  rand = Math.floor((Math.random() * fortunesList.length)) ;

  document.getElementById("fortune-cookie-text").innerHTML = fortunesList[rand];

  var list = document.createElement("li");

  var text = document.createTextNode(fortunesList[rand]);

  list.appendChild(text);

  document.getElementById("previous-fortunes").appendChild(list);
  
  fortunesList.splice(rand, 1);

  if (fortunesList.length == 0) {
    fortunesList.push("You'll find a $100 bill on the sidewalk.",
  "You will win a random lottery.",
  "You will find a four leafed clover.",
  "A tree will fall on your neighbors car.",
  "You will find 100 pennies in a span of 30 days.",
  "The next fortune will feel more rewarding after this","You will wake up with the power to shut anyones mouth for 5 min.",
  "You are able to control how much and how powerful your farts are.",
  "You will wake up with a full beard");
  }
}
