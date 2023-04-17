'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {

  let max = temps[0];
  let min = temps[0];
  for(let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if(typeof curTemp !== 'number') continue;

    if(temps[i] > max) max = temps[i];
    if(temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitude(temperatures);
console.log(amplitudeNew); 