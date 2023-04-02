import './ChangePercentage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import ThemeContext from '../../context/themeProvider';

const ChangePercentage = (props) => {

  const { theme } = useContext(ThemeContext);

  return (
    <div className="ChangePercentage">
      {
        props.value > 0
          ? <FontAwesomeIcon icon={faArrowUp} color={theme === 'light' ? '#006400' : '#90EE90' } />
          : <FontAwesomeIcon icon={faArrowDown} color={theme === 'light' ? '#8B0000' : '#e97451' } />
      }

      <span>{Math.abs(props.value)}%</span>
    </div>
  );
};

export default ChangePercentage
