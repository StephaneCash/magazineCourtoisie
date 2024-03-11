import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from './components/auth/SignIn';
import MagazineById from './components/magazine/magazineById/MagazineById';
import MainCart from './components/panier/MainCart';
import Search from './components/search/Search';
import SignUp from './components/auth/SignUp';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCartInLOcalStorage } from './features/Cart';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    let cart = localStorage.getItem('cart');
    const cartParse = cart !== "undefined" ? JSON.parse(localStorage.getItem('cart')) : "";

    if (cartParse) {
      dispatch(getCartInLOcalStorage(cartParse))
    } else {
      const arr = [];
      localStorage.setItem('cart', JSON.stringify(arr));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/panier/detail" element={<MainCart />} />
        <Route path="/connexion" element={<SignIn />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/magazine/:name" element={<MagazineById />} />
        <Route path="/search/:name" element={<Search />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
