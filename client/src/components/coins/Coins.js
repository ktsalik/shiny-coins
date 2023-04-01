import coinsSlice from '../../store/coins/coinsSlice';
import store from '../../store/store';
import './Coins.scss';
import { useSelector } from 'react-redux';

const Coins = (props) => {

  const data = useSelector((state) => state.coins.data);
  const page = useSelector((state) => state.coins.page);
  const apiOnHold = useSelector((state) => state.coins.apiOnHold);

  const loadMore = () => {
    store.dispatch(coinsSlice.actions.fetchData({ page: page + 1 }));
  };

  return (
    <div className="Coins">
      <div className="list">
        {
          data.map((coin) => {
            return (
              <div>{coin.name}</div>
            );
          })
        }
      </div>

      {
        apiOnHold === false && <button
          onClick={loadMore}
        >
          Load More
        </button>
      }
    </div>
  );
};

export default Coins;
