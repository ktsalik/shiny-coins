import './CoinItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faDollar } from '@fortawesome/free-solid-svg-icons';
import ChangePercentage from '../change-percentage/ChangePercentage';

const CoinItem = (props) => {

  return (
    <div className="CoinItem">
      <div className="header">
        <div className="naming-info">
          <div className="symbol-wrapper">
            <span className="symbol">{props.data.symbol}</span>
          </div>
          
          <span className="name">{props.data.name}</span>
        </div>

        <ChangePercentage value={props.data.priceChangePercentage}></ChangePercentage>
      </div>

      <div className="price">
        <div className="current">
          <span className="label">Current</span>
          <div className="value">
            <FontAwesomeIcon icon={faDollar} size="xs"/>
            <span>{props.data.price.current.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
        </div>

        <div className="highest">
          <span className="label">Highest</span>
          <div className="value">
            <FontAwesomeIcon icon={faDollar} size="xs"/>
            <span>{props.data.price.highest.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
        </div>
        
        <div className="lower">
          <span className="label">Lower</span>
          <div className="value">
            <FontAwesomeIcon icon={faDollar} size="xs"/>
            <span>{props.data.price.lower.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinItem;
