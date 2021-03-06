'use strict';

/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`); */

//const interface = 'Audio';
//const private = 534;

// Functions
/* function logger() {
    console.log(`My name is José`);
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number(23);
console.log(num); */


// Function declaration
/* function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
 */


// Arrow function
/* const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Jose'));
console.log(yearsUntilRetirement(1980, 'Bob')); */


// Functions calling other functions
/* function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3)); */

// Reviewing functions
/* const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
    } else {
        return -1;
    }
    //return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Jose'));
console.log(yearsUntilRetirement(1950, 'Mike')); */


// Coding Challenge #1
/* const calcAverage = (a, b, c) => (a + b + c) / 3;
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
    } else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    } else {
        return `No team wins`;
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas)); */

// Arrays
/* const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1994, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
//friends = ['Bob', 'Alice'];

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'Teacher', friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages); */


// Methods of arrays
/* const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('Jhon');
console.log(friends);

// Remove elements
friends.pop(); // Last
const poped = friends.pop();
console.log(poped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
} */

// Coding challenge #2
/* const bills = [125, 555, 44];
let totalBills = [];

function calcTip(bills) {
    bills.forEach(bill => {
        if (bill >= 50 && bill <= 300) {
            totalBills.push(bill + (bill * 0.15));
        } else {
            totalBills.push(bill + (bill * 0.20));
        }
    });
    return totalBills;
}

const newBills = calcTip(bills);
console.log(bills, newBills); */

// Objects
/*
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);
//console.log(jonas.('first' + nameKey));

const interestedIn = prompt('what do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschedtmann';
console.log(jonas); */

// Challenge
// Jonas has 3 friends, and his best friend is called 'Michael'
/* 
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`); */


// Objects Methods
/* const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriveLicense: true, */
    /* calcAge: function (birthYear) {
        return 2037 - birthYear;
    } */
    //calcAge: function () {
    //console.log(this);
    //    return 2037 - this.birthYear;
    //}
/*     calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${jonas.firstName} is a ${this.calcAge()}-years old ${jonas.job}, and he has ${this.hasDriveLicense ? 'a' : 'no'} driver´s license.`
    }
};

console.log(jonas.calcAge());
console.log(jonas.age); */
//console.log(jonas['calcAge'](1991));

//Challenge
// "Jonas is a 46-year old techaer, and he has a/no driver's license." 

/* console.log(jonas.getSummary()); */


// Coding Challenge #3
/* const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = (this.mass / (this.height ** 2));
        return this.bmi;
    }
}

const jhon = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = (this.mass / (this.height ** 2));
        return this.bmi;
    }
}

mark.calcBMI();
jhon.calcBMI();

mark.bmi > jhon.bmi
    ? console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${jhon.fullName}'s (${jhon.bmi})!`)
    : console.log(`${jhon.fullName}'s BMI (${jhon.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`)
 */

// Iteration - The for loop
/* for (let rep = 1; rep <= 20; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
} */

// Looping Arrays
/* const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'Teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    // Reading from jonas array
    console.log(jonasArray[i], typeof jonasArray[i]);

    // Filling types array
    //types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// Continue and break
console.log(`--- ONLY STRINGS ---`);
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log(`--- BREAK WITH NUMBER ---`);
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i], typeof jonasArray[i]);
} */

// Looping backward and loops in loops
/* const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'Teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
    }
} */


// While Loop
/* for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
 */

/* let rep = 1;
while(rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log(`Loop is about to end...`);
} */

// CODING CHALLENGE

const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

function calcTip(bills) {
    bills.forEach(bill => {
        let tip = 0;
        if (bill >= 50 && bill <= 300) {
            tip = bill * 0.15;
            totals.push(bill + (bill * 0.15));
        } else {
            tip = bill * 0.20;
            totals.push(bill + (bill * 0.20));
        }
        tips.push(tip);
    });
    return totals;
}

console.log(calcTip(bills));
console.log(`BILLS: `, bills);
console.log(`TIPS: `, tips);


function calcAverage(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total = total + arr[i];
    }
    return total/arr.length;
}

console.log(calcAverage(totals));