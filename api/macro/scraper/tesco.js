const axios = require('axios');

const getMacros = nutrition => {
  const get = nameToFind => nutrition.find(({ name }) => name === nameToFind).perComp;
  const parseGrams = s => s.match(/([\d+](\.\d+))?g/)[1];

  const fatKcal = parseGrams(get('Fat')) * 9;
  const proteinKcal = parseGrams(get('Protein')) * 4;
  const carbsKcal = parseGrams(get('Carbohydrate')) * 4;

  const kcal = fatKcal + proteinKcal + carbsKcal;
  const percent = macro => (macro / kcal) * 100;
  const fat = percent(fatKcal);
  const protein = percent(proteinKcal);
  const carbs = percent(carbsKcal);

  return { fat, protein, carbs };
};

module.exports = (url) => {
  return new Promise((resolve, reject) => {
    return axios
      .get(url)
      .then(res => {
        const nutrition = res.data.productDetails.data.product.details.nutritionInfo;
        const product = res.data.productDetails.data.product;
        return resolve({
          name: product.title,
          ...getMacros(nutrition)
        });
      })
      .catch(err => {
        return reject(err);
      })
  });
};
