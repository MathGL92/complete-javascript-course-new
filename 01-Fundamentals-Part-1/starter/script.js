// // Linking a JavaScript File
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// ////////////////////////////////////
// // Values and Variables
// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// // Variable name conventions
// let jonas_matilda = "JM";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1415;

// // prefer these variables names as they are more descriptive
// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

////////////////////////////////////
// // practice assignment: Values and variables
const country = "France";
const continent = "Europe";
let population = 70;
// // console.log({ country, continent, population })

// ////////////////////////////////////
// // practice assignment: Data types
const isIsland = false;
let language;
// // console.log(typeof isIsland);
// // console.log(typeof population);
// // console.log(typeof country);
// // console.log(typeof language);

// ////////////////////////////////////
// // practice assignment: let, const and var
// language = "french";

// ////////////////////////////////////
// // practice assignment: basic operators
// console.log(population / 2);
population += 1;
// console.log(population);
// let finlandPopulation = 6;
// console.log(population > finlandPopulation);
// let averagePopulation = 33;
// console.log(population < averagePopulation);
// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(description);

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// // Test data 1
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

// test data 2
// markMass = 95;
// markHeight = 1.88;
// johnMass = 85;
// johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log({ markBMI, johnBMI, markHigherBMI })

////////////////////////////////////
// practice assignment: string and template litteral
// const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
// console.log(description);

///////////////////////////////////
// practice assignment: Taking Decisions: if / else Statements
// population = 14;

// if (population > 33) {
//   console.log(`${country}'s population is above the average`);
// } else {
//   console.log(`${country}'s population is ${33 - population} below the average`)
// }


////////////////////////////////////
// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
// if (markBMI > johnBMI) {
//   console.log("Mark's BMI is higher than John's!");
// } else {
//   console.log("John's BMI is higher than Mark's!");
// }

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// }

////////////////////////////////////
// practice assignment: Type Conversion and Coercion
// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');
// console.log('23' > '18');

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);

////////////////////////////////////
// Equality Operators: == vs. ===
// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict)');

// if (age == 18) console.log('You just became an adult :D (loose)');

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) { // 22 === 23 -> FALSE
//   console.log('Cool! 23 is an amzaing number!')
// } else if (favourite === 7) {
//   console.log('7 is also a cool number')
// } else if (favourite === 9) {
//   console.log('9 is also a cool number')
// } else {
//   console.log('Number is not 23 or 7 or 9')
// }

// if (favourite !== 23) console.log('Why not 23?');

// const numNeighbours = prompt('How many neighbour countries does your country have?');
// if (numNeighbours == 1) {
//   console.log('Only 1 border!');
// } else if ( numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }

////////////////////////////////////
// Logical Operators
// if (language === "English" && population < 50 && !isIsland) {
//   console.log(`You should live in ${country} :)`);
// } else {
//   console.log(`${country} does not meet your criteria :(`);
// }

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

// const dolphinsScore = (96 + 108 + 89) / 3;
// const koalasScore = (109 + 95 + 123) / 3;
// const minScore = 100;

// if (dolphinsScore > koalasScore && dolphinsScore >= minScore) {
//   console.log("Dolphins team won!");
// } else if (dolphinsScore < koalasScore && koalasScore >= minScore) {
//   console.log("Koalas team won!");
// } else if (dolphinsScore === koalasScore && koalasScore >= minScore) {
//   console.log("that is a draw...");
// } else {
//   console.log("No one wins...");
// }

// // The switch Statement
// const day = 'friday';

// switch (day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

// if (day === 'monday') {
//   console.log('Plan course structure');
//   console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//   console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//   console.log('Write code examples');
// } else if (day === 'friday') {
//   console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log('Enjoy the weekend :D');
// } else {
//   console.log('Not a valid day!');
// }

// switch (language) {
//   case 'chinese' || 'mandarin':
//     console.log('MOST number of native speaker');
//     break;
//   case 'spanish':
//     console.log('2nd place');
//     break;
//   case 'english':
//     console.log('Third place');
//     break;
//   case 'hindi':
//     console.log('number 4');
//     break;
//   case 'arabic':
//     console.log('number 5');
//     break;
//   default:
//     console.log('Great language as well');
// }

// ////////////////////////////////////
// // Statements and Expressions
// 3 + 4
// 1991
// true && false && !false

// if (23 > 10) {
//   const str = '23 is bigger';
// }

// const me = 'Jonas';
// console.log(`I'm ${2037 - 1991} years old ${me}`);

// ////////////////////////////////////
// // The Conditional (Ternary) Operator
// const age = 23;
// // age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = 'wine 🍷';
// } else {
//   drink2 = 'water 💧';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
// */

// console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average.`);


////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/
const bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
