import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.min.css'; 
import StartGame from './page/StartGame';
import Choices from './page/Choices';
import Play from './page/Play';
import ErrorDisplay from './page/ErrorDisplay';
import DashboardPanel from './Auth/DashboardPanel'
import LoginRegister from './Auth/LoginRegister'
import Redirect from './page/Redirect';
import AccessProvider from './Context/AccessProvider.jsx';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'


// Importez les fonctions dont vous avez besoin à partir des SDK dont vous avez besoin
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// À FAIRE : Ajoutez des SDK pour les produits Firebase que vous souhaitez utiliser
// https://firebase.google.com/docs/web/setup#available-libraries

// La configuration Firebase de votre application Web
// Pour Firebase JS SDK v7.20.0 et versions ultérieures, MeasurementId est facultatif

// const firebaseConfig = {
//   apiKey: String(import.meta.env.REACT_API_KEY),
//   authDomain: String(import.meta.env.REACT_AUTH_DOMAIN),
//   projectId: String(import.meta.env.REACT_PROJECT_ID),
//   storageBucket: String(import.meta.env.REACT_STORAGE_BUCKET),
//   messagingSenderId: String(import.meta.env.REACT_MESSAGING_SENDER_ID),
//   appId: String(import.meta.env.REACT_APP_ID),
//   measurementId: String(import.meta.env.REACT_MEASUREMENT_ID),
// }import DisconnectContextProvider from './component/DisconnectContextProvider';



// Initialiser Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/Choices',
    element: <Choices/>,
  },
  {
    path: '/StartGame/:id/:ib',
    element: <StartGame/>,
  },
  {
    path:'/Play/:id/:ib',
    element: <Play/>
  },
  {
    path:'/redirect',
    element: <Redirect/>
  },
  {
    path:'/DashboardPanel',
    element: <DashboardPanel/>
  },
  {
    path:'/LoginRegister',
    element: <LoginRegister/>
  },
  {
    path:'/error',
    element: <ErrorDisplay/>
  },
])

ReactDOM.createRoot(document.getElementById('clock-app-gam')).render(
  <AccessProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AccessProvider>
  ,
)
