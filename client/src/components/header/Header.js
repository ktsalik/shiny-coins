import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePause, faCoins } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';

const Header = (props) => {

  const coinsApiOnHold = useSelector((state) => state.coins.apiOnHold);

  return (
    <header>
      <div className="content">
        <div className="logo">
          <FontAwesomeIcon icon={faCoins} size="2x" />
          <span>Shiny Coins</span>
        </div>

        <div className="api-status">
          {
            coinsApiOnHold && <Fragment>
              <FontAwesomeIcon icon={faCirclePause}  fa="lg" />
              <span>Coins API on hold</span>
            </Fragment>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
