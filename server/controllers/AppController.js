const apiDetails = (req, res) => {
  res.json({
    name: 'Shiny Coin API',
    version: '0.0.1',
  });
};

module.exports = {
  apiDetails,
};