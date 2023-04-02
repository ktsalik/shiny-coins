import CoinItem from '../coin-item/CoinItem';
import './CoinList.scss';

const CoinList = (props) => {

  return (
    <div className="CoinList">
      {props.data.map((coin, i) => <CoinItem key={i} data={coin}></CoinItem>)}
    </div>
  );
};

export default CoinList;
