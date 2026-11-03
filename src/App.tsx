import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import ProductDetail from "./pages/ProductDetail"

export function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App
