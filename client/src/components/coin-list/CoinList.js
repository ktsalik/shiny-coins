import { Link } from 'react-router-dom';
import CoinItem from '../coin-item/CoinItem';
import './CoinList.scss';

const CoinList = (props) => {

  return (
    <div className="CoinList">
      {props.data.map((coin, i) => <Link key={i} to={`/coins/${coin.id}`}><CoinItem data={coin}></CoinItem></Link>)}
    </div>
  );
};

export default CoinList;
