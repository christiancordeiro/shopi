import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header/Header"
import Home from "./Components/Home"
import Products from "./Components/Products/Products"
import ProductID from "./Components/Products/ProductID"
import Orders from "./Components/Orders/Orders"
import { UserStorage } from "./UserContext"
import About from "./Components/About"

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/*" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<ProductID />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </>
  )
}

export default App
