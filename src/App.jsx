import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Components/Header/Header"
import Home from "./Components/Home"
import Products from "./Components/Products"
import { UserStorage } from "./UserContext"

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/*" element={<Products />} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </>
  )
}

export default App
