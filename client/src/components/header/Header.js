import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {

  return (
    <header>
      <div className="content">
        <div className="logo">
          <FontAwesomeIcon icon={faCoins} size="2x" />
          <span>Shiny Coins</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
