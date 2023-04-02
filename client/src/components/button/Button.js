import { useContext } from 'react';
import './Button.scss';
import ThemeContext from '../../context/themeProvider';

const Button = (props) => {

  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={`Button ${theme} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
