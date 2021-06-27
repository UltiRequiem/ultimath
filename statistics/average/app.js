const NUMBERS = document.getElementById('numbers');
const ANSWER = document.getElementById('answer');

const getAverage = (array) => array.reduce((a, b) => a + b, 0) / array.length;

const strToArr = (str) => str.split(',');
const propertyToInt = (array) => array.map(Number);

const printAverage = () => {
  ANSWER.textContent = Math.round(getAverage(propertyToInt(strToArr(NUMBERS.value))));
};
