/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/
function addImage(id, url) {
  document.getElementById(id).src = url;
}

addImage('d6-roll', 'images/start/d6.png');
addImage('double-d6-roll-1', 'images/start/d6.png');
addImage('double-d6-roll-2', 'images/start/d6.png');
addImage('d12-roll', 'images/start/d12.jpeg');
addImage('d20-roll', 'images/start/d20.jpg');


/*******************
 * EVENT LISTENERS *
 *******************/
const rollD6 = document.getElementById('d6-roll');
rollD6.addEventListener('click', function () {
  roll6 = getRandomNumber(6);
  sixes.push(roll6);
  console.log(sixes);
  rollD6.src = `images/d6/${roll6}.png`;
});

const rollDouble6 = document.getElementById('double-d6-roll-1');
rollDouble6.addEventListener('click', function () {
  roll26 = getRandomNumber(6);
  doubleSixes.push(roll26);
  console.log(doubleSixes);
  rollDouble6.src = `images/d6/${roll26}.png`;
  
});

const rollDouble62 = document.getElementById('double-d6-roll-2');
rollDouble6.addEventListener('click', function () {
  roll262 = getRandomNumber(6);
  doubleSixes.push(roll262);
  console.log(doubleSixes);
  rollDouble62.src = `images/d6/${roll262}.png`;
  
});

const twelve1 = document.getElementById('d12-roll');
twelve1.addEventListener('click', function () {
  roll12 = getRandomNumber(12);
  twelves.push(roll12);
  console.log(twelves);
  twelve1.src = `images/numbers/${roll12}.png`;

});

const twenty1 = document.getElementById('d20-roll');
twenty1.addEventListener('click', function () {
  roll20 = getRandomNumber(20);
  twenties.push(roll20);
  console.log(twenties);
  twenty1.src = `images/numbers/${roll20}.png`;

});






/******************
 * RESET FUNCTION *
 ******************/
// const clearAway = document.getElementById("reset-button");
// clearAway.addEventListener('click', function () {
//     document.getElementById('#app').reset();
// });





/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/



/****************
 * MATH SECTION *
 ****************/
