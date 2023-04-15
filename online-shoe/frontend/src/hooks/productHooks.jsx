import { useQuery } from 'react-query'

const getProductsQuery = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => await fetch('products.json').then((res) => res.json()),
  })
}
const getExtaCollactionQuery = () => {
  return useQuery({
    queryKey: ['extacollaction'],
    queryFn: async () =>
      await fetch('extacollaction.json').then((res) => res.json()),
  })
}
const getServiceProvide = () => {
  return useQuery({
    queryKey: ['serviceProvide'],
    queryFn: async () =>
      await fetch('serviceProvide.json').then((res) => res.json()),
  })
}

export { getProductsQuery, getExtaCollactionQuery, getServiceProvide }
