// 'use strict';
//
// function greeting() {
//   var userName = prompt('Hi! What\'s your name?');
//   alert('Welcome to my site, ' + userName + '. I\'d like to play a quick guessing game to help us get acquainted, ' + userName + '. Let\'s see how well you know me!');
//   var hello = 'Welcome to me, ';
//   var heyThere = hello + userName + '!';
//
//   var hi = document.getElementById('welcome');
//   hi.textContent = heyThere;
// }
//
// greeting();
//
// var questions = [
//   'Was I born in Pennsylvania?',
//   'Is soccer my favorite sport?',
//   'Do I live in Fremont?',
//   'Do I play a musical instrument?',
//   'Do I love to drive?'
// ];
// var numberOfQuestions = questions.length;
// var answers = [
//   'yes',
//   'yes',
//   'yes',
//   'yes',
//   'no'
// ];
// var abbrvAnswers = [
//   'y',
//   'y',
//   'y',
//   'y',
//   'n'
// ];
// var correctFeedback = [
//   'You\'re right! I was born just outside of Philadelphia.',
//   'Oh yeah! I still play quite a bit and go to all the Sounders games.',
//   'Right! The center of the universe! I love my neighborhood.',
//   'Correct! I play the guitar and the trumpet.',
//   'You got it! I\'d much rather ride my bicycle!'
// ];
// var incorrectFeedback = [
//   'Sorry. I know I don\'t have the accent but I was born near Philly.',
//   'Wrong. I know, I said that I really liked ping pong but not as much as the beautiful game!',
//   'You guessed incorrectly. I couldn\'t imagine living anywhere else!',
//   'Wrong. I do play the guitar. Not very well but...',
//   'Nope. It is actually one of my least favorite things to do.'
// ];
//
// var responseToQuestions = [];
// var correctResponses = [];
// var incorrectResponses = [];
//
// var x = 0;
// function yesAndNo() {
//   if (x < 5) {
//     var userResponse = prompt(questions[x], 'Please answer yes/no or y/n.').toLowerCase();
//     if (userResponse === answers[x] || userResponse === abbrvAnswers[x]) {
//       alert(correctFeedback[x]);
//       responseToQuestions.push(userResponse);
//       correctResponses.push(userResponse);
//       x++;
//       yesAndNo();
//     }
//     else if (userResponse !== answers[x] || userResponse !== abbrvAnswers[x]){
//       alert(incorrectFeedback[x]);
//       responseToQuestions.push(userResponse);
//       incorrectResponses.push(userResponse);
//       x++;
//       yesAndNo();
//     } else {
//       alert('Please answer yes or no!');
//       yesAndNo();
//     }
//   }
// }
//
// yesAndNo();
//
// alert('Thanks for playing! You answered ' + correctResponses.length + ' out of ' + numberOfQuestions + ' questions correctly.');
//
// alert('Bonus round: Can you guess my birth month and year?? Answer in two parts: First enter the month, and then the year.');
//
// function guessMyBirthYearInt() {
//   var birthMonthInt = parseInt(prompt ('In which month was I born? (Hint: Winter month)', 'mm | January = 01'));
//   var birthYear = prompt ('In which year was I born? (Hint: Even number)', 'yyyy');
//   var birthYearInt = parseInt(birthYear);
//   var birthDay = 'You thought I was born in the ' + birthMonthInt + ' month of ' + birthYear + '.';
//   var december = document.getElementById('sag');
//   december.textContent = birthDay;
//   if (birthMonthInt === 12 && birthYear === '1980') {
//     alert ('You win the grand prize! Did you see my driver\'s license or something?');
//   } else if (birthMonthInt === 12 && birthYear !== '1980') {
//     if (birthYearInt >= 1978 && birthYearInt <= 1982) {
//       alert ('So close! You got December right but I was born in 1980');
//     } else if (birthYearInt < 1978) {
//       alert ('You got the month right but how old do you think I am??');
//     } else {
//       alert('I\'ll take that as a compliment! You got Decmeber right but I was born in 1980.');
//     }
//   } else if (birthMonthInt !== 12 && birthYear === '1980') {
//     if (birthMonthInt <= 2 || birthMonthInt >= 10) {
//       alert ('Close! You got the year right but I was born in December. Yeah Sagitarius!');
//     } else {
//       alert ('Almost! You got the year right but how long do you think the winter is? I was born in December.');
//     }
//   } else {
//     alert ('Sorry! You didn\'t get either right! Try guessing again...');
//     guessMyBirthYearInt();
//   }
// }
//
// guessMyBirthYearInt();
//
// var places = ['iceland', 'mexico', 'canada', 'st martin'];
// var yesPlaces = [ ];
// var noPlaces = [ ];
// var q = 0;
//
// function guessWhereIveBeen() {
//   if (q < 4) {
//     var travel = prompt ('Next question: I\'ve only traveled out of the US to 4 other countries. Can you name one?', '1 is Nordic, 2 are neighbors & 1 a Caribbean Island');
//     var travelUse = travel.toLowerCase();
//     if (places.indexOf(travelUse) > -1) {
//       alert ('Great guess! Can you get another one??');
//       yesPlaces.push(travel);
//       q++;
//       guessWhereIveBeen();
//     } else {
//       alert ('Nope, haven\'t been there...yet! Guess again.');
//       noPlaces.push(travel);
//       q++;
//       guessWhereIveBeen();
//     }
//   }
// }
// guessWhereIveBeen();
//
// alert('You guessed these countries correctly:\n' + yesPlaces.join('\n'));
//
// var counter = 1;
//
// function getUserNumber() {
//   var myNumber = 4;
//   var userAnswerSeven = parseInt(prompt('I\'m thinking of a number beween 1 and 10. Can you guess it?'));
//   if (userAnswerSeven === myNumber) {
//     if (counter === 1) {
//       alert ('Wow! You got it on the first try. You must be a mind reader!');
//       return;
//     } else {
//       alert ('Nice work. You got it on try number ' + counter + '.');
//     }
//   } else if (userAnswerSeven < myNumber) {
//     alert ('Sorry. ' + userAnswerSeven + ' is too low.');
//     counter++;
//     getUserNumber();
//   } else if (userAnswerSeven > myNumber) {
//     alert ('Nice try. ' + userAnswerSeven + ' is too high.');
//     counter++;
//     getUserNumber();
//   } else {
//     alert ('Please enter a number!');
//     counter++;
//     getUserNumber();
//   }
//   var numberGuess = 'It took you ' + counter + ' guesses to get my number, which was ' + myNumber + '.';
//   var houdini = document.getElementById('fourIsMyNumber');
//   houdini.textContent = numberGuess;
// }
// getUserNumber();
//
// function domOne() {
//   var answerMessageOne = 'You answered ' + responseToQuestions[0] + '.';
//   var pa = document.getElementById('born');
//   pa.textContent = answerMessageOne;
// }
// domOne();
//
// function domTwo() {
//   var answerMessageTwo = 'You answered ' + responseToQuestions[1] + '.';
//   var gol = document.getElementById('sport');
//   gol.textContent = answerMessageTwo;
// }
// domTwo();
//
// function domThree() {
//   var answerMessageThree = 'You answered ' + responseToQuestions[2] + '.';
//   var troll = document.getElementById('live');
//   troll.textContent = answerMessageThree;
// }
// domThree();
//
// function domFour() {
//   var answerMessageFour = 'You answered ' + responseToQuestions[3] + '.';
//   var hendrix = document.getElementById('musical');
//   hendrix.textContent = answerMessageFour;
// }
// domFour();
//
// function domFive() {
//   var questionFive = questions[4];
//   var driveMuch = document.getElementById('doIDrive');
//   driveMuch.textcontent = questionFive;
//
//   var responseToQuestionFive = 'You answered ' + responseToQuestions[4] + '.';
//   var armstrong = document.getElementById('iHateDriving');
//   armstrong.textContent = responseToQuestionFive;
// }
// domFive();
//
// function correctPlaces() {
//   var countries = yesPlaces.join('\n');
//   var trips = document.getElementById('abroad');
//   trips.textContent = countries;
// }
// correctPlaces();
//
// function incorrectPlaces() {
//   var noCountries = noPlaces.join('\n');
//   var futureTrips = document.getElementById('nova');
//   futureTrips.textContent = noCountries;
// }
// incorrectPlaces();
