"use strict";
//Greeting User
let firstName = prompt("Hello, What is your first name?");
alert(
  "Thank you for visiting my page and Welcome " +
    firstName.charAt(0).toUpperCase() +
    firstName.substring(1) +
    "!"
);
console.log(firstName.charAt(0).toUpperCase() + firstName.substring(1));

//Question 1
let website = prompt(
  "Do you want a website to launch your dream business, Yes or No?"
);
if (website === "yes" || website === "y") {
  alert(
    website.charAt(0).toUpperCase() +
      website.substring(1) +
      ", Awesome looking foward working with you!"
  );
} else {
  alert(website.charAt(0).toUpperCase() + website.substring(1) + ", Why not?");
}
console.log(website.charAt(0).toUpperCase() + website.substring(1));

// //Question 2
let music = prompt("Do you listen to Lo-fi, Yes or No?");
if (music === "yes" || music === "y") {
  alert(
    music.charAt(0).toUpperCase() +
      music.substring(1) +
      ", thats good and same here it helps me to concentrate!"
  );
} else {
  alert(
    music.charAt(0).toUpperCase() +
      music.substring(1) +
      ", you should try out it helps to reduce stress and enhance focus."
  );
}
console.log(music.charAt(0).toUpperCase() + music.substring(1));

//Question 3
let drink = prompt("Do you drink coffee, Yes or No?");
if (drink === "yes" || drink === "y") {
  alert(
    drink.charAt(0).toUpperCase() +
      drink.substring(1) +
      ", glad you do because coffee has unique benefits."
  );
} else {
  alert(
    drink.charAt(0).toUpperCase() +
      drink.substring(1) +
      ", try it out sometime coffee has unique benefits."
  );
}
console.log(drink.charAt(0).toUpperCase() + drink.substring(1));

//Question 4
let veteran = prompt("Are you a Veteran, Yes or No?");
if (veteran === "yes" || veteran === "y") {
  alert(
    veteran.charAt(0).toUpperCase() +
      veteran.substring(1) +
      ", aye! Im a veteran too. I offer a 25% discount to build your website."
  );
} else {
  alert(
    veteran.charAt(0).toUpperCase() +
      veteran.substring(1) +
      ", that's ok and if you anyone that wants a veteran disount to build a webiste have them reach out to me"
  );
}
console.log(veteran.charAt(0).toUpperCase() + veteran.substring(1));

//Question 5
let pets = prompt("Do you have pets, Yes or No?");
if (pets === "yes" || pets === "y") {
  alert(
    pets.charAt(0).toUpperCase() + pets.substring(1) + ", OMG! I have a Husky."
  );
} else {
  alert(
    pets.charAt(0).toUpperCase() +
      pets.substring(1) +
      ", they make good companions."
  );
}
console.log(pets.charAt(0).toUpperCase() + pets.substring(1));

let score = 0;
let numberOfGuesses = 4;
let gotIt = false;

while (gotIt !== true) {
  let userInput = prompt("From numbers 1-5, what is my favorite number?");
  userInput = Number(userInput);
  console.log(userInput);
  switch (userInput) {
    case 1:
      alert("Too low");
      userInput = prompt("From numbers 1-5, what is my favorite number?");
      userInput = Number(userInput);
      break;
    case 2:
      alert("Too low");
      userInput = prompt("From numbers 1-5, what is my favorite number?");
      userInput = Number(userInput);
      break;
    case 3:
      alert("You are right!");
      score++;
      gotIt = true;
      console.log("Score is ---> " + score);
      break;
    case 4:
      alert("Too high");
      userInput = prompt("From numbers 1-5, what is my favorite number?");
      userInput = Number(userInput);
      break;
    case 5:
      alert("Too high");
      userInput = prompt("From numbers 1-5, what is my favorite number?");
      userInput = Number(userInput);
      break;
    default:
      alert("correct number is 3");
  }
}

let hobbies = [
  "Read",
  "Watch Anime",
  "Play Video Games",
  "Walk",
  "Workout",
  "Sleep",
];

let userAttempts = 6;

while (userAttempts) {
  alert("Guess one of my favorite hobbies");
  alert("Here is a list of possibilities: " + hobbies);
  let userAnswer = prompt("Whats my favorite hobby").toLowerCase();
  userAttempts--;

  for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i], userAnswer);
    if (hobbies[i].toLowerCase() === userAnswer) {
      alert("You are right!");
      score++;
      console.log("Score is ---> " + score);
      userAttempts = 0;
      break;
    }
  }
}
alert("Your final score is: " + score);
