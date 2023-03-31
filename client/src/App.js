import './App.scss';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Coins from './components/coins/Coins';

function App() {
  return (
    <div className="App">
      Shiny Coins
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Coins></Coins>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
