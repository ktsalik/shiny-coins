import './SettingsWindow.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import ThemeContext from '../../context/themeProvider';
import Button from '../button/Button';

const SettingsWindow = (props) => {
  
  const { theme, setTheme } = useContext(ThemeContext);

  const changeTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <div className={`SettingsWindow ${theme} ${props.open ? 'open' : ''}`}>
      <div className="theme-tool">
        <FontAwesomeIcon icon={faTimes} size="2x" className="btn-times" onClick={() => props.close()} />

        <div className="theme-options">
          <span>Choose Theme</span>
          <button className="btn-light-theme" onClick={() => changeTheme('light')}>Light</button>
          <button className="btn-dark-theme" onClick={() => changeTheme('dark')}>Dark</button>
          <button className="btn-dark-blue-theme" onClick={() => changeTheme('dark-blue')}>Dark Blue</button>
        </div>

        <Button className="btn-close" onClick={() => props.close()}>Close</Button>
      </div>
    </div>
  );
}

export default SettingsWindow;
