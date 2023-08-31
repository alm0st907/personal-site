import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './routes/root'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./routes/about";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/construction",
        element: <Root/>,
    },
    {
        path: "/about",
        element: <About/>,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
