import './App.scss';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Coins from './components/coins/Coins';
import Header from './components/header/Header';
import Coin from './components/coin/Coin';
import SettingsWindow from './components/settings-window/SettingsWindow';
import { useState } from 'react';
import ThemeContext from './context/themeProvider';

function App() {
  const [theme, setTheme] = useState(localStorage.theme || 'light');
  const [settingsWindowOpen, setSettingsWindowOpen] = useState(false);

  const onSettingsOpen = () => {
    setSettingsWindowOpen(true);
  };

  const onSettingsClose = () => {
    setSettingsWindowOpen(false);
  };

  return (
    <div className={`App ${theme} ${settingsWindowOpen ? 'disable-scroll' : ''}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Header
          className={`${settingsWindowOpen ? 'blurred' : ''}`}
          openSettings={onSettingsOpen}
        ></Header>
        
        <main className={`${settingsWindowOpen ? 'blurred' : ''}`}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/coins" replace={true} />}></Route>
              <Route path="/coins">
                <Route index element={<Coins />}></Route>
                <Route path=":coinId" element={<Coin />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </main>

        <SettingsWindow
          open={settingsWindowOpen}
          close={onSettingsClose}
        ></SettingsWindow>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
