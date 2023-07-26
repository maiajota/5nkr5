import { api } from '@/lib/api'
import { SearchNavBar } from '@/components/SearchNavBar'

export default async function NavPage() {
  interface product {
    id: string
    imageURL: string
    name: string
    style: string
    price: number
  }

  const products: product[] = []

  await api.get('/products').then((response) => {
    response.data.map((item: product) => {
      return products.push(item)
    })
  })

  return (
    <div>
      <SearchNavBar />
      <div className="grid-nav screen-space grid gap-4">
        {products.map((product) => {
          return (
            <a key="" className="max-w-[300px] cursor-pointer" href="">
              <img
                src={`images/products/${product.imageURL}.png`}
                alt=""
                className="w-full bg-grey-100"
              />
              <div className="m-2 font-title">
                <h2 className="text-sm">{product.name}</h2>
                <p className="text-xs text-gray-700">R$ {product.price}</p>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
