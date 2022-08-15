import { Route, Routes, Navigate } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Products from './pages/CostumerProducts';
import Login from './pages/Login';
import Register from './pages/Register';
import Orders from './pages/CustomerOrders';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" replace /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/customer/orders" element={ <Orders /> } />
    </Routes>
  );
}

export default AppRoutes;
