import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Cadastro from './componentes/cadastro';
import Consulta from './componentes/consulta';
import Edicao from './componentes/editar';

const rotas = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      { path: '/imovel/cadastrar', element: <Cadastro />},
      { path: '/imovel/consultar', element: <Consulta />},
      { path: '/imovel/editar/:idImovel', element: <Edicao />}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <RouterProvider router={rotas} />
</React.StrictMode>
);
