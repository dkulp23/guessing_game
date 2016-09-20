'use strict';
var userName = prompt('Hi! What\'s your name?');
console.log(userName);
alert('Welcome to my site, ' + userName + '. I\'d like to play a quick guessing game to help us get acquainted, ' + userName + '. Let\'s see how well you know me!');

// var questionOne = prompt ('Was I born in Pennsylvania?', 'Yes or no...');
// questionOne = questionOne.toLowerCase();
// console.log(questionOne);
// if (questionOne === 'yes' || questionOne === 'y') {
//   alert('Correct! I was born in a suburb of Philadelphia called Lansdale.');
// } else if (questionOne === 'no' || questionOne === 'n') {
//   alert('Even though I don\'t have the accent I actually was born near Philly.');
// } else {
//   var altOne = prompt('To play the game you\'ve got to follow the rules! Yes or no please.');
//   altOne = altOne.toLowerCase();
//   if (altOne === 'yes' || altOne === 'y') {
//     alert('Correct! I was born in a suburb of Philadelphia called Lansdale.');
//   } else if (altOne === 'no' || altOne === 'n') {
//     alert('Even though I don\'t have the accent I actually was born near Philly.');
//   } else {
//     var wowOne = prompt('Are you drunk?');
//     wowOne = wowOne.toLowerCase();
//     if (wowOne === 'yes' || wowOne === 'y') {
//       alert('It\'s impolite not to share...');
//     } else {
//       alert('I\'m not sure what to say.');
//     }
//   }
// }; //I can't wait to learn how to do this more elegantly!
//
// var questionTwo = prompt ('Is soccer my favorite sport?', 'Yes or no...');
// questionTwo = questionTwo.toLowerCase();
// console.log(questionTwo);
// if (questionTwo === 'yes' || questionTwo === 'y') {
//   alert ('Yes! There\'s a reason why they call it the beautiful game!');
// } else if (questionTwo === 'no' || questionTwo === 'no') {
//   alert ('I know, I probably fooled you when I talked about ping pong in my intro. That\'s a close runner up!');
// } else {
//   var altTwo = prompt ('Sorry, no shades of gray allowed. Yes or no only, please.');
//   altTwo = altTwo.toLowerCase();
//   if (altTwo === 'yes' || altTwo === 'y') {
//     alert('You got it! I still try to play twice a week in an adult leage I\'ve been a part of since I moved to Seattle!');
//   } else if (altTwo === 'no' || altTwo === 'n'){
//     alert('It get\'s a lot of criticism for being boring because so few goals are scored but every second is exciting if you know what to watch for!');
//   } else {
//     alert('Yes or no. It\'s so simple!');
//   }
// };
//
// var questionThree = prompt ('Do I live in Fremont?', 'Yes or no...');
// questionThree = questionThree.toLowerCase();
// console.log(questionThree);
// if (questionThree === 'yes' || questionThree === 'y') {
//   alert ('Yep. Got a nice little one bedroom condo right there in the Center of the Universe.');
// } else if (questionThree === 'no' || questionThree === 'no') {
//   alert ('Can\'t imagine living anywhere else!');
// } else {
//   alert ('Still don\'t have it down by now, huh? A simple yes or no will do!');
// };
//
// var questionFour = prompt ('Do I play a musical instrument?', 'Yes or no...');
// questionFour = questionFour.toLowerCase();
// console.log(questionFour);
// if (questionFour === 'yes' || questionFour === 'y') {
//   alert ('I learned how to play guitar in high school and still make noise with it now and again.');
// } else if (questionFour === 'no' || questionFour === 'no') {
//   alert ('OK...just because I\'m not very good at it doesn\'t mean that I don\'t \'play\' it!');
// } else {
//   alert ('Real slow on the uptake, eh? Please, for the love of god, just a yes or a no.');
// };
//
var questions = [
  'Was I born in Pennsylvania?',
  'Is soccer my favorite sport?',
  'Do I live in Fremont?',
  'Do I play a musical instrument?',
  'Do I love to drive?'
];
var numberOfQuestions = questions.length;
var answers = [
  'yes',
  'yes',
  'yes',
  'yes',
  'no'
];
var correctFeedback = [
  'You\'re right! I was born just outside of Philadelphia.',
  'Oh yeah! I still play quite a bit and go to all the Sounders games.',
  'Right! The center of the universe! I love my neighborhood.',
  'Correct! I play the guitar and the trumpet.',
  'You got it! I\'d much rather ride my bicycle!'
];
var incorrectFeedback = [
  'Sorry. I know I don\'t have the accent but I was born near Philly.',
  'Wrong. I know, I said that I really liked ping pong but not as much as the beautiful game!',
  'You guessed incorrectly. I couldn\'t imagine living anywhere else!',
  'Wrong. I do play the guitar. Not very well but...',
  'Nope. It is actually one of my least favorite things to do.'
];

var correctResponses = [];
var incorrectResponses = [];

for (var x = 0; x < numberOfQuestions; x++) {
  var userResponse = prompt(questions[x]);
  var userResponseLC = userResponse.toLowerCase;
  if (userResponseLC === answers[x]) {
    console.log(userResponseLC);
    alert(correctFeedback[x]);
    correctResponses.push();
  } else {
    alert(incorrectFeedback[x]);
    incorrectResponses.push();
  }
}

alert('Thanks for playing! You answered ' + correctResponses.length + ' out of ' + numberOfQuestions + 'questions correctly.');

alert('Bonus round: Can you guess my birth month and year?? Answer in two parts: First enter the month, and then the year.');
var birthMonth = prompt ('In which month was I born? (Hint: Winter month)', 'mm | January = 01');
console.log(birthMonth);
var birthMonthInt = parseInt(birthMonth);
var birthYear = prompt ('In which year was I born? (Hint: Even number)', 'yyyy');
console.log(birthYear);
var birthYearInt = parseInt(birthYear);
if (birthMonthInt === 12 && birthYear === '1980') {
  alert ('You win the grand prize! Did you see my driver\'s license or something?');
} else if (birthMonthInt === 12 && birthYear !== '1980') {
  if (birthYearInt >= 1978 && birthYearInt <= 1982) {
    alert ('So close! You got December right but I was born in 1980');
  } else if (birthYearInt < 1978) {
    alert ('You got the month right but how old do you think I am??');
  } else {
    alert('I\'ll take that as a compliment! You got Decmeber right but I was born in 1980.');
  }
} else if (birthMonthInt !== 12 && birthYear === '1980') {
  if (birthMonthInt <= 2 || birthMonthInt >= 10) {
    alert ('Close! You got the year right but I was born in December. Yeah Sagitarius!');
  } else {
    alert ('Almost! You got the year right but how long do you think the winter is? I was born in December.');
  }
} else {
  alert ('Thanks for trying but you didn\'t get either right. Just so you know, I was born in December of 1980.');
};

var places = ['iceland', 'mexico', 'canada', 'st martin'];
var travel = prompt ('Last question: I\'ve only traveled out of the US to 4 other countries. Can you name one?', '1 is Nordic, 2 are neighbors & 1 a Caribbean Island');
var travelUse = travel.toLowerCase();
console.log(travelUse);
if (places.indexOf(travelUse) > -1) {
  alert ('Yes! Great guess!');
} else {
  alert ('Sorry. You didn\'t guess correctly. Thanks for playing though!');
};

var myNumber = 4;
var counter = 1;

function getUserNumber() {
  var userAnswerSeven = parseInt(prompt('I\'m thinking of a number beween 1 and 10. Can you guess it?'));
  if (userAnswerSeven === myNumber) {
    if (counter === 1) {
      alert ('Wow! You got it on the first try. You must be a mind reader!');
      return;
    } else {
      alert ('Nice work. You got it on try number ' + counter + '.');
    }
  } else if (userAnswerSeven < myNumber) {
    alert ('Sorry. ' + userAnswerSeven + ' is too low.');
    counter++;
    getUserNumber();
  } else {
    alert ('Nice try. ' + userAnswerSeven + ' is too high.');
    counter++;
    getUserNumber();
  }
}
getUserNumber();

//I used page 79 of the JS text as a reference for these scripts
var hello = 'Welcome to me, ';

var heyThere = hello + userName + '!';

var hi = document.getElementById('welcome');
hi.textContent = heyThere;

var answerMessageOne = 'You answered ' + questionOne + '.';
var pa = document.getElementById('born');
pa.textContent = answerMessageOne;

var answerMessageTwo = 'You answered ' + questionTwo + '.';
var gol = document.getElementById('sport');
gol.textContent = answerMessageTwo;

var answerMessageThree = 'You answered ' + questionThree + '.';
var troll = document.getElementById('live');
troll.textContent = answerMessageThree;

var answerMessageFour = 'You answered ' + questionFour + '.';
var hendrix = document.getElementById('musical');
hendrix.textContent = answerMessageFour;

var birthDay = 'You thought I was born in the ' + birthMonth + ' month of ' + birthYear + '.';
var december = document.getElementById('sag');
december.textContent = birthDay;

var countries = 'You thought that I have travelled to ' + travel + '.';
var trips = document.getElementById('abroad');
trips.textContent = countries;

var numberGuess = 'It took you ' + counter + ' guesses to get my number, which was ' + myNumber + '.';
var houdini = document.getElementById('fourIsMyNumber');
houdini.textContent = numberGuess;
