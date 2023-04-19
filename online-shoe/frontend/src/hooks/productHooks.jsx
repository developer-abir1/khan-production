import { useQuery } from 'react-query'

const getProductsQuery = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () =>
      await fetch('http://localhost:5173/products.json').then((res) =>
        res.json()
      ),
  })
}

export { getProductsQuery }
