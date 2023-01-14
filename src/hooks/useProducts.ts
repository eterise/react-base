import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { IProducts } from "../models"

export function useProducts() {
    const [products, setProducts] = useState<IProducts[]>([])

    const [loading, onLoading] = useState(false)
    const [error, setError] = useState("")

    function addProduct(product: IProducts) {
      setProducts(prev => [...prev, product])
    }
  
    async function fetchProducts() {
      try {
        setError("")
        onLoading(true)
        const response = await axios.get<IProducts[]>("https://fakestoreapi.com/products/?limit=5")
    
        setProducts(response.data)
        onLoading(false)
      } catch(e: unknown) {
        const error = e as AxiosError
        onLoading(false)
        setError(error.message)
  
      }
    }
  
    useEffect(() => {
      fetchProducts()
    }, [])

    return { error, loading, products, addProduct}
}