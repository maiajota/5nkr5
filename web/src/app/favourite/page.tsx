import { SearchNavBar } from '@/components/SearchNavBar'
import { getUser } from '@/lib/auth'
import { Product } from '@/lib/product'
import { getProduct } from '@/services/product'
import { getUserFavouriteProductIds } from '@/services/users'

async function getUserFavouriteProducts(id: string): Promise<Product[]> {
  const productIds = await getUserFavouriteProductIds(id)
  return await Promise.all(
    productIds.map((productId: string) => getProduct(productId)),
  )
}

export default async function Favourite() {
  const { id } = getUser()
  const products = await getUserFavouriteProducts(id)

  return (
    <main>
      <SearchNavBar />
      <section className="grid-nav screen-space grid gap-4">
        {products.map((product) => {
          return (
            <a
              key=""
              className="max-w-[300px] cursor-pointer"
              href={`/nav/${product.id}`}
            >
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
      </section>
    </main>
  )
}
