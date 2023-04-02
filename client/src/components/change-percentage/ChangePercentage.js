import './ChangePercentage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ChangePercentage = (props) => {

  return (
    <div className="ChangePercentage">
      {
        props.value > 0
          ? <FontAwesomeIcon icon={faArrowUp} color="#006400" />
          : <FontAwesomeIcon icon={faArrowDown} color="#8B0000" />
      }

      <span>{Math.abs(props.value)}%</span>
    </div>
  );
};

export default ChangePercentage
