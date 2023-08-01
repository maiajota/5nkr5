import { api } from '@/lib/api'
import { Product } from '@/lib/product'

export async function getUserFavouriteProductIds(id: string) {
  const response = await api.get(`/users/${id}/favourite`)
  return response.data.map((item: Product) => item.productId)
}
