import { useEffect } from 'react';
import coinsSlice from '../../store/coins/coinsSlice';
import store from '../../store/store';
import CoinList from '../coin-list/CoinList';
import './Coins.scss';
import { useSelector } from 'react-redux';

const Coins = (props) => {

  const data = useSelector((state) => state.coins.data);
  const page = useSelector((state) => state.coins.page);
  const coinsApiOnHold = useSelector((state) => state.coins.apiOnHold);

  useEffect(() => {
    store.dispatch(coinsSlice.actions.fetchData({ page: 1 }));
  }, []);

  const loadMore = () => {
    store.dispatch(coinsSlice.actions.fetchData({ page: page + 1 }));
  };

  return (
    <div className="Coins">
      <CoinList data={data}></CoinList>

      {
        coinsApiOnHold === false && <button
          onClick={loadMore}
        >
          Load More
        </button>
      }
    </div>
  );
};

export default Coins;
