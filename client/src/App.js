import './App.scss';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Coins from './components/coins/Coins';
import Header from './components/header/Header';

function App() {


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
