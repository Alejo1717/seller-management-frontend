import React from 'react';
import './styles/index.less';
import LayoutAct from './components/Layout';
import RoutesAct from './routes';
import { MemoryRouter } from "react-router-dom";

function App() {
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

