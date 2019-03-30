const zeroToN = n => Math.round(Math.random() * (n || 100));
const foods = require('./foods');

const generateMacros = () => {
  const carbs = zeroToN(20);
  const protein = zeroToN(40);
  const fat = 100 - carbs - protein;

  var name = foods[Math.floor(Math.random()*foods.length)];

  return { fat, protein, carbs, name };
};

module.exports = () => {
  const arr = [];
  for (let i = 0; i < 11; i++) arr.push(generateMacros());
  return arr;
};
