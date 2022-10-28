import React from 'react';
import { Link } from 'react-router-dom';
import Usuario from './Pages/Usuario';
import Rotas from './routes';


function App() {
  return (
  <div>
  <Rotas /> 
  <h1>TESTE</h1>
  <Link to="/Usuario">Usuario</Link>
  </div>
  );
}

export default App;
