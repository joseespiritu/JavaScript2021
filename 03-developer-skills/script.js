// Prefer to use strict mode
'use strict';

/* const x = '23';
if (x === 23) console.log(23);

const calcAge = birtYear => 2037 - birtYear;
console.log(calcAge(1985)); */

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1) Understanding
// - What is te temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperature?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Substract min from max (amplitude) and return it

/* const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

//calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude); */

// PROBLEM 2:
// Function should now receive 2 arrays of temps

//1) Understanding
// - With 2 arrays, should we impmlement functionality twice? No! just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

/* const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

//calcTempAmplitudeNew([3, 7, 4, 1, 8]);
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew); */

/* const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    value: Number(prompt('Degrees celsius:')),
  };

  // B) FIND
  console.table(measurement);

  /* console.log(measurement.value); */
/* console.warn(measurement.value);
  console.error(measurement.value); */

/*   const kelvin = measurement.value + 273;
  return kelvin;
}; */

// A) IDENTIFY
//console.log(measureKelvin());

// Using a debugger
/* const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
}; */

//calcTempAmplitudeBug([3, 7, 4, 1, 8]);
/* const amplitudeNew = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);

// A) IDENTIFY
console.log(amplitudeNew); */

// CODING CHALLENGE
/* 1) Understanding the problem */
// - Array transformed to string, separated by...
// - What is the X days? Answer: index + 1

/* 2) Breaking up into sub-problems */
// - Transform array into string
// - Transform each elem,ent to string with °C
// - Strings needs to contain day (index + 1)
// - Add --- between elemnts and start and end of string4

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -15, 0, 4];
console.log(
  `... ${testData1[0]}°C ... ${testData1[1]}°C ... ${testData1[2]} ... `
);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};

printForecast(testData1);
