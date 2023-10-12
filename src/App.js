import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header/Header';
import Main from './components/Main';
import Pourquoi from './components/pourquoi/Pourquoi';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pourquoi-magazine-courtoisie" element={<Pourquoi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
