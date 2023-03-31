import './App.scss';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Coins from './components/coins/Coins';
import { useContext, useEffect, useState } from 'react';
import { RequestContext } from './context/requestProvider';

function App() {
  const [apiTestResponse, setApiTestResponse] = useState(null);

  const request = useContext(RequestContext);
  
  useEffect(() => {
    request.get('/').then((response) => {
      setApiTestResponse(response.data);
    });
  }, []);

  return (
    <div className="App">
      Shiny Coins
      {JSON.stringify(apiTestResponse)}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Coins></Coins>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
