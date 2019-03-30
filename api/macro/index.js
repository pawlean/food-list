const urllib = require('url');
const tescoScrape = require('./scraper/tesco');

module.exports = (req, res) => {
  const query = urllib.parse(req.url, true).query;
  const url = query.url;

  if (!url || !url.includes('https://www.tesco.com/groceries/en-GB/products/')) {
    res.statusCode = 400;
    return res.end();
  }

  tescoScrape(url)
    .then(data => {
      if (data && data.name) return res.end(JSON.stringify(data));
      res.statusCode = 404;
      res.end("Tesco data not found.");
    }).catch(err => {
      res.statusCode = 500;
      res.end("Failed to get data from Tesco.");
    });
};
