import { cookies } from 'next/dist/client/components/headers'
import decode from 'jwt-decode'

interface User {
  sub: string
  name: string
  id: string
}

export function getUser(): User {
  const token = cookies().get('token')?.value

  if (!token) {
    throw new Error('Unauthenticated!')
  }

  const user: User = decode(token)

  return user
}
