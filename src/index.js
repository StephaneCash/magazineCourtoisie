import React from 'react'; import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import categorieMagazineSlice, { getAllcategoriesMagazine } from './features/Categories';
import CartSlice from './features/Cart';
import { Provider } from 'react-redux';
import magazineSlice, { getAllMagazines } from './features/Magazines';
import "react-multi-carousel/lib/styles.css";
import AppContext from './AppContext';

const store = configureStore({
  reducer: combineReducers({
    categories: categorieMagazineSlice.reducer,
    magazines: magazineSlice.reducer,
    cart: CartSlice.reducer
  })
});

store.dispatch(getAllcategoriesMagazine());
store.dispatch(getAllMagazines());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContext>
        <App />
      </AppContext>
    </Provider>
  </React.StrictMode>
);

