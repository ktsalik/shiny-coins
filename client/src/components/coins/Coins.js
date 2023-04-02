import { useEffect } from 'react';
import coinsSlice from '../../store/coins/coinsSlice';
import store from '../../store/store';
import CoinList from '../coin-list/CoinList';
import './Coins.scss';
import { useSelector } from 'react-redux';
import Button from '../button/Button';

const Coins = (props) => {

  const data = useSelector((state) => state.coins.data);
  const page = useSelector((state) => state.coins.page);
  const coinsApiOnHold = useSelector((state) => state.coins.apiOnHold);

  useEffect(() => {
    if (page === 0) {
      store.dispatch(coinsSlice.actions.fetchData({ page: 1 }));
    }
  }, [page]);

  const loadMore = () => {
    store.dispatch(coinsSlice.actions.fetchData({ page: page + 1 }));
  };

  return (
    <div className="Coins">
      <CoinList data={data}></CoinList>

      {
        coinsApiOnHold === false && <Button
          className="btn-load-more"
          onClick={loadMore}
        >
          Load More
        </Button>
      }
    </div>
  );
};

export default Coins;
