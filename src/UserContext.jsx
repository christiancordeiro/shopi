import { createContext, useEffect, useState } from "react"

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [dados, setDados] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const [response1, response2, response3, response4] = await Promise.all([
          fetch("https://api.escuelajs.co/api/v1/categories/1"),
          fetch("https://api.escuelajs.co/api/v1/categories/2"),
          fetch("https://api.escuelajs.co/api/v1/categories/5"),
          fetch("https://api.escuelajs.co/api/v1/categories/4"),
        ])

        const [json1, json2, json3, json4] = await Promise.all([
          response1.json(),
          response2.json(),
          response3.json(),
          response4.json(),
        ])

        const categorias = [
          { id: json1.id, name: json1.name, image: json1.image },
          { id: json2.id, name: json2.name, image: json2.image },
          { id: json3.id, name: json3.name, image: json3.image },
          { id: json4.id, name: json4.name, image: json4.image },
        ]

        setDados(categorias)
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
          "https://api.escuelajs.co/api/v1/products?offset=0&limit=15"
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
    <UserContext.Provider value={{ dados, products }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
