import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import ProductPage from "./pages/Product/ProductPage";
import ContactPage from './pages/Contact/ContactPage';
import HomePage from './pages/Home/HomePage';




function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='products' element={<ProductPage />} />
            <Route path='contact' element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
