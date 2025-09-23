import { createBrowserRouter } from "react-router-dom";

// Paginas importadas
import App from "./App";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Cadastro from "./Pages/Cadastro";
import Sobre from "./Pages/Sobre";
import PaginaErro from "./Pages/PaginaErro";
import RotasProtegidas from "./Pages/RotasProtegidas";
import ResetarSenha from "./Pages/ResetarSenha";
import InfoCard from "./components/InfoCard";
import MostrarCoisas from "./Pages/MostrarCoisas";
import MostrarCantores from "./Pages/MostrarCantores";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RotasProtegidas />,
    errorElement: <PaginaErro />,
    children: [
     { path: "/", element: <Login /> },
     { path: "login", element: <Login /> },
     {
    path: "resetar",
    element: <ResetarSenha />
    }
    ],
  },  
  
    {
    path: "/",
    element: <RotasProtegidas />,
    errorElement: <PaginaErro />,
    children: [
    
    ],
  },  
  
  {
    path: "/",
    element: <RotasProtegidas />,
    errorElement: <PaginaErro />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/cadastro", element: <Cadastro /> },
      { path: "/sobre", element: <Sobre /> },
      {path:"infocard/:id",
       element:<InfoCard/> 
      },

      {path:"mostrar",
       element:<MostrarCoisas/>
      },

      {
        path:"mostrarcantores", 
        element:<MostrarCantores/>
      }
    ],
  },
]);

export default router;


