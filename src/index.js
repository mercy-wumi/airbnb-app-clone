import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import { store } from "./store";
import { Provider } from 'react-redux';
import Rooms from './pages/Rooms';
import WishLists from './pages/WishLists';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/wishlists' element={<WishLists />} />
        </Routes>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
