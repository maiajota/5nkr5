import { api } from '@/lib/api'
import { Heart } from 'lucide-react'
import { SearchNavBar } from '@/components/SearchNavBar'

interface Product {
  id: string
  imageURL: string
  name: string
  style: string
  price: number
}

const shoesNumber = [
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '47',
  '48',
]

export default async function ProductPage({
  params,
}: {
  params: { id: string }
}) {
  const res = await api.get(`/products/${params.id}`)
  const productData: Product = res.data

  return (
    <section className="text-center">
      <SearchNavBar />
      <div className="screen-space flex flex-col gap-2">
        <img
          src={`/images/products/${productData.imageURL}.png`}
          alt="Product image"
          className="w-full bg-grey-100"
        />
        <h2 className="font-title text-2xl">{productData.name}</h2>
        <p className="mb-8 text-gray-800">R${productData.price}</p>
      </div>
      <h2 className="screen-space mb-2 font-title text-sm">Tamanho</h2>
      <div className="mb-12 flex flex-wrap justify-center gap-1">
        {shoesNumber.map((number) => {
          return (
            <button
              className="w-[60px] rounded-lg border-2 border-grey-100 p-2"
              key=""
            >
              {number}
            </button>
          )
        })}
      </div>
      <div className="screen-space mb-12">
        <button className="mb-4 w-full rounded-xl bg-grey-600 py-4 font-bold text-white-100">
          COMPRAR
        </button>
        <button className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-grey-100 py-4 font-bold text-grey-600">
          SALVAR NOS FAVORITOS <Heart size={16} />
        </button>
      </div>
    </section>
  )
}
