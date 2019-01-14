'use strict'

const {	dialogflow } = require('actions-on-google');
const app = dialogflow({debug: true});
var question = ["To the nearest million, how many mini-figures have been made by LEGO?"];
var answers = [10000000000];
var team = ["team tomato", "team mango"]

app.intent('Default Welcome Intent', (conv) => {
  // Asks the user's permission to know their name, for personalization.
  conv.ask(`<speak> Welcome to LEGO QUIZ MASTER 2000. There are two teams. In one corner we have team MANGO <audio src="https://actions.google.com/sounds/v1/crowds/battle_crowd_celebrate_stutter.ogg"  clipEnd="3s" ></audio> , in the other corner we have team TOMATO <audio src="https://actions.google.com/sounds/v1/crowds/battle_crowd_celebrate_stutter.ogg"  clipEnd="3s" ></audio>.`+
  `Choose your teams then select the corresponding building mats provided by the one and only. LEGO. <audio src="https://actions.google.com/sounds/v1/crowds/battle_crowd_celebrate_stutter.ogg"  clipEnd="3s" ></audio> Team tomato are you ready to start? </speak>` );
});

let player1 = 0;
let player2 = 0;

app.intent ('question one', (conv) => {
  conv.ask(`ok ${team[0]}. ${question[0]}`);
});



app.intent('Answer one', (conv, {number})=>{
  var answerOne = {number};
  if(number >= 300000000000 && number <= 400000000000){
    conv.ask(`<speak> congradulations <audio src="https://actions.google.com/sounds/v1/crowds/battle_crowd_celebrate_stutter.ogg"  clipEnd="3s" ></audio> ${number} is absolutly correct, ${team[0]} take three LEGO Bricks from the pile.\n ok ${team[1]} your turn. What year was LEGO founded?</speak>`);
    // player1++;
  }else{
    conv.ask(`<speak> wronge <audio src="https://actions.google.com/sounds/v1/alarms/phone_alerts_and_rings.ogg"  clipEnd="1s" ></audio> , the correct answer is somewhere around 4 billion. No bricks for you. \n ok ${team[1]} your turn. What year was LEGO founded? </speak>`);
  }
});

app.intent('Answer two', (conv, response) => {
  let { year, datePeriod } = response;
  if(datePeriod)
    [year] = datePeriod.split('-')
  if(year == 1946)
    conv.ask(`<speak> <audio src="https://actions.google.com/sounds/v1/crowds/battle_crowd_celebrate_stutter.ogg"  clipEnd="3s" ></audio> 1946 is correct! Wowza ${team[1]} you know your stuff, take 3 LEGO Bricks form the pile. \n${team[0]} it's your turn. This is a True or False question. By the end of 2017 there were more mini-figures in the world than human beings. </speak>`);
  else {
    conv.ask(`<speak> <audio src="https://actions.google.com/sounds/v1/alarms/phone_alerts_and_rings.ogg"  clipEnd="1s" ></audio> waaa waaa waa waaaaaaaaaaaaaaaaaa, the correct answer is 1946. ha ha no bricks for you. \n${team[0]} it's your turn. This is a True or False question. By the end of 2017 there were more mini-figures in the world than human beings. </speak>`);
  }
});

app.intent('Answer three', (conv, {trueOrFalse}) => {
  var answer = {trueOrFalse};
  if(trueOrFalse == "false"){
  conv.ask(`<speak> <audio src="https://actions.google.com/sounds/v1/crowds/battle_crowd_celebrate_stutter.ogg"  clipEnd="3s" ></audio> OH MY GOODNESS GRACIOUS ME, we should hire you ${team[0]}. I now will allow you to take three LEGO Bricks from the pile. Ok ${team[1]} lets see if you can get this one. the name LEGO comes from the Danish LEg GODt, what does that mean in English? </speak>`);
}else{
  conv.ask(`<speak> <audio src="https://actions.google.com/sounds/v1/alarms/phone_alerts_and_rings.ogg"  clipEnd="1s" ></audio> WOW you really blew that one ${team[0]}, the correct answer is FALSE. No bricks for you. \nOk ${team[1]} lets see if you can get this one. the name LEGO comes from the Danish LEg GODt, what does that mean in English? </speak>`);
}
});

app.intent('Answer four', (conv, {legoLang}) => {
  var answer = {legoLang};
  if(legoLang == "Play Well" || legoLang == "Good Play" || legoLang == "Good Play"){
  conv.ask(`<speak> <audio src="https://actions.google.com/sounds/v1/crowds/battle_crowd_celebrate_stutter.ogg"  clipEnd="3s" ></audio> I might only be a machine but honestly, ${team[1]} i'm very impressed by your human brain. Take three LEGO Bricks from the pile. \nOk ${team[0]} its time to prove yourself to me like ${team[1]} just did. Which country is LEGO is from? </speak>`);
}else{
  conv.ask(`<speak> <audio src="https://actions.google.com/sounds/v1/alarms/phone_alerts_and_rings.ogg"  clipEnd="1s" ></audio> Nope thats just wrong ${team[1]} \nOk ${team[0]} its time to prove yourself to me like ${team[1]} just did. Which country is LEGO is from? </speak>`);
}
});

app.intent('Answer five', (conv, {thisPlace}) => {
  var contry = {thisPlace};
  if(thisPlace == "Denmark"){
  conv.close(`<speak> <audio src="https://actions.google.com/sounds/v1/crowds/battle_crowd_celebrate_stutter.ogg"  clipEnd="3s" ></audio> if you did not know that I would have been worried. Nice job both, ${team[1]} and ${team[0]}. Thankyou everyone for and for google team for the help. GoodBye </speak>`);
}else{
  conv.close(`<speak> <audio src="https://actions.google.com/sounds/v1/alarms/phone_alerts_and_rings.ogg"  clipEnd="1s" ></audio> WOW your in the country now, just wow. ${team[1]} and ${team[0]}. Thankyou everyone for and for google team for the help. GoodBye </speak>`);
}
});


// app.intent('Answer 10 - Player 2', () => {
//
//   if(player1 > player2)
//     conv.ask('Player 1 is the winner');
// });

module.exports = app;


// exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
