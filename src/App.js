import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';


import Layout from './components/Layout';
import ProductPage from "./pages/Product/ProductPage";
import ContactPage from './pages/Contact/ContactPage';
import HomePage from './pages/Home/HomePage';
import CreateProduct from './pages/Product/CreateProduct';
import LoginPage from './pages/Login/LoginPage';



function App() {

  return (
    <>
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path='products' element={<ProductPage />} />
              <Route path='create-product' element={<CreateProduct />} />
              <Route path='contact' element={<ContactPage />} />
              <Route path='login' element={<LoginPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
