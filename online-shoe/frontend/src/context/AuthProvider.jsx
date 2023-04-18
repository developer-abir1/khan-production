import React, { createContext, useEffect, useState } from 'react'
import { getDb } from '../utils/localStore'
import { getProductsQuery } from '../hooks/productHooks'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const { data: products = [] } = getProductsQuery()

  useEffect(() => {
    const exists = getDb()
    if (exists) {
      const savedCart = JSON.parse(exists)
      const storedCart = []
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.slug === key)
        if (addedProduct) {
          const quantity = savedCart[key]
          addedProduct.quantity = quantity
          storedCart.push(addedProduct)
        }
      }
      setCart(storedCart)
    }
  }, [products && products.length])

  const data = {
    setCart,
    cart,
  }
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export default AuthProvider
