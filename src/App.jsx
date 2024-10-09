import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Order from "./Pages/Order/Order"
import Cart from "./Pages/Cart/Cart"
import NoPage from "./Pages/NoPage/NoPage"
import MyState from "./Context/Data/myState"
import Login from "./Pages/Registration/Login"
import Signup from "./Pages/Registration/Signup"
import ProductInfo from "./Pages/ProductInfo/ProductInfo"
import Dashboard from "./Pages/Admin/Dashboard/DashBoard"
import AddProduct from "./Pages/Admin/ProductPages/AddProduct"
import UpdateProduct from "./Pages/Admin/ProductPages/UpdateProduct"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from "./Pages/AllProducts/AllProducts"

function App() {

  return (
    <>
    <MyState>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/allproducts" element={<Allproducts />} />
      <Route path="/order" element={
         //   <ProtectedRoutes>
              <Order />
          //  </ProtectedRoutes>
          } />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/productinfo/:id" element={<ProductInfo/>} />
        <Route path="/dashboard" element={
            // <ProtectedRoutesForAdmin><Dashboard /></ProtectedRoutesForAdmin>
            <Dashboard/>
          } />
        <Route path="/addproduct" element={
            <ProtectedRoutesForAdmin><AddProduct /></ProtectedRoutesForAdmin>} />
          <Route path="/updateproduct" element={
            <ProtectedRoutesForAdmin><UpdateProduct /></ProtectedRoutesForAdmin>} />
        <Route path="/*" element={<NoPage/>} />
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
    </MyState>
    </>
  )
}

export default App


// eslint-disable-next-line react/prop-types
export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('currentUser')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

// eslint-disable-next-line react/prop-types
export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'sarthakn333@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}
