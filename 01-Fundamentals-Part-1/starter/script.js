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
// const country = "France";
// const continent = "Europe";
// let population = 70;
// // console.log({ country, continent, population })

// ////////////////////////////////////
// // practice assignment: Data types
// const isIsland = false;
// let language;
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
// population += 1;
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
// let markMass = 78;
// let markHeight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95;

// test data 2
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log({ markBMI, johnBMI, markHigherBMI })
