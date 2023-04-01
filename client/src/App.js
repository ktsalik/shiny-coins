import './App.scss';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Coins from './components/coins/Coins';
import { useEffect } from 'react';
import Header from './components/header/Header';
import store from './store/store';
import coinsSlice from './store/coins/coinsSlice';

function App() {

  useEffect(() => {
    store.dispatch(coinsSlice.actions.fetchData({ page: 1 }));
  }, []);

  return (
    <div className="App">
      <Header></Header>
      
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/coins" replace={true} />}></Route>
            <Route path="/coins" element={<Coins />}></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
