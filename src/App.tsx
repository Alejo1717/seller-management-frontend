import React from 'react';
import './styles/index.less';
import LayoutAct from './components/Layout';
import RoutesAct from './routes';
import { MemoryRouter } from "react-router-dom";
import { SERVER_URL } from './config/env.config';

function App() {
  console.log('SERVER_URL', SERVER_URL);
  
  return (
    <div className="App">
      <MemoryRouter>
        <LayoutAct>
          <RoutesAct />
        </LayoutAct>
      </MemoryRouter>
    </div>
  );
}

export default App;

