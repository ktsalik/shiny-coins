const getCoins = async (req, res) => {
  let page = 1;

  const pageParam = parseInt(req.query.page);
  if (typeof pageParam === 'number' && pageParam > 0) {
    page = pageParam;
  }
  
  const remoteApiResponse = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&locale=en`);
  const data = await remoteApiResponse.json();

  if (data.constructor === Array) {
    const coinsData = data.map((record) => {
      return {
        id: record.id,
        name: record.name,
        symbol: record.symbol,
        currentPrice: record.current_price,
        price: {
          highest: record.high_24h,
          lower: record.low_24h,
          changePercentage: record.price_change_percentage_24h,
        },
      };
    });

    res.json(coinsData);
  } else {
    res.json(data);
  }
};

module.exports = {
  getCoins,
};
