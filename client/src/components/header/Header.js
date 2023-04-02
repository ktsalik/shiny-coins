import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePause, faCog, faCoins } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Fragment, useContext } from 'react';
import ThemeContext from '../../context/themeProvider';

const Header = (props) => {

  const { theme } = useContext(ThemeContext);
  const coinsApiOnHold = useSelector((state) => state.coins.apiOnHold);

  return (
    <header className={`${theme} ${props.className}`}>
      <div className="content">
        <div className="logo">
          <FontAwesomeIcon icon={faCoins} size="2x" />
          <span>Shiny Coins</span>
        </div>

        <div className="d-flex">
          <div className="api-status">
            {
              coinsApiOnHold && <Fragment>
                <FontAwesomeIcon icon={faCirclePause}  fa="lg" />
                <span>Coins API on hold</span>
              </Fragment>
            }
          </div>

          <FontAwesomeIcon icon={faCog} className="btn-settings ml-3" onClick={() => props.openSettings()} />
        </div>
      </div>
    </header>
  );
}

export default Header;
