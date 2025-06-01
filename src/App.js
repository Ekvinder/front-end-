import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './header/Header';
import Home from './pages/Home';
import ShopDetail from './pages/ShopDetail';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Contactstrt from './pages/Contactstrt';
import Certifieduser from './Certifieduser';
import Singleuser from './Singleuser';
import Singleproducts from './Singleproducts';
import Filtercategory from './filtercategory';
import Blogs from './Blogs';
import Singleblogs from './Singleblogs';
import Singlecomment from './Singlecomment';
import Login from './pages/Auth/Login';
import MyAccount from './Myaccount';
import Success from './Success';
import Cancelation from './Cancelation';
import OrderItemList from './OrderItemList';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="detail" element={<ShopDetail />} />
          <Route path="singlep/:id" element={<Singleproducts />}  />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="product/:slug" element={<Filtercategory />}/>
          <Route path="contact" element={<Contactstrt />} />
          <Route path="single/:id" element={<Singleuser />} />
          <Route path="certified-users" element={<Certifieduser />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="singleb/:id" element={<Singleblogs />} />
          <Route path="singlecom/:id" element={<Singlecomment />} />
          <Route path="login" element={<Login />} />
          <Route path="Myaccount" element={<MyAccount />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancelation />} />
          <Route path="/order-items" element={<OrderItemList />} />
          
          
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;