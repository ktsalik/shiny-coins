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
        price: {
          current: record.current_price,
          highest: record.high_24h,
          lower: record.low_24h,
        },
        priceChangePercentage: record.price_change_percentage_24h,
      };
    });

    res.json(coinsData);
  } else {
    res.json(data);
  }
};

const getCoin = async (req, res) => {
  const coinId = req.params.coinId;

  const remoteApiResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=en&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`);
  const data = await remoteApiResponse.json();

  if (data.id) {
    const coinData = {
      name: data.name,
      description: data.description.en,
      price: {
        current: data.market_data.current_price.usd,
        highest: data.market_data.high_24h.usd,
        lower: data.market_data.low_24h.usd,
      },
      priceChange: [
        data.market_data.price_change_percentage_24h_in_currency.usd,
        data.market_data.price_change_percentage_7d_in_currency.usd,
        data.market_data.price_change_percentage_14d_in_currency.usd,
        data.market_data.price_change_percentage_30d_in_currency.usd,
        data.market_data.price_change_percentage_60d_in_currency.usd,
        data.market_data.price_change_percentage_200d_in_currency.usd,
        data.market_data.price_change_percentage_1y_in_currency.usd,
      ],
    };

    res.json(coinData);
  } else {
    res.json(data);
  }
};

module.exports = {
  getCoins,
  getCoin,
};
