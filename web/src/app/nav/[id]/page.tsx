import { api } from '@/lib/api'

export default async function ProductPage() {
  interface product {
    id: string
    imageURL: string
    name: string
    style: string
    price: number
  }

  await api.get('/products/:id').then((response) => {
    console.log(response)
  })

  return <h1>Hello World</h1>
}
