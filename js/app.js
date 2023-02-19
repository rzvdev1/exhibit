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
function question1(theQuestion, correctAnswer, wrongAnswer) {
  let prompt1 = prompt(theQuestion);
  if (prompt1.toUpperCase() === 'YES' || prompt1.toUpperCase() === 'Y') {
    alert(correctAnswer.charAt(0) + correctAnswer.substring(1));
    console.log(correctAnswer);
  }
  else {
    alert(wrongAnswer)
  }
} question1(
  "Do you want a website to launch your dream business, Yes or No?",
  "Yes, Awesome looking foward working with you!",
  "No, Why not?");

  question1("Do you listen to Lo-fi, Yes or No?",
  ", thats good and same here it helps me to concentrate!",
  ", you should try out it helps to reduce stress and enhance focus.");

  question1("Do you drink coffee, Yes or No?",
  ", glad you do because coffee has unique benefits.",
  ", try it out sometime coffee has unique benefits.");

  question1("Are you a Veteran, Yes or No?",
  ", aye! Im a veteran too. I offer a 25% discount to build your website.",
  ", that's ok and if you anyone that wants a veteran disount to build a webiste have them reach out to me");

  question1("Do you have pets, Yes or No?",
  ", OMG! I have a Husky.",
  ", they make good companions.");




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
  "read",
  "watch anime",
  "play video games",
  "walk",
  "workout",
  "sleep",
];
let rightAnswer = hobbies[0]
let userAttempts = 6;

function hobbyArray(initialPrompt, userInput, correctAnswer){

while (userAttempts) {
  alert(initialPrompt)
  let userAnswer = prompt(userInput).toLowerCase();
  userAttempts--;

for (let i = 0; i < hobbies.length; i++)

 
  if (userAnswer === hobbies[i]) {
          alert(correctAnswer);
          score++;
          console.log("Score is ---> " + score);
          userAttempts = 0;
          break;
}
}
}
hobbyArray(
  "Guess one of my favorite hobbies",
  "Whats my favorite hobby",
  "You are right!"
)

alert("Your final score is: " + score);
