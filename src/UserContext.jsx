import { createContext, useEffect, useState } from "react"

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [dados, setDados] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch(
          "https://json-server-api-store.vercel.app/categories"
        )
        const json = await response.json()
        setDados(json)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCategorias()
  }, [])

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await fetch(
          "https://json-server-api-store.vercel.app/products"
        )
        const json = await response.json()
        setProducts(json)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProduto()
  }, [])

  return (
    <UserContext.Provider
      value={{
        dados,
        products,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
