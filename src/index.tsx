import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContactForm from './components/landing/ContactForm';

AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <ContactForm />,
  },
]);

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
