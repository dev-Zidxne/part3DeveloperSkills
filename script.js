// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//PROBLEM
// We work for a company building a smart home thermometer. our most task is this: "Givern an array temperatures of one day, calcutlate the temperature amplitude. Keep in miond that sometimes there might be sensor error."

const temperatures = [3, -2, -6, 1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is themo amplitude? Answer: differnce between highest and lowest temp
// - How to compute max and min temperatures?
// - Whats a sensor error? And waht to do?

// 2) Breaking up into sub-problemss
// - How to ignore errors?
// - Find max value in temp array
// - SUbtract min from max (amplitude) and return it
/*

 
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }

  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);

console.log(amplitude);

// PROBLEM 2:

// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implememt functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problemss
// - Merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const array1 = ["a", "b", "c"];
  const array2 = ["d", "e", "f"];
  const array3 = array1.concat(array2);

  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }

  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);

console.log(amplitudeNew);


const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",

    // C) FIX
    // value: Number(prompt("Degrees celcius:")),
    value: 10,
  };

  // B) FIND
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());

//Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const array1 = ["a", "b", "c"];
  const array2 = ["d", "e", "f"];
  const array3 = array1.concat(array2);

  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    debugger;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

console.log(amplitudeBug);
*/

const printForcast = function (oop) {
  const arr = [17, 21, 23];
  for (let i = 0; i < arr; i++) for (let y = 0; y < arr.length; y++) return arr;
  console.log(`... ${y}C in ${i} days, ...`);
};

console.log(printForcast());
