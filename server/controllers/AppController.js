const apiDetails = (req, res) => {
  res.json({
    name: 'Shiny Coins API',
    version: '0.0.1',
  });
};

module.exports = {
  apiDetails,
};