import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//const rotas = createBrowserRouter([
//  {
//    path:'/',
//    element:<App />,
//    children:[
      //{ path: '/contato/cadastrar', element: <Cadastro />},
     // { path: '/contato/consultar', element: <Consulta />},
      //{ path: '/contato/editar/:idContato', element: <Edicao />}
//    ]
//  }
//])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
